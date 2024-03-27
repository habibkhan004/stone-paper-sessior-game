let userScore=0;
let comScore=0;

let user=document.querySelectorAll(".choice");
let result=document.querySelector("#res");
let u=document.querySelector("#user");
let c=document.querySelector("#comp");

let gencompChoice= () =>{
     let index=Math.floor(Math.random()*3);
     let options=["rock","paper","sessior"];
     return options[index];
}

let playGame=(userChoice)=>{
    console.log("user choice",userChoice)
    const compChoice= gencompChoice();
    console.log("compter choice",compChoice);
    if(userChoice===compChoice){
        result.innerText="Game Draw";
        result.style.backgroundColor="rgb(39, 35, 35)";
    }
    if(userChoice==="rock" && compChoice==="paper"){
        result.innerText=`You lose! Your ${userChoice} beats by ${compChoice}`;
        result.style.backgroundColor="red";
        comScore++;
        c.innerText=comScore;
    }
    if(userChoice==="rock" && compChoice==="sessior"){
        result.innerText=`You wins! Your ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor="green";
        userScore++;
        u.innerText=userScore;
    }
    if(userChoice==="paper" && compChoice==="rock"){
        result.innerText=`You wins! Your ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor="green";
        userScore++;
        u.innerText=userScore;
    }
    if(userChoice==="paper" && compChoice==="sessior"){
        result.innerText=`You lose! Your ${userChoice} beats by ${compChoice}`;
        result.style.backgroundColor="red";
        comScore++;
        c.innerText=comScore;
    }
    if(userChoice==="sessior" && compChoice==="rock"){
        result.innerText=`You lose! Your ${userChoice} beats by ${compChoice}`;
        result.style.backgroundColor="red";
        comScore++;
        c.innerText=comScore;
    }
    if(userChoice==="sessior" && compChoice==="paper"){
        result.innerText=`You wins! Your ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor="green";
        userScore++;
        u.innerText=userScore;
    }
}


user.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})