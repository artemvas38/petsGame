let petStarvationText = document.getElementById(`pet_starvation__text`);
let moneyText = document.getElementById(`money__text`);
let petName = document.getElementById(`pet_name`);

let food1 = document.getElementById(`food1`);
let food2 = document.getElementById(`food2`);

let money = 100;
let petStarvation = 30;

const food1Cost = 30;
const food2Cost = 50;

const food1Saturation = 30;
const food2Saturation = 50;

let spendHungerTimer;

(function spendHungerTimerFunc() {
    petStarvation--;
    if (petStarvation < 0) {
        clearTimeout(spendHungerTimer);
        petName.innerHTML = `Your pet is died`;
    }
    else {
        timer = setTimeout(spendHungerTimerFunc, 1000);
        moneyText.innerHTML = money;
        petStarvationText.innerHTML = `${petStarvation}/100`;
    }
}())


food1.addEventListener(`click`, function () {
    if ((money >= food1Cost) && ((petStarvation + food1Saturation) <= 100)) {
        money -= food1Cost;
        petStarvation += food1Saturation;
    }
})

food2.addEventListener(`click`, function () {
    if ((money >= food2Cost) && ((petStarvation + food2Saturation) <= 100)) {
        money -= food2Cost;
        petStarvation += food2Saturation;
    }
})


