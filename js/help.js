let tabLabel = document.querySelectorAll('.tab-label');
let tabContent = document.querySelectorAll('.tab-content');

let tabs = document.querySelectorAll('.tab');
let tabsParent = document.querySelector('.tabs');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (event) => {
        const target = event.target;
        tabs[i].classList.add('active'); 
        
        if(target == tabLabel[i]) {
            tabs.forEach(item => {
            item.classList.remove('active');
            });
        }
    });        
}  