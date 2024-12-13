let text2 = document.getElementById("text2");
function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min;
  }

score_solve2.addEventListener("click", (event) => {
    event.preventDefault()
    abbb = getRandomInt(1, 10);
    switch(abbb){
        case 0:
            text2.textContent = "Отчисляйся!";
            break;
        case 1:
            text2.textContent = "Живи пока!";
            break;
        case 2:
            text2.textContent = "Пиши заявление на уход!";
            break;
        case 3:
            text2.textContent = "Я буду жить!";
            break;
        case 4:
            text2.textContent = "Да пошло это все!";
            break;
        case 5:
            text2.textContent = "Мне и тут хорошо!";
            break;
        case 6:
            text2.textContent = "Пойду на завод!";
            break;
        case 7:
            text2.textContent = "Не, остаюсь!";
            break;
        case 8:
            text2.textContent = "Adios!";
            break;
        case 9:
            text2.textContent = "Ща на пару приду!";
            break;
        case 10:
            text2.textContent = "Skill issue!";
            break;
    }
});