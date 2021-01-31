const quizContainer = document.getElementById("quiz-container")
const feedback = document.getElementById("feedback")
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

const createButton = function() {
  for (let i = 0; i < quizcontent.chioce.length; i++) {
    const button = document.createElement("button")
    button.textContent = quizcontent.chioce[i].text
    quizContainer.append(button)
    //i番目のやつもってくる
    button.onclick = function() {
      feedback.textContent = quizcontent.chioce[i].feedback
    }
  }
}
createButton()
