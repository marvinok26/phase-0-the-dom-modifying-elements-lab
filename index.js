const rmMain = document.getElementById('main');
rmMain.remove();

const newHeader = document.createElement('h1');
newHeader.id='victory';
newHeader.textContent='YOUR-NAME is the champion';

document.body.append(newHeader);