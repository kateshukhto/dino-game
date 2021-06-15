const dino = document.querySelector('#dino'),
    cactus = document.querySelector('#cactus'),
    score = document.querySelector('.score'),
    box = document.querySelector('.box'),
    gameover = document.querySelector('.gameover'),
    btn = document.querySelector('.btn');

let count = 0;

window.addEventListener('keydown', () => {
    count++;
    dino.classList.add('jump')

    setTimeout(() => {
        dino.classList.remove('jump')
    }, 500)

    if (count < 100) {
        score.textContent = `00${count}`;
    } else if (count > 10) {
        score.textContent = `0${count}`;
    } else {
        score.textContent = count
    }

})

setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).top);
    let cactusLeft = parseInt(window.getComputedStyle(cactus).left);

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        box.style.display = 'none';
        gameover.style.display = 'block';
    }

}, 10);

btn.addEventListener('click', () => {
    gameover.style.display = 'none';
    box.style.display = 'block';
})