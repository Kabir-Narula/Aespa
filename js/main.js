
let ht = $(window).height();
console.log(ht);
$('section').height(ht);

// 화면이 축소되면 크기가 section 높이값이 자동 변경
$(window).resize(function(){
  let ht = $(window).height();
  $('section').height(ht)
});
$('section').mousemove(function(e){
  let posX = e.pageX;
  let posY = e.pageY;

    // 첫번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
  $('.p11').css({ right : 0-(posX/30), bottom : 0-(posY/30) });
  $('.p12').css({ right : 0+(posX/20), bottom : 0+(posY/20) });
  $('.main_snake').css({ left : 300+(posX/20), top : -50+(posY/20) });

  // 두번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
  $('.p21').css({ left : 0-(posX/30), top : 0-(posY/30) });
  $('.p22').css({ left : 0+(posX/50), bottom : 0+(posY/50) });
  $('.snake1').css({ right : 60+(posX/20), top : 180+(posY/20) });


    // 세번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
  $('.p31').css({ left : 0-(posX/30), top : 0-(posY/30) });
  $('.p32').css({ right : 0+(posX/20), top : 0+(posY/20) });
  $('.snake2').css({ left : -500+(posX/20), bottom : -200+(posY/20) });

    // 네번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
    $('.p41').css({ right : 0-(posX/30), top : 0-(posY/30) });
    $('.p42').css({ right : 0+(posX/20), bottom : 0+(posY/20) });
    $('.snake3').css({ right : -500+(posX/20), bottom: 50+(posY/20) });

    
    // 네번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
    $('.p51').css({ right : 180-(posX/30), top : 70-(posY/30) });
    $('.p52').css({ right : 110+(posX/20), bottom : -28+(posY/20) });
    $('.snake4').css({ left : 0+(posX/20), bottom: -150+(posY/20) });
});

$(window).scroll(function(){

  let ht = $(window).height();
  let scroll = $(window).scrollTop();
  for(let i = 0; i<6; i++){
  if(scroll >= ht*i && scroll < ht*(i+1)) {
    $('.menu li').removeClass();
    $('.menu li').eq(i).addClass('on');
  }
  }
});

// 메뉴 클릭시 페이지 이동
$('.menu li').click(function(event){

  event.preventDefault();
  let ht = $(window).height();
  let i = $(this).index();
  let nowTop = i*ht;
  $("html, body").stop().animate({scrollTop : nowTop}, 1400);

});

$('section').mousewheel(function(event, delta){
  if (delta > 0) {
    let prev = $(this).prev().offset().top; 
    console.log(prev);
    $("html, body").stop().animate({ scrollTop : prev }, 1400,'easeOutBounce');
  }

    else if (delta < 0) {
    let next = $(this).next().offset().top; 
    $("html, body").stop().animate({ scrollTop : next }, 1400, 'easeOutBounce');
  }

});