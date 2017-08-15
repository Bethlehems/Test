var target = document.querySelector('#new');
var div = document.createElement('div');
div.innerHTML = 'a new element is created';
target.parentNode.insertBefore( div, target );
target.parentNode.insertBefore( div, target.nextSibling );