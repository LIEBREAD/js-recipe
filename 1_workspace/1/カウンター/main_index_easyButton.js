const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const substractButton = document.getElementById("substract-button")
const dobbleButton = document.getElementById("dubble-button")

let count = 0

// ボタンをクリックしたときの処理を登録
plusButton.onclick = function() {
  // ここにクリック後の処理を書く
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}
// ボタンをクリックしたときの処理を登録
substractButton.onclick = function() {
  // ここにクリック後の処理を書く
  // count を更新
  count -= 1
  // count を表示
  display.textContent = count
}

dobbleButton.onclick = function() {
  // ここにクリック後の処理を書く
  // count を更新
  count = count * 2
  // count を表示
  display.textContent = count
}
