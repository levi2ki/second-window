const arr = [1, 7, 90, 19, 7, 3, 6, 11, 2, 44, 90, 12];

function getLess(arr) {
  const less = [];
  arr.forEach(n => less[n] != null ? less[n] = less[n] + 1 : less[n] = 1)
  return less
}

console.dir(getLess(arr))

function getPos(less, arr) {
  
}