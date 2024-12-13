let text1 = document.getElementById("text1");
let rating1 = document.getElementById("rating1");
let final1 = document.getElementById("final1");

let res = 0;

function stepyxa1() {
    const rat1 = parseInt(rating1.value) || 0;
    let fin1 = 71;
    const ex_res = (((6*rat1-10*fin1)/4)*-1);
    final1.textContent = ex_res.toFixed(1);
}

score_solve1.addEventListener("click", (event) => {
    event.preventDefault()
    stepyxa1();
});