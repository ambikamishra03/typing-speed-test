const setOfWords=[
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, harum laudantium ipsum officia excepturi commodi laboriosam? Dolorem maxime voluptates quas ratione accusamus vel impedit et aspernatur sapiente modi, labore dicta?",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, error corruptiqui magni dignissimos exercitationem quasi voluptatem harum quia natus?",
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quo vitae quasillo laudantium nisi distinctiodoloribus. Consequatur enim, id quo ratione architecto nisi eligendi?"
];
const msg=document.getElementById('msg');
const mytext=document.getElementById('mytext');
const btn=document.getElementById('btn');
let startTime, endTime;

const playGames = ()=>{
    let randomNum =Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNum];
    let date = new Date();
    startTime = date.getTime();
       btn.innerText= "Done";

}
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime =((endTime - startTime)/1000);
    // console.log(totalTime);
    let totalString = mytext.value;
    let wordCount = wordCounter(totalString);
    let speed = Math.round((wordCount/totalTime)*60);
    // console.log(speed);
     let finalmsg = "Your total speed is " + speed + " words per minutes, "
      finalmsg += compareWords(msg.innerText,totalString);
     msg.innerText = finalmsg;
 
}
const compareWords = (str1,str2) => {

let w1=str1.split(" ");
let w2=str2.split(" ");
let cnt=0;
        w1.forEach(function(item, index) {
          if(item ==w2[index]){
            cnt++;
          } 
        })
        let error = (w1.length - cnt);
        return (" " +cnt + " correct Out of " + w1.length + 
        " words and the total number of error are "+ error + ".");
}
const wordCounter = (str) => {
     let response =str.split(" ").length;
    //  console.log(response);
     return response;
}
// by pressing button we can see some text 
btn.addEventListener('click',function(){
    if(this.innerText== 'Start'){
        mytext.disbaled = false;
        playGames();
    }else if(this.innerText == "Done"){
        mytext.disbaled = true;
        btn.innerText ="Start";
        endPlay();
    }
})