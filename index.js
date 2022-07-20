let a=0,
    b=0,
    fun=null

const button0 = document.getElementById("button0")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")
const buttonPlus = document.getElementById("button+")
const buttonSub = document.getElementById("button-")
const buttonX = document.getElementById("buttonx")
const buttonDiv = document.getElementById("button/")
const buttonEqual = document.getElementById("button=")
const display = document.querySelector("#display")
const resetButton =document.getElementById("resetButton")


resetButton.addEventListener('click',()=> {
    a=0
    b=0
    fun=null
    display.value="0"
})
button0.addEventListener('click',()=> display.value==="0"? display.value="0":display.value+="0")
button1.addEventListener('click',()=>display.value==="0"? display.value="1":display.value+="1")
button2.addEventListener('click',()=>display.value==="0"? display.value="2":display.value+="2")
button3.addEventListener('click',()=>display.value==="0"? display.value="3":display.value+="3") 
button4.addEventListener('click',()=>display.value==="0"? display.value="4":display.value+="4")
button5.addEventListener('click',()=>display.value==="0"? display.value="5":display.value+="5")
button6.addEventListener('click',()=>display.value==="0"? display.value="6":display.value+="6")
button7.addEventListener('click',()=>display.value==="0"? display.value="7":display.value+="7")
button8.addEventListener('click',()=>display.value==="0"? display.value="8":display.value+="8")
button9.addEventListener('click',()=>display.value==="0"? display.value="9":display.value+="9")
buttonPlus.addEventListener('click',()=>{
    a=display.value
    fun=sum
    display.value="0"
})
buttonSub.addEventListener('click',()=>{
    a=display.value
    fun=sub
    display.value="0"
})
buttonX.addEventListener('click',()=>{
    a=display.value
    fun=mult
    display.value="0"
})
buttonDiv.addEventListener('click',()=>{
    a=display.value
    fun=div
    display.value="0"
})
buttonEqual.addEventListener('click',()=>{
    b=display.value
    display.value = fun(a,b)
})

function sum(a,b) {
   return parseFloat(a) + parseFloat(b) 
}

function sub(params) {
    return parseFloat(a) - parseFloat(b)
}

function mult(params) {
    return parseFloat(a) * parseFloat(b)
}

function div(params) {
    return parseFloat(a) / parseFloat(b)
}