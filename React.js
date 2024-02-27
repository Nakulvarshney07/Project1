let modeBtn = document.querySelector(".mode");
let currMode = "light";//dark   

modeBtn.addEventListener("click", () => {
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="#f0f8ff";
        document.querySelectorAll(".new").style.color = "#f0f8ff";
    } else {
        currMode="light";
        document.querySelector("body").style.backgroundColor= "#f0f8ff";
        document.querySelector("body").style.color="black";
        document.querySelectorAll(".new").style.color = "black";
    }

    console.log(currMode);
});