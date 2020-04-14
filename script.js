const but1 = document.getElementsByClassName("b1")[0];
const but2 = document.getElementsByClassName("b2")[0];
const but3 = document.getElementsByClassName("b3")[0];
const but4 = document.getElementsByClassName("b4")[0];
const bl1 = document.getElementsByClassName("block-1")[0];
const bl2 = document.getElementsByClassName("block-2")[0];
const bl3 = document.getElementsByClassName("block-3")[0];
const bl4 = document.getElementsByClassName("block-4")[0];

const buttons = [but1, but2, but3, but4];
const frames = [bl1, bl2, bl3, bl4];
but1.addEventListener("click", function(event){
    for (i = 0; i < 4; i++){
        buttons[i].classList.remove("red");
        buttons[i].classList.remove("bigger");
    }
    for (i = 0; i < 4; i++){
        frames[i].classList.add("hidden");
    }
    buttons[0].classList.add("red");
    buttons[0].classList.add("bigger");
    frames[0].classList.remove("hidden");
});
but2.addEventListener("click", function(event){
    for (i = 0; i < 4; i++){
        buttons[i].classList.remove("red");
        buttons[i].classList.remove("bigger");
    }
    for (i = 0; i < 4; i++){
        frames[i].classList.add("hidden");
    }
    buttons[1].classList.add("red");
    buttons[1].classList.add("bigger");
    frames[1].classList.remove("hidden");
});
but3.addEventListener("click", function(event){

});
but4.addEventListener("click", function(event){

});