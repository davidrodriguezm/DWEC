var bingo = [];

function rellenarCarton(){
    for (let i = 0; i <= 3; i++) {
        let array = [];
        for (let j = 0; j <= 5; j++) {
            array[j] = Math.floor(Math.random() * (99 - 1) + 1);
        }
        bingo[i] = Array;
    }
}
