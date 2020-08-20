import  { defaults }  from 'lodash'

function helloWorld() {
  console.log('Hello World!');

  var r = defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
  console.log(r);
}

export {
  helloWorld
}
