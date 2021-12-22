//중복된 요소 부분 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus(); //포커스를 강제 적용시켜주는 명령어
});
searchInputEl.addEventListener('focus', function() { //포커스시
   searchEl.classList.add('focused'); //클래스를 추가한다 
   searchInputEl.setAttribute('placeholder','통합검색'); //속성을 적용시킨다
   //인수 첫번째는 속성의 이름 2번째는 값
});
searchInputEl.addEventListener('blur', function() { //포커스 해제시
    searchEl.classList.remove('focused'); //클래스를 삭제한다
    searchInputEl.setAttribute('placeholder',''); //속성을 적용시킨다
    //인수 첫번째는 속성의 이름 2번째는 값
 });

 const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021출력
