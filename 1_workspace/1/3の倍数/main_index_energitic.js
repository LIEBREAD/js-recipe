// const display = document.getElementById("display")
// const button = document.getElementById("button")

// let count = 0

// const countUp = function() {
//   // count を更新
//   count += 1
//   // count を秒単位にして表示
//   display.textContent = count / 100
// }
// // 実行中のタイマーのid
// let id = null // null は 値なし を意味する値

// button.onclick = function() {
//   if (id === null) {
//     // 10ms ごとに countUp を実行するように登録する
//     id = setInterval(countUp, 10) //what's in ID？//クリック回数？？
//     console.log("これがid＝" + id)
//     console.log("これがcount=" + count)
//     console.log(display.textContent)
//     let i = display.textContent.toString()
//     if (i % 3 === 0) {
//       display.textContent = i + "!!!!!!!"
//     } else {
//       display.textContent = i
//     }
//     button.textContent = "stop"
//   } else {
//     clearInterval(id)
//     id = null
//     button.textContent = "start"
//   }
// }

// コンマ刻みなしver
const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countfunc = function() {
  if (count % 3 === 0) {
    display.textContent = count + "！！！！！"
  } else {
    display.textContent = count
  }
}

const countUp = function() {
  // count を更新
  count += 1
  countfunc()
}

let id = null

button.onclick = function() {
  if (id == null) {
    id = setInterval(countUp, 1000)

    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
