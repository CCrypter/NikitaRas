let rating = document.getElementById("rating");
let exam = document.getElementById("exam");
let final = document.getElementById("final");

let res = 0;

function stepyxa() {
    const rat = parseInt(rating.value) || 0;
    const ex = parseInt(exam.value) || 0;
    const fin_res = ((0.6*rat+0.4*ex));
    final.textContent = fin_res.toFixed(1);
    if (fin_res >= 71){
        text1.textContent = "Достоин! =)"
    }
    if (fin_res < 70){
        text1.textContent = "Ему деньги не даем!"
    }
    if (fin_res > 100){
        text1.textContent = "Чет много -_-"
    }
}

score_solve.addEventListener("click", (event) => {
    event.preventDefault()
    stepyxa();
});