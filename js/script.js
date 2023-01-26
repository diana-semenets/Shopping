window.addEventListener('DOMContentLoaded', () => {

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

//---------------------//
function showDate () {
    let now = new Date();
  
    let span = document.querySelector(".news__cards-data");
    let date = now.getDate();               
    let months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    let month = months[now.getMonth()];
     
    span.innerHTML = `${date}.${month}`;     
}
//---------------------//

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    document.body.style.overflow = 'hidden';
})
menu.addEventListener('click', (e) => {
    if (e.target === menu ) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');  
        document.body.style.overflow = '';      
    }
});

//---------------------//

showDate()

});