const imageElement = document.getElementById("dog-image")
const switchbutton = document.getElementById("switchbutton")

switchbutton.onclick = function() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      imageElement.src = data.message
    })
}
