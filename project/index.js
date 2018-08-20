//Two arrays (two parameters). Intertwine them
//Array1: ["D", "O", "G"], Array2: ["C", "A", "T"]
//Output: ["D", "C", "O", "A", "G", "T"]

const array = (arrayOne, arrayTwo) => {
  let newArray = []
  //let combinedArray = arrayOne.concat(arrayTwo)
  for (let i = 0; i < arrayOne.length || i < arrayTwo.length; i++) {
    newArray.push(arrayOne[i], arrayTwo[i])
  }
  return newArray
}
array(["D", "O", "G"], ["C", "A", "T"])
