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
        
 
document.addEventListener("click", () =>{
boom1.play();
})

document.addEventListener("click", () =>{
clap1.play();
})

document.addEventListener("click", () =>{
hihat1.play();
})
document.addEventListener("click", (event) =>{
kick1.play();
})
document.addEventListener("click", (event) =>{
openhat1.play();
}
document.addEventListener("click", (event) =>{
ride1.play();
})
document.addEventListener("click", (event) =>{
snare1.play();
})
document.addEventListener("click", (event) =>{
tink1.play();
})
document.addEventListener("click", (event) =>{
tom1.play();
})
