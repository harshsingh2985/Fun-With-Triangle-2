const inputs=document.querySelectorAll(".all-angleinputs")

const btndiv=document.querySelector("#submitbtn");

const output=document.querySelector("#outputdiv");



// to calculate the sum of all angle of triangle is 180

function calculatesumofallangle(angle1,angle2,angle3){
    const sum=angle1+angle2+angle3;
    return sum;

}
function isTriangle(){
    const angle=calculatesumofallangle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

    if(angle===180){
        output.innerText="Triangle Form AN ANGLE";

    }
    else{
        output.innerText="OPPS Triangle Does Not form An Angle";
        
    }

}

btndiv.addEventListener("click",isTriangle)
