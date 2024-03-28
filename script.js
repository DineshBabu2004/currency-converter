let url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
let dropdown = document.querySelectorAll(".dropdown select");
let from = document.querySelector(".from");
let to = document.querySelector(".to");
let img1 = document.querySelector(".from img");
let img2 = document.querySelector(".to img");
let btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");



for( select of dropdown){

    for (code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if ((select.name===`from`) && (code===`USD`)) {
            newOption.selected=`selected`;
        } else if(select.name===`to` && code===`INR` ) {
            newOption.selected=`selected`;
        }
        select.append(newOption);
        } 

        select.addEventListener(`change`,(evt)=>{
         updateFlag1(evt.target);
        });
        // select.addEventListener(`change`,(evt)=>{
        //  updateFlag1(evt.target);
        // });
    
}


const updateFlag1 = (element)=>{
  let currcode=element.value;
  let countryCode = countryList[currcode];
  if(element.name=="from"){
    let  newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
   img1.src = newSrc;
  }
  else if(element.name=="to"){
    let  newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
   img2.src = newSrc;
  }
}

btn.addEventListener("click",async (evt)=>{
 evt.preventDefault();
 let amount = document.querySelector(".amount input")
 let value = amount.value;
 
 const URL =`${url}${fromCurr.value.toLowerCase()}.json`;
 let response =await fetch(URL);
 let data = await response.json();
 let converted = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
let calculatedAmount = converted*value;
 console.log(calculatedAmount);
 msg.innerText=`${value} ${fromCurr.value} = ${calculatedAmount} ${toCurr.value}`
});
