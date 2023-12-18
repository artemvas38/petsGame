let petStarvationText = document.querySelector(`#pet_starvation__text`);
let moneyText = document.querySelector(`#money__text`);

let food1 = document.querySelector(`#food1`);
let food2 = document.querySelector(`#food2`);

let money = 100;
let petStarvation = 30;

let food1Cost = 30;
let food2Cost = 50;

let food1Saturation = 30;
let food2Saturation = 50;




food1.addEventListener(`click`, function () {
    money -= food1Cost;
    petStarvation += food1Saturation;
    // переделать нафиг, хрень идея
    moneyText.innerHTML = money;
    petStarvationText.innerHTML = petStarvation;
})

food2.addEventListener(`click`, function () {
    money -= food2Cost;
    petStarvation += food2Saturation;
    // переделать нафиг, хрень идея
    moneyText.innerHTML = money;
    petStarvationText.innerHTML = petStarvation;
})


