var animationTivel = lottie.loadAnimation({
  container: document.getElementById('tivel'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/check.json'
});

var animationTivel2 = lottie.loadAnimation({
  container: document.getElementById('tivel2'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'json/check.json'
});

var animationTivel3 = lottie.loadAnimation({
  container: document.getElementById('tivel3'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/present.json'
});
animationTivel3.setSpeed(0.8);

$(function(){
  $('.btn').on('click',function(){
    if(!$(this).hasClass('on')){
      $(this).addClass('on');
      $(this).text('戻る');

      //再生
      animationTivel3.play();     

    } else {
      $(this).removeClass('on');
      $(this).text('クリック');

      //リセット
      animationTivel3.stop();
    }
  });
});