let sound = document.querySelector("#keys")
let keypress = event.key

let boom1 = document.getElementById("boom1");
let clap1 = document.getElementById("clap1");
let hihat1 = document.getElementById("hihat1").play("hithat.wav");
let kick1 = document.getElementById("kick1").play("kick.wav");
let openhat1 = document.getElementById("openhat1").play("openhat.wav");
let ride1 = document.getElementById("ride1").play("ride.wav");
let snare1 = document.getElementById("snare1").play("snare.wav");
let tink1 = document.getElementById("tink1").play("tink.wav");
let tom1 = document.getElementById("tom1").play("tom.wav");

document.addEventListener("keypress", (event) => {
  if (event.key == "b" ) { 
     boom1.play();
    }else if 
      (event.key =="c"){ 
        clap1.play()
      }else if 
        (event.Key == "h"){
        hihat1.play()
        } else if 
          (event.key == "k"){
          kick1.play()  
        } else if 
          (event.key == "o"){
          openhat1.play()
        }else if 
          (event.key == "r"){
          openhat1.play()
        }else if 
          (event.key == "s"){
          ride1.play()
        }else if 
          (event.key == "t"){
          tink1.play()
        }else if 
          (event.key == "m"){
          tom1.play()  
      }
    })   
        
 
document.addEventListener("click"() {
boom1.play()
})

document.addEventListener("click"() => {
clap1.play()
})

document.addEventListener("click"() => {
hihat1.play()
})

document.addEventListener("click"() => {
kick1.play()
}) 
document.addEventListener("click"() => {
openhat1.play()
})
document.addEventListener("click"() => {
ride1.play()    
})

document.addEventListener("click"() => {
snare1.play()    
  })
  
addEventListener("click"() => { 
tink1.play()
  })

addEventListener("click"() => { 
tom1.play()
      })


//   const soundClap = document.getElementById("soundClap");
//      const clap = document.getElementById("clap");

//      const openhat1 = document.getElementById("openhat1");
//      const openhat = document.getElementById("openhat")    
// document.addEventListener("keypress", (event) => {
//     if (event.key == "e") {
//         openhat1.src = "/drumkit/sounds/clap.wav";
//         
//     }
// });

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