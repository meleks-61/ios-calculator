//variables

const previousElement =document.querySelector(".previous-display")
const currentElement =document.querySelector(".current-display")


const acButton = document.querySelector(".ac") ;
const pmButton = document.querySelector(".pm") ;
const percentButton = document.querySelector(".percent") ;

const divisionOperator = document.querySelector(".division") ;
const multipleOperator = document.querySelector(".multiplication") ;
const additionOperator = document.querySelector(".addition") ;
const subractionOperator = document.querySelector(".subtraction") ;
const decimalButton = document.querySelector(".decimal")
const equalOperator = document.querySelector(".equals");

const number0 = document.querySelector(".number-0");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const number6 = document.querySelector(".number-6");
const number7 = document.querySelector(".number-7");
const number8 = document.querySelector(".number-8");
const number9 = document.querySelector(".number-9");
const numbersArray = [
  number0,
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
];

let previousOperant = "";
let currentOperant = "";
let operator =""
let temporaryOperant;


//functions

function Percent(){
    currentOperant = currentOperant/100;
    DisplayNumbers();
}


function PlusMinus(){
    currentOperant = currentOperant*-1;
    DisplayNumbers();
}


function allClear(){
    if(!previousOperant){

      currentOperant = currentOperant.toString().slice(0,currentOperant.length-1);

    }else{
    previousOperant = "";
    currentOperant = "";
    operator ="";
    acButton.innerHTML="C" ;
    }
    
    DisplayNumbers(); 
}



function compute(){
   
    let computation;
    const previous = parseFloat(previousOperant);
    const current = parseFloat(currentOperant)

    // if (isNaN(previous) || isNaN(current)) return;
        
    
    switch (operator) {
        case "+":
            computation = previous + current
            
            break;
    
        case "-":
            computation = previous - current
            
            break;
    
        case "/":
            computation = previous / current
            
            break;
    
        case "*":
            computation = previous * current
        
            
            break;

        case "":
            computation = current

            break;

    
        default:
            break;
    }

    if (isNaN(computation)) return;
        
    

    currentOperant = computation ;
    previousOperant = "";
    operator ="";
    // currentOperant=currentOperant.toString();
    acButton.innerHTML="C"
    DisplayNumbers();
    temporaryOperant = currentOperant;
    currentOperant=""
}

function chosenOperators(selectedOperator){
    if (temporaryOperant) {
        previousOperant = temporaryOperant.toString();
        currentOperant="";
        temporaryOperant="";
        operator = selectedOperator;
        DisplayNumbers();
        return;

        
    }
   


    operator = selectedOperator;
    previousOperant = currentOperant;
    currentOperant = "";
    acButton.innerHTML ="AC"
    DisplayNumbers();

}

function DisplayNumbers(){ 
    if (operator) {
        previousElement.innerHTML = `${previousOperant} ${operator}`;
        
    }else{
        previousElement.innerHTML = previousOperant;
    }
    currentElement.innerHTML = currentOperant;
}


function AppendNumber(number){
   if (number === "." && currentOperant.includes(".")) return;
   if (number === 0 && currentOperant ==="0") return;
   if (currentOperant.length > 7) return;
       
   
    currentOperant =currentOperant.toString() + number;
   
        
    
        
    
    
    
    DisplayNumbers()
}

// Add Event Listener Number Bottom




for (let i=0;i< numbersArray.length; i++) {
    const number = numbersArray[i];
    

    number.addEventListener("click", () => {
       AppendNumber(i);
       temporaryOperant="";
    })
      
}


decimalButton.addEventListener("click", ()=>{
    AppendNumber(".");

})


//Add Event Operators

divisionOperator.addEventListener("click",() =>{
    chosenOperators("/");

})

multipleOperator.addEventListener("click",() => {
    chosenOperators("*");
})

additionOperator.addEventListener("click", () => {
    chosenOperators("+");
})

subractionOperator.addEventListener("click", () => {
    chosenOperators("-")
})


equalOperator.addEventListener("click", () => {
    compute();
})

//Add Event Listener Top Bottoms

acButton.addEventListener("click", ()=>{
    allClear();
})
pmButton.addEventListener("click", ()=>{
    PlusMinus();
    
})
percentButton.addEventListener("click", ()=>{
    Percent();
    
})






