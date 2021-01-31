const imageElement = document.getElementById("cat-image")
fetch("https://api.thecatapi.com/v1/images/search") // まず fetch でデータの取得をしにいき、
  .then((res) => {
    // fetch がおわったら１つめの then の中の関数を実行し、
    return res.json()
  })
  .then((data) => {
    // １つめが終わったら２つめの then の中の関数を実行します。
    imageElement.src = data[0].url
  })
