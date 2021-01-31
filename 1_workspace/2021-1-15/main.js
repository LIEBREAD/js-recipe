const Button1 = document.getElementById("button1")
const Button2 = document.getElementById("button2")
const Button3 = document.getElementById("button3")
const Feedback = document.getElementById("feedback")

Button1.onclick = function(){
    Feedback.textContent = "あってるよ"
}
Button2.onclick = function(){
  Button2.textContent = "あってるよ"
}
Button3.onclick = function(){
  Button3.textContent = "ちがうよ"
}

//オブジェクト自己紹介
const Takasu = {
  name : "Takasu",
  age : 20,
  birthday : "2000/12/20",
  hobby : ["game","computing","reading"],
  introduceSelf :function(name){
    alart("YOROSHIKU!I'M"+name+"!")
  } 


}