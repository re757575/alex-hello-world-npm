import { VERSION  } from "lodash/_version";

function helloWorld() {
  console.log('Hello World!');
  console.log(VERSION);
  // var r = defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
  // console.log(r);
  return VERSION;
}

export {
  helloWorld
}
