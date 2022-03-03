function countPositivesSumNegatives(input) {
  const answer = [];
  let positiveSum = 0;
  let negativeSum = 0;

  if (input && input.length) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positiveSum += 1;
      } else {
        negativeSum += input[i];
      }
    }
    answer.push(positiveSum);
    answer.push(negativeSum);
  }
  return answer;
}
