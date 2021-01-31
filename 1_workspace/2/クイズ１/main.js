const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const choice4 = document.getElementById("choice-4")
// クイズの内容
const quizcontent = {
  text:
    "語彙力チェック～～～？？にひらがなをいれて当てはまる単語を答えてね～～～",
  image: "Ganymede.jpg",
  chioce: [
    {
      text: "？？あ？？",
      feedback: "ないあがら、にしあじあ、",
    },
    {
      text: "？た？？？？",
      feedback: "したやじるし、すたーだすと",
    },
    {
      text: "？？？ぼ",
      feedback: "アメンボ、ちょうぼ",
    },
    {
      text: "？？ご？？",
      feedback: "むつごろう、だんごむし、りんごあめ、たまごやき",
    },
  ],
}
// quiz を画面に表示する関数
// 問題文を表示 // 画像を表示  // 選択肢（ボタン）の中身を表示
const reloadQuiz = function() {
  quizText.textContent = "Q." + quizcontent.text
  quizImage.src = "./images" + quizcontent.image
  choice1.textContent = quizcontent.chioce[0].text
  choice2.textContent = quizcontent.chioce[1].text
  choice3.textContent = quizcontent.chioce[2].text
  choice4.textContent = quizcontent.chioce[3].text
}

// choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
  feedback.textContent = quizcontent.chioce[choiceNumber].feedback
}

choice1.onclick = function() {
  choose(0)
}
choice2.onclick = function() {
  choose(1)
}
choice3.onclick = function() {
  choose(2)
}
choice4.onclick = function() {
  choose(3)
}
// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
