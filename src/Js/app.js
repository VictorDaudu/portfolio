/**** App.js By Daudu Victor *****/
const log = console.log;

class UI {
  showElem(btnId, elem) {
    let btnDom = document.getElementById(btnId);
    let elemDom = document.getElementById(elem);
    btnDom.addEventListener('click', () => {
      $(elemDom).removeClass('hide');
    });
  }
  hideElem(btnId, elem) {
    let btnDom = document.getElementById(btnId);
    let elemDom = document.getElementById(elem);
    btnDom.addEventListener('click', () => {
      $(elemDom).addClass('hide');
    });
  }
}
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() < 50) {
      $("header > nav").addClass("unpin");
      $(".#menu-bar div").css("background", "#fff");
    }
    else {
      $("header > nav").removeClass("unpin");
    }
  });

  const ui = new UI();
  /* Ul Methods */
  {
    ui.showElem('menu-bar', 'slideBar');
    ui.hideElem('sbClose', 'slideBar');
    ui.hideElem('sbClose', 'slideBar');
  }
  $('.sBcontent .slide-links a').click(e => {
    $('#slideBar').addClass('hide');
  });
  $('#anime-obj').click(e => {
    $('html').animate({ scrollTop: 0 }, '500');
  });

  /************************ Js Plugins ************************/
AOS.init({
  easing: 'ease-in-out-sine'
});
// Headroom
var Header = document.querySelector('header nav');
var headroom = new Headroom(Header);
headroom.init();

});

/********* END OF CODE **********/
