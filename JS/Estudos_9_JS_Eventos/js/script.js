//1 - Adicionando eventos
const btn = document.querySelector('#my-button');

btn.addEventListener("click", function(){
    btn.style.backgroundColor = "red";
})

//2 - Adicionando eventos
function MudaACor(color){
    moreBtn.style.backgroundColor = "blue";
}

const moreBtn = document.querySelector('#more-button');

moreBtn.addEventListener('click', MudaACor);

const eventRemove = document.querySelector('#event-remove');
eventRemove.addEventListener('click', () => {
    moreBtn.removeEventListener('click', MudaACor);
})

// 3 - Argumento do evento

const mytitle = document.querySelector('#my-title');

mytitle.addEventListener('click', (event) => {
    console.log(event);
})

