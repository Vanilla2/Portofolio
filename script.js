const but1 = document.getElementsByClassName("b1")[0];
const but2 = document.getElementsByClassName("b2")[0];
const but3 = document.getElementsByClassName("b3")[0];
const but4 = document.getElementsByClassName("b4")[0];
const bl1 = document.getElementsByClassName("block-1")[0];
but1.addEventListener("click", function(event){
    if(bl1.classList.contains("hidden")){
        bl1.classList.remove("hidden");
        but1.classList.add("red");
        but1.classList.add("bigger");
    }
    else{
        bl1.classList.add("hidden");
        but1.classList.remove("red");
        but1.classList.remove("bigger");
    }
});
but2.addEventListener("click", function(event){

});
but3.addEventListener("click", function(event){

});
but4.addEventListener("click", function(event){

});