let numSec = document.querySelector(".number-sec")

for (let i = 1; i <= 100; i++ ){
    let square = document.createElement(`div`);
    square.classList.add(`box`);
    square.innerHTML = i;
    console.log(i);
    if (i % 15 == 0){
        square.classList.add(`buzzfizz`)
        square.innerHTML = "BuzzFizz";

    } else if (i % 3 == 0){
        square.classList.add(`fizz`)
        square.innerHTML = "Fizz";

    } else if (i % 5 == 0){
        square.classList.add(`buzz`)
        square.innerHTML = "Buzz";

    }
    numSec.append(square);

}



