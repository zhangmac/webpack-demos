 import _ from 'lodash' 
 import printMe from './print.js'
 import testMe from './test.js'

 function component () {
  var element = document.createElement('div');
  var btn = document.createElement('button')
  var btn1 = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!'
  btn1.innerHTML = 'Click me again and check the console!'
  btn.onclick = printMe
  btn1.onclick = testMe
  element.appendChild(btn)
  return element;
 }
 document.body.appendChild(component());


