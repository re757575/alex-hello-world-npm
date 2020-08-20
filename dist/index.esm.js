import _ from 'lodash';

// import chunk from 'lodash/chunk'

function helloWorld() {
  console.log('Hello World!');
  const r = _.chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
  console.log(r);
}

export { helloWorld };
