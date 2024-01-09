const decreaseBtn = document.getElementById('decrementBtn');
const increaseBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

const countLabel = document.getElementById('countLabel');

let count = 0;

increaseBtn.onclick = () => {
    count++;
    countLabel.innerText = count;
}

decreaseBtn.onclick = () => {
    count--;
    countLabel.innerText = count;
}

resetBtn.onclick = () => {
    count = 0;
    countLabel.innerText = count;
}

