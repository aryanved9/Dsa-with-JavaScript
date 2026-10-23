function primeUptoN(n){

  if (n <= 1) return 0

  let totalCountOfPrimeNumber = 0
  for(let i =  2; i <= n; i++){
    let isPrime = true
     for(let j = 2; j*j <= i; j++){
        if(i % j === 0){
            isPrime = false
        }
     }
     if(isPrime){
        totalCountOfPrimeNumber++
     }
  }
  return totalCountOfPrimeNumber
}

const testCases= [6, 10]
testCases.forEach((item) => {
    console.log(`input -> ${item}, Output -> ${primeUptoN(item)}`)
})