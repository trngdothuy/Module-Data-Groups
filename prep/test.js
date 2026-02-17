function uniqueSum(lst){
  //your magic code goes here
  let arr = []

  for (const item of lst) {
    if (!arr.includes(item)) {
      arr.push(item)
    }
  }
  console.log(arr)
  let sum = 0
  for (const item of arr) {
    sum += Number(item)
  }
  return sum
}

console.log(uniqueSum([1,2,3]))