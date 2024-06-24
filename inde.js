let newGame = document.querySelector(".new-game");
let value = document.querySelectorAll(".value");
let player = document.querySelector(".current-player");

let currentValue = 'X';
function initialize(){
    newGame.classList.remove("active");
    player.innerText = "Current Player - X";
    currentValue = 'X';
    value.forEach(function (v){
        v.innerText= "";
        v.classList.remove("green");
    });
}

function check(){
    for(let i=0; i<3; i++){
        let temp = document.querySelector(`.div${i}0`).innerText;
        if(temp!=""){
            let change = true;
            for(let j=0; j<3; j++){
                let temp2 = document.querySelector(`.div${i}${j}`).innerText;
                if(temp2==""){
                    change = false;
                    break;
                }
                if(temp!=temp2){
                    change = false;
                    break;
                }
            }
            if(change){
                for(let j=0; j<3; j++){
                    let temp2 = document.querySelector(`.div${i}${j}`);
                    temp2.classList.add("green");
                }
                newGame.classList.add("active");
                player.innerText = `Winner Player - ${temp}`;
            }
        }
    }

    for(let i=0; i<3; i++){
        let temp = document.querySelector(`.div0${i}`).innerText;
        if(temp!=""){
            let change = true;
            for(let j=0; j<3; j++){
                let temp2 = document.querySelector(`.div${j}${i}`).innerText;
                if(temp2==""){
                    change = false;
                    break;
                }
                if(temp!=temp2){
                    change = false;
                    break;
                }
            }
            if(change){
                for(let j=0; j<3; j++){
                    let temp2 = document.querySelector(`.div${j}${i}`);
                    temp2.classList.add("green");
                }
                newGame.classList.add("active");
                player.innerText = `Winner Player - ${temp}`;
            }
        }
    }

    let temp = document.querySelector(`.div00`).innerText;
    if(temp!=""){
        let change = true;
        for(let i=0; i<3; i++){
        
                let temp2 = document.querySelector(`.div${i}${i}`).innerText;
                if(temp2==""){
                    change = false;
                    break;
                }
                if(temp!=temp2){
                    change = false;
                    break;
                }
            }
            if(change){
                for(let i=0; i<3; i++){
                    let temp2 = document.querySelector(`.div${i}${i}`);
                    temp2.classList.add("green");
                }
                newGame.classList.add("active");
                player.innerText = `Winner Player - ${temp}`;
            }
    }


    temp = document.querySelector(`.div02`);
    if(temp.innerText!=""){
        let change = true;
        let temp4 =  document.querySelector(`.div11`);
        if(temp.innerText!=temp4.innerText){
            change = false;
        }
        let temp5 =  document.querySelector(`.div20`);
        if(temp.innerText!=temp5.innerText){
            change = false;
        }
            if(change){
                for(let i=0; i<3; i++){
                    temp.classList.add("green");
                    temp4.classList.add("green");
                    temp5.classList.add("green");
                }
                newGame.classList.add("active");
                player.innerText = `Winner Player - ${temp.innerText}`;
            }
    }
    
    }

function newGameCheck(){
    let ans = true;
    newGame.classList.forEach(function(i){
        if(i=="active"){
            ans = false;
        }
    })

    return ans;
}

value.forEach(function(v){
    v.addEventListener("click", function(){
        if(v.innerText == '' && newGameCheck()){
            v.innerText = currentValue;
            if(currentValue=='O'){
                currentValue = 'X';
            }
            else{
                currentValue='O';
            }
            player.innerText = `Current Player - ${currentValue}`;
            check();
        }
    })
});

newGame.addEventListener("click", initialize);
