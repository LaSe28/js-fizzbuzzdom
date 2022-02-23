for (let i = 1; i <= 100; i++ ){
    let element = document.createElement(`div`);
    element.classList.add(`box`);
    element.innerHTML = i;
    console.log(i);
    if (i % 15 == 0){
        element.classList.add(`buzzfizz`)
    } else if (i % 3 == 0){
        element.classList.add(`fizz`)
    } else if (i % 5 == 0){
        element.classList.add(`buzz`)
    }
    document.querySelector(".number-sec").append(element);
}

