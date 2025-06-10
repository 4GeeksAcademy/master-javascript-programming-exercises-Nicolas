function getElementsUpTo(array, n) {
  // your code here
  let getElementsUpTo = array.slice (0, n);
  return getElementsUpTo;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
