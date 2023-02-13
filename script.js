/* Declare variables below to save the different sections (divs) of your story*/
//first button options
let water = document.querySelector(".option-one");
let soda = document.querySelector(".option-two");
//two different first option screen
let waterDiv = document.querySelector(".option-one-screen");
let sodaDiv = document.querySelector(".option-two-screen");
//second button options
let dasani = document.querySelector(".dasani");
let pop = document.querySelector(".pop");
//two different end option screens
let winDiv = document.querySelector(".option-one-end");
let loseDiv = document.querySelector(".option-two-end");
//body
let body = document.querySelector("body");

water.onclick=function(){
    waterDiv.style.display="block";
};

soda.onclick=function(){
    sodaDiv.style.display="block";
};

dasani.onclick=function(){
	winDiv.style.display="block";
}; 


pop.onclick=function(){
    loseDiv.style.display="block";
};






/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


