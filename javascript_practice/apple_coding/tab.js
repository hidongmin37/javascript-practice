// 버튼 0 누르면
// 버튼 0에 orange클래스명 추가

// 버튼 ?에 붙은 orange 클래스명 제거
// 버튼 0에 orange 클래스명 추가

let tabBtns = document.querySelectorAll('.tab-button');
let contents = document.querySelectorAll('.tab-content');

console.log(tabBtns);
console.log(contents);

tabBtns.forEach((v, i, arr) => {
  v.addEventListener('click', (event) => {
    arr.forEach((innverV, innverIndex) => {
      innverV.classList.remove('orange');
    });
    event.target.classList.add('orange');
    contents.forEach((conV, contI) => {
      conV.classList.remove('show');
    });
    if (arr[i].classList.contains('orange')) {
      contents[i].classList.add('show');
    }
  });
});
