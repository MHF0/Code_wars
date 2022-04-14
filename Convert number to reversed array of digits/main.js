// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
  //code here
  return n.toString().split("").map(Number).reverse();
}
