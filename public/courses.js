 // menu
const btnMenu = document.getElementById('menu');
const nav = document.querySelector('.ul-n');


btnMenu.addEventListener(('click'), ()=>{
  nav.classList.toggle('menu-link')
})
 
 // Get all buttons with class btn
 const buttons = document.querySelectorAll('.btn');

 // Add event listener to each button
 buttons.forEach(button => {
   button.addEventListener('click', () => {
     // Get the parent card element
     const card = button.parentNode;
     
     // Get the hidden text element
     const hiddenText = card.querySelector('.more');
     
     // Toggle the display of the hidden text
     hiddenText.style.display = hiddenText.style.display === 'block' ? 'none' : 'block';
     
     // Change the button text
     button.textContent = hiddenText.style.display === 'block' ? 'Read Less' : 'Read More';
   });
 });











// const cards = [...document.getElementsByClassName('more')];
// const btns = [...document.getElementsByClassName('btn')];
// const btn_values = [...document.getElementsByClassName('btn')];

// const press = ()=>{
// cards.forEach((card)=>{
//                 btns.forEach((btn)=>{
//                    btn.addEventListener(('click'), ()=>{
//                        card.classList.toggle('new')
//                        // valu_sk.forEach((valu)=>{
//                        //     console.log(valu)
//                        // })
//                    })
//                 })
// })
// }










// btn_values.forEach((va)=>{
//     const value = va.innerText;
//     console.log(value)
//     if(value=='more'){

//         cards.forEach((card)=>{
//             btns.forEach((btn)=>{
//                btn.addEventListener(('click'), ()=>{
//                    card.classList.add('new')
//                    // valu_sk.forEach((valu)=>{
//                    //     console.log(valu)
//                    // })
//                })
//             })
        
//               const b=  value.innerHTML="less"
//                 console.log(b)
//            }) 

//     }
//     else{

//         cards.forEach((card)=>{
//             btns.forEach((btn)=>{
//                btn.addEventListener(('click'), ()=>{
//                    card.classList.remove('new')
//                    // valu_sk.forEach((valu)=>{
//                    //     console.log(valu)
//                    // })
//                })
//             })
//            }) 

//     }
// })




