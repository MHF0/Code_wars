function removeSmallest(numbers) {
  const smallest = Math.min.apply(null, numbers);
  const pos = numbers.indexOf(smallest);
  return numbers.slice(0, pos).concat(numbers.slice(pos + 1));
}
