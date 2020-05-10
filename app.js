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
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 500) {
			$('#anime-obj').addClass('animated fadeInRight');
			$('#anime-obj').removeClass('hide fadeOutRight');
		} else {
			$('#anime-obj').removeClass('animated fadeInRight');
			$('#anime-obj').addClass('animated fadeOutRight');
		}
	});

	const ui = new UI();
	/* Ul Methods */
	{
		ui.showElem('menu-bar', 'slideBar');
		ui.hideElem('sbClose', 'slideBar');
		ui.hideElem('overlay', 'slideBar');
	}
	$('.sBcontent .slide-links a').click((e) => {
		$('#slideBar').addClass('hide');
	});
	$('#anime-obj').click((e) => {
		$('html').animate({ scrollTop: 0 }, '600');
	});

	/**************** Js Libraries ****************/
	new NTyped(document.querySelector('#tip'), {
		strings: [
			'website creation ',
			'online advertisement',
			'website maintainance',
			'on-site SEO ',
			'social media marketing',
			'Graphic Design',
		],
		typeSpeed: 40,
		deleteSpeed: 30,
		loop: true,
		startDelay: 2200,
		showCursor: false,
	});
	AOS.init({
		easing: 'ease-in-out-sine',
	});
});

/********* END OF CODE **********/
