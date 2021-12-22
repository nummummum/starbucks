

//document는 html자체
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
//window는 윈도우 창
window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //화면이 스크롤시 scrollY가 변한다.
        //배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //버튼 보이기
        gsap.to(toTopEl, .2, {
          x: 0
        });  
    }
    else{
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        //버튼 숨기기
        //애니메이션을 제어할 요소를 직접 지정해줘도 되지만
        //gsap은 css선택자만 적어도 자동으로 찾아줘서 안 써도 된다.
        gsap.to(toTopEl, .2, {
          x: 100
        });        
    }
},300)); 
//프로젝트가 출력되는 화면에 스크롤이란 이벤트를 추가해 스크롤시 익명의 함수를 실행하게한다.
// Lodash에서 제공하는 throttle을 사용하여 제한을준다.300은 0.3s를 말한다.
// _.(throttle(함수, 시간))
//gsap.to(요소, 지속시간, 옵션); 많은 자바스크립트 옵션은 {}대괄호로 진행된다.

toTopEl.addEventListener('click',function () {
  gsap.to(window, .7, {
    scrollTo: 0
  }); //윈도우 객체는 화면에 출력되는 하나의 창
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
//fadeEls에서 찾은 요소들을 순차적으로 함수에서 쓸 수 있게 데이터로 내어준다.
fadeEls.forEach(function (fadeEl,index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

//Swiper
//new 함수();는 생성자(클래스)라고 한다.
//자바스크립트 내에서 여러가지 객체를 이용할 때 사용한다.
//new Swiper('css선택자', 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper', {
  //기본값 : direction: 'horizontal'
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }//이전과 다음 슬라이더를 볼 수 있는 기회
});
new Swiper('.awards .swiper',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, // 하나의 화면에 몇개의 슬라이드
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  //true false 전환
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  } else {
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

//범위 랜덤 함수(소수점 2자리까지)
function random(min,max){
  // '.toFixed()'를 통해 반환된 문자 데이터를,
  // 'parseFloat()'를 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, 
    random(1.5,2.5), 
    { //옵션
      y: size,
      repeat: -1, //무한반복
      yoyo: true, //요소 역재생
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  //Scene()은 감지 setClassToggle()은 클래스 제어
  new ScrollMagic
    .Scene({ //객체데이터
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //감지될위치
  })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

