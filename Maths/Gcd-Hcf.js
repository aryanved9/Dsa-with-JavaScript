// Gcd = Greatest common divisor Hcf = Highest common factor both are same.

// Brute force

var findHcf = function (a, b) {
  if (a === 0) return Math.abs(b);
  if (b === 0) return Math.abs(a);

  const minVal = Math.min(a, b);

  for (let i = minVal; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
};

console.log(findHcf(20, 40));
console.log(findHcf(11, 13));
console.log(findHcf(0, 1));
console.log(findHcf(6, 12));

// optimise way : Euclidean algorithm which say if given two numbers a and b,

// the Gcd(a,b) = Gcd(a-b, a) where a>b. further it will take more steps for input like (52, 10).
// So do this Gcd(a,b) = Gcd(a % b, b) where a>b , although both are give equal result difference in number of steps.
// explaination Gcd(52,10) = Gcd(2,10) > reverse cos a should be bigger Gcd(10,2) = (0,2) so the answer is 2 which Greatest common divisor.

// Conclusion greater % smaller until till one of them is zero and if one of them is zero the other is GCD.
// time complexity : log base phi(min(a,b))

const findGcd = function (a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  if (a === 0) return b;
  return a;
};

console.log(findGcd(20, 40));
console.log(findGcd(11, 13));
console.log(findGcd(0, 1));
console.log(findGcd(6, 12));
console.log(findGcd(5, 0));
