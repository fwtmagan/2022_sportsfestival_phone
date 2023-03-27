'use strict'

const buttonOpen = document.querySelectorAll('.button');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const buttonClose1 = document.querySelector('.modalClose1')
const buttonClose2 = document.querySelector('.modalClose2')


// ボタンがクリックされた時
buttonOpen[0].addEventListener('click', button);
buttonOpen[1].addEventListener('click', button);
function button(e) {
    if(e.target === buttonOpen[0]){
        modal1.style.display = 'block';
    } else {
        modal2.style.display = 'block';
    }
}
console.log(modal1.children[0].children[0].children[1])
// バツ印がクリックされた時
buttonClose1.addEventListener('click', modalClose);
buttonClose2.addEventListener('click', modalClose);
function modalClose(e) {
  if(e.target === buttonClose1){
      modal1.style.display = 'none';
  }else{
      modal2.style.display = 'none';
  }
}

// モーダルコンテンツ以外がクリックされた時
// addEventListener('click', outsideClose);
// function outsideClose(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }