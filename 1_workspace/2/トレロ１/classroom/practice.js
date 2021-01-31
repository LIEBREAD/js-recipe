const inputContainer = document.getElementById("input-container")
const inputTodo = document.getElementById("input-todo")
const addButton = document.getElementById("add-button")
console.dir(inputContainer)

let list = []
if (localStorage["memoTodo"]) {
  console.log("localStorage")
  list = JSON.parse(localStorage["memoTodo"]) //ストレージからでーたを撮ってきて
  for (let i = 0; i < list.length; i++) {
    console.log(list)
    let card = document.createElement("div") //カードを作製してテキストコンテツに代入する
    card.className = "card"
    card.textContent = list[i]
    inputContainer.append(card)
  }
}
addButton.onclick = function() {
  let text = inputTodo.value //追加ボタンが押されたら、テキストボックスに入力された文字をいれる
  list.push(text)
  localStorage["memoTodo"] = JSON.stringify(list) //リストをJSONに変換して、ストレーじにあげる
  console.log(list)

  let card = document.createElement("div") //入力された文字を新しいカードに入れて
  card.className = "card"
  card.textContent = text
  inputContainer.append(card)

  inputTodo.textContent = "" //テキストボックスを殻にする
}

//
//
