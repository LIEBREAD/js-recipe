const display = document.getElementById("display")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const add = document.getElementById("add")
const substract = document.getElementById("substract")
const times = document.getElementById("times")
const divive = document.getElementById("divive")
const clear = document.getElementById("clear")
const equle = document.getElementById("equle")

function append(n) {
  document.querySelector("input").value += n
}

function update(n) {
  document.querySelector("input").value = n
}

function calc() {
  // 「＝」ボタンが押されたので計算する

  const v = document.querySelector("input").value
  console.log(v)
  const f = new Function("return " + v)
  //vを計算んしてｆに入れる
  console.log(f)
  update(f().toString())
}

one.onclick = function() {
  append("1")
}
two.onclick = function() {
  append("2")
}
three.onclick = function() {
  append("3")
}
four.onclick = function() {
  append("4")
}
five.onclick = function() {
  append("5")
}
six.onclick = function() {
  append("6")
}
seven.onclick = function() {
  append("7")
}
eight.onclick = function() {
  append("8")
}
nine.onclick = function() {
  append("9")
}
zero.onclick = function() {
  append("0")
}
add.onclick = function() {
  append("+")
}
substract.onclick = function() {
  append("-")
}
times.onclick = function() {
  append("*")
}
divive.onclick = function() {
  append("/")
}
clear.onclick = function() {
  update("")
}
equle.onclick = function() {
  calc()
}
