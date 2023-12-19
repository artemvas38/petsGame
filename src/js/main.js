let petStarvationText = document.getElementById(`pet_starvation__text`);
let moneyText = document.getElementById(`money__text`);
let petName = document.getElementById(`pet_name`);

let food1 = document.getElementById(`food1`);
let food2 = document.getElementById(`food2`);

let food1Text = document.getElementById(`food1Text`);
let food2Text = document.getElementById(`food2Text`);

let endGameText = document.querySelector(`.end_game`);

// adversiment

let adNode = document.querySelector(`.ad`);
let adSVG = document.querySelector(`.ad_svg`);
let adText = document.querySelector(`.ad_text`);


let money = 100;
let petStarvation = 3;

const food1Cost = 30;
const food2Cost = 50;

const food1Saturation = 30;
const food2Saturation = 50;

let spendHungerTimer;
let adTimer;

let adTime = 10;

(function spendHungerTimerFunc() {
    petStarvation--;
    if (petStarvation < 0) {
        clearTimeout(spendHungerTimer);
        endGameText.style.display = `inline`;
        endGameText.innerHTML = `Your pet is died`;
        food1.style.display = `none`;
        food2.style.display = `none`;
        food1Text.style.display = `none`;
        food2Text.style.display = `none`;
    }
    else {
        timer = setTimeout(spendHungerTimerFunc, 1000);
        moneyText.innerHTML = money;
        petStarvationText.innerHTML = `${petStarvation}/100`;
    }
}())

adText.innerHTML = `Watch the ${adTime}-second commercial`

function adTimerFunc() {
    adTime--;
    if (adTime < 0) {
        clearTimeout(adTimer);
        adNode.style.display = `none`;
    }
    else {
        timer = setTimeout(adTimerFunc, 1000);
        if (adTime <= 5) {
            adSVG.style.display = `inline`;
        }
    }

}




food1.addEventListener(`click`, function () {
    if ((money >= food1Cost) && ((petStarvation + food1Saturation) <= 100)) {
        adTimerFunc()
        adNode.style.display = `flex`;
        money -= food1Cost;
        petStarvation += food1Saturation;
    }
})

food2.addEventListener(`click`, function () {
    if ((money >= food2Cost) && ((petStarvation + food2Saturation) <= 100)) {
        adTimerFunc()
        adNode.style.display = `flex`;
        money -= food2Cost;
        petStarvation += food2Saturation;
    }
})

food1Text.innerHTML = food1Cost;
food2Text.innerHTML = food2Cost;

adSVG.addEventListener(`click`, function () {
    clearTimeout(adTimer);
    adNode.style.display = `none`;
})

