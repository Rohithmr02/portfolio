const nav=document.getElementById("nav");
window.addEventListener('scroll',()=>{
const scroll=window.scrollY;
console.log(scroll);
 if(scroll>=50){
    nav.classList.add('nav-active');
 }else{
    nav.classList.remove('nav-active');
 }
})


// setInterval(()=>{
//     const images=['image1.jpg','game.png','dressing.png'];
//    
//    var index=0;
//     for(i=0;i<images.length;i++){
//         index=(index+1)%images.length;
//         slide.src=images[index];
//     }
// },1000);

// const images=['fakeyoutube.png','game.png','dressing.png'];
// let slide=document.getElementById("slide");
// var left_arrow=document.querySelector('.left-arrow');
// var right_arrow=document.querySelector('.right-arrow');


// right_arrow.addEventListener('click',()=>{
//   project_slide1.classList.add('fakeyoutube-active');
// })

// const down_arrow=document.getElementById("down-arrow");

// down_arrow.addEventListener('click',()=>{
//     window.scrollTo({
//         left:'100%',
//         top:'100%',
//         behavior:'smooth'
//     })
// })


function valid(event){
   const name=document.getElementById("name");
   const email=document.getElementById("email");
   const number=document.getElementById("number");
   const address=document.getElementById("address");
   const textarea=document.getElementById("textarea");
if(name.value==''){
   alert("Enter name");
   event.preventdefault();
   return false;
}
if(email.value==''){
   alert("Enter Email");
   event.preventdefault();
   return false;
}
if(number.value==''){
   alert("Enter mobile number");
   event.preventdefault();
   return false;
}
if(address.value==''){
   alert("Enter address");
   event.preventdefault();
   return false;
}
if(textarea.value==''){
   alert("Enter textarea");
   event.preventdefault();
   return false;
}
 return true;
}

