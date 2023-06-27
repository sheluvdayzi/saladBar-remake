let card = document.querySelectorAll('.cardIngredient');
let nbIngredients = document.querySelectorAll('.nbImg');
let promo = document.querySelector('#promotion');
let price = document.querySelector('#price');
let nbImg2 = document.querySelector('.nbImg2');
let validButton = document.querySelector('#validButton');
let prixConfirm = document.querySelector('.prixConfirm');


validButton.addEventListener('click', () => {
    if(document.querySelector('.container').classList.contains('none')){
        document.querySelector('.confirmContain').classList.remove('none');
        document.querySelector('.confirmContain').classList.remove('styleConfirm');
    } else{
        document.querySelector('.container').classList.add('none');
        document.querySelector('.confirmContain').classList.add('styleConfirm');
    }
});



let count = 0;
let prix = 8.5;
for(let i = 0; i < card.length; i++){
    card[i].addEventListener('click', () => {
        card[i].classList.toggle('bcgGreen');
        if(card[i].classList.contains('bcgGreen')){
            count++;
        }
        else{
            count--;
        }
        if(count == 0){
            promo.innerText = '';
        }
        else if(count == 1){
            promo.innerText = 'Double dose';
            price.innerText = '8,5€';
        }
        else if(count == 2){
            promo.innerText = '-1€50 de remise !';
            price.innerText = '7€';
        }
        else if(count == 3){
            promo.innerText = '';
            price.innerText = '8,5€';
        }
        else if(count == 4){
            promo.innerText = '-1€50 de remise !';
            price.innerText = '10€';
        }
        else if(count == 5){
            price.innerText = '11.5€';
        }
        else if(count == 6){
            price.innerText = '13€';
        }
        for(let i = 0; i < nbIngredients.length; i++){
            nbIngredients[i].innerText = count;
        }
        console.log(count);
    })
}