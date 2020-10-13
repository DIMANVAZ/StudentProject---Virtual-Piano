/* массивы - это неизменная часть*/
let massiv = ['A','S','D','F','G','H','J','W','E','T','Y','U'];
let audioSrc = ['A.mp3','S.mp3','D.mp3','F.mp3',
    'G.mp3','H.mp3','J.mp3','W.mp3','E.mp3','T.mp3','Y.mp3','U.mp3'];
/*===============ниже - блок нажимания через клавиатуру===================
document.addEventListener("keydown",function (event) {

    let audio = new Audio();
    for (let i = 0; i <massiv.length; i++) {
        if (event.code=="Key"+massiv[i]){
            console.log("The "+"'"+massiv[i]+"'"+" key is pressed.");
            audio.src=audioSrc[i];
            audio.autoplay=true;
        }}})   */

/* ===============это - блок нажимания через мышку============== */
let zvuk2 = new Audio();

 function soundClick() {
     addEventListener("click", function (event) {

         for (let i = 0; i <massiv.length ; i++) {
             if (event.target.id==massiv[i]){
                 zvuk2.src=audioSrc[i];
                 zvuk2.autoplay=true;
             } } } ) }

