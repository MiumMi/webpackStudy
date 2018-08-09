// import { cube } from './math.js';

// if (process.env.NODE_ENV !== 'production') {
//   console.log('looks like we are in development model');
// }

// function component () {
//   var element = document.createElement('div');
//   element.innerHTML = [
//     'hello webpack',
//     '5 cubed is equal to ' + cube(5)
//   ].join('\n\n')
//   return element;
// }

// let element = component()
// document.body.appendChild(element)
import _ from 'lodash';
// import Print from './print';

function component () {
  var element = document.createElement('div');

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.onclick = Print.bind(null, 'Hello webpack!');

  return element;
}
document.body.appendChild(component());