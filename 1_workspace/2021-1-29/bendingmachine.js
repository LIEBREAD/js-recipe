const display = document.getElementById("display")
const dicide = document.getElementById("dicide")
const input = document.getElementById("input")
const cola = document.getElementById("cola")
const drinklist = document.getElementById("drinklist")
const resive = document.getElementById("resive")
let numbertotal = 0 //display

//金額投入 追加が押されたら
dicide.onclick = function() {
  numbertotal += Number(input.value)
  display.textContent = numbertotal
}

//colaが押されたら
cola.onclick = function() {
  if (numbertotal >= 150) {
    const drink = document.createElement("div")
    drink.textContent = "cola"
    drinklist.append(drink)
  }
}
//返却ボタンが押されたら
resive.onclick = function() {
  const message = document.createElement("div")
  message.textContent = numbertotal + "円返却されました！"
  numbertotal = 0
  display.textContent = numbertotal
  drinklist.append(message)
}
