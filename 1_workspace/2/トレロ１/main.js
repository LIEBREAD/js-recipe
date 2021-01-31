/* 1.要素を取得する
2.カードを追加する
3.削除ボタンを作成する
4.カードの作成を関数にまとめる */
//1//
const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
//1end//

//add-containerボタンが押されたら
addButton.onclick = function() {
  //入力欄のテキストを取り出して、TEXTに入れる
  const text = inputElement.value
  //card 作成
  const card = document.createElement("div")
  card.className = "card"

  //to do 作成
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  //cardをtodoに入れる
  card.append(todo)
  //todoをcontainerに入れる
  todo.append(container)

  inputElement.value = ""

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function() {
    card.remove()
  }
}

//入力欄を空にする
