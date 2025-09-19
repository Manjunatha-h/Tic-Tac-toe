let boxes = document.querySelectorAll(".box");
let plrX = true;
let plr0 = false;

let winPos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
var count = 0;

boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(plrX){
            box.innerText = "X";
            box.style.color = "red";
            plrX = false;
            plr0 = true;
        }
        else{
            box.innerText = "O";
            box.style.color = "green";
            plr0 = false;
            plrX = true;
        }
        box.disabled = true;
        ++count;
        if(count>=5)
            CheckAns(count);
        
    })
});

function CheckAns(count) {
    for(pattern of winPos){
            let p1 = boxes[pattern[0]].innerText;
            let p2 = boxes[pattern[1]].innerText;
            let p3 = boxes[pattern[2]].innerText;
            if(count <= 9 && p1 != "" && p2 != "" && p3 != "" && p1 === p2 && p2 === p3){
                showAns(p1);
                Disable();
            }
            else if(count === 9 && (p1 !== p2 || p2 !== p3)){
                document.querySelector("#cont").innerText = `DRAWWW 😒😒`;
                document.querySelector(".win-conta").classList.remove("hide");
            }        
    }
}

function showAns(win){
        document.querySelector("#cont").innerText = `Congrats! '${win}' WON 🥳🥳!!!`;
        document.querySelector(".win-conta").classList.remove("hide");
}


function Disable(){
    boxes.forEach(box => {
        box.disabled = true;
    });
}

function reset(){
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        document.querySelector(".win-conta").classList.add("hide");
        count = 0;

    });
}