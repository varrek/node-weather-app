console.log('start');

setTimeout(() => {
  console.log('callback');
}, 200);

setTimeout(() => {
  console.log('second');
}, 0);

console.log('Finish');
