// import chunk from 'lodash/chunk'
import _ from 'lodash';

function helloWorld() {
  console.log('Hello World!');
  const r = _.chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
  console.log(r);
}

export {
  helloWorld
}
