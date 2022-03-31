let sound = document.querySelector("#container");


let boom1 = document.getElementById("boom1");
let clap1 = document.getElementById("clap1");
let hihat1 = document.getElementById("hihat1");
let kick1 = document.getElementById("kick1");
let openhat1 = document.getElementById("openhat1");
let ride1 = document.getElementById("ride1");
let snare1 = document.getElementById("snare1");
let tink1 = document.getElementById("tink1");
let tom1 = document.getElementById("tom1");

document.addEventListener("keypress", (event) => {
  let keypressed = event.key;
  if (keypressed == "b" ) { 
     boom1.play();
    }else if 
      (keypressed =="c"){ 
        clap1.play();
      }else if 
        (keypressed == "h"){
        hihat1.play();
        } else if 
          (keypressed == "k"){
          kick1.play();  
        } else if 
          (keypressed == "o"){
          openhat1.play();
        }else if 
          (keypressed == "r"){
          openhat1.play();
        }else if 
          (keypressed == "s"){
          ride1.play();
        }else if 
          (keypressed == "t"){
          tink1.play();
        }else if 
          (keypressed == "m"){
          tom1.play();  
      }
    })   
        
 
// 

// const clap1 = document.getElementById("clap1");


// if ( event.key == "e" ) {
//      document.getElementById("/drumkitchallenge/clap1").play();
// }
 

// }) 
//  let audioElement = newAudio("clap")
// let audioElement = newAudio("clap.wav");  
// document.addEventListener("click", (event) =>{
//   newAudio.play()
// })
// document.getElementById("boom").addEventListener("click",function(){
//   document.getElementById("clap1").play();
// } )