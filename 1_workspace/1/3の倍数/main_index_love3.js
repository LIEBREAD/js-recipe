const lovethree = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!")
    } else if (n.toString().match(/3/)) {
      console.log(n + "!!!!!!")
    } else {
      console.log(n)
    }
  }
}
lovethree(30)
