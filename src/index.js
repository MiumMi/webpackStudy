import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('looks like we are in development model');
}

function component () {
  var element = document.createElement('div');
  element.innerHTML = [
    'hello webpack',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')
  return element;
}

let element = component()
document.body.appendChild(element)
