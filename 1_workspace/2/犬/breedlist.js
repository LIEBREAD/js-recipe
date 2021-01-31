const cardContainer = document.getElementById("card-container")

//ボタンのテキストと押したときの反応をいれる//おしたときの反応は関数にする
//ボタンが生成される（画面がロードしたとき）、ボタンと反応をいれるコンテナも生成
//生成されたボタンにテキストを入れる
//ボタンが押されたとき、反応するイベントハンドラ（？）をいれる
//テキストは犬種、fetchでとってくるときのやつと同じにすればいい感じになりそう

//、ボタンを入れる箱
//画像をいれる箱
//ボタンと画像をまとめる箱
//まとめた箱を入れる箱

const createButtonBox = function() {
  for (let n = 0; n < content.button.length; n++) {
    const button = document.createElement("button")
    button.textContent = content.button[n]
    const imageContainer = document.createElement("img")
    const loading = function(i) {
      fetch("https://dog.ceo/api/breeds/list/all")
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          imageContainer.src = data.message.content.button[i].text
        })
    }
    button.onclick = function() {
      imageContainer.src = loading(n)
    }

    const box = document.createElement("div")
    box.className = "box"
    box.append(button)
    box.append(imageContainer)
    cardContainer.append(box)
  }
}

//i(犬種）と書かれた画像をもってくる

const content = {
  button: [{ text: "chihuahua" }, { text: "dalmatian" }, { text: "husky" }],
}
createButtonBox()
