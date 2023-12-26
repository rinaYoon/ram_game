// 해야할거 : 클릭, 보안

function tabMove() {
	var tabBox = $('.wrapper.h-teg .slot-buttons');

	tabBox.each(function(){
		var thisTabBox = $(this);
		var thisTabButton = thisTabBox.find('[class^="button-tab--"]');
		var thisTabCont = thisTabBox.parent().find('[class^="unit-content--"]');
		var btnLength = thisTabButton.length;
		var btnIndex = btnLength - 1;
		var count = 0;

		function tabRemove() {
			thisTabButton.removeClass('is-active');
			thisTabCont.removeClass('is-active');
			thisTabButton.attr("aria-selected", false);
			thisTabButton.attr("tabindex", -1);
		}

		thisTabButton.click(function(){
			var thisIndex = $(this).index();
			var contentEq = thisTabCont.eq(thisIndex);

			tabRemove();
			$(this).addClass('is-active');
			$(contentEq).addClass('is-active');
			$(this).attr("aria-selected", true);
			$(this).attr("tabindex", 0);
		});

		thisTabButton.keydown(function(e){
			var code = event.key || event.keyCode || event.which;

			if(code === "ArrowDown"){
				if(count < btnIndex){
					count++;
					console.log('count___' + count);

					tabRemove();
					thisTabButton.eq(count).focus();
					thisTabButton.eq(count).attr("aria-selected", true);
					thisTabButton.eq(count).attr("tabindex", 0);
					thisTabButton.eq(count).addClass('is-active');
					thisTabCont.eq(count).addClass('is-active');
				}
			}

			if(code === "ArrowUp"){
				if(count > 0){
					count--;
					console.log('count___' + count);

					tabRemove();
					thisTabButton.eq(count).focus();
					thisTabButton.eq(count).attr("aria-selected", true);
					thisTabButton.eq(count).attr("tabindex", 0);
					thisTabButton.eq(count).addClass('is-active');
					thisTabCont.eq(count).addClass('is-active');
				}
			}
		});
	});

}

function itemSlide() {
	$( '.wrapper.h-teg [class^="unit-content--"] .content-item' ).each( function ( i ) {
		new Swiper( $( this )[ 0 ] ,{
			loop : true,
			slidesPerView: 1,
			watchOverflow: true,
			observer: true,
			observeParents: true,
			allowTouchMove: false,
			navigation: {
				prevEl: $( '.wrapper.h-teg .button-slide--prev' )[ i ] ,
				nextEl: $( '.wrapper.h-teg .button-slide--next' )[ i ] ,
			},
		});
	})
}

function wearItem() {
	var characterHat = $('.wrapper.h-teg .slot-wear .wear-hat');
	var characterClothes = $('.wrapper.h-teg .slot-wear .wear-clothes');
	var characterShoes = $('.wrapper.h-teg .slot-wear .wear-shoes');

	characterHat.css("background-image", "url(../images/character-hat-short-01.png)");
	characterClothes.css("background-image", "url(../images/character-clothes-short-01.png)");
	characterShoes.css("background-image", "url(../images/character-shoes-short-01.png)");
}
wearItem();

function itemClickEvent() {
	$('.wrapper.h-teg .unit-content--hat .item-bundle--two .item-01').click(function(){});
}



console.log($('.unit-content--hat [class^="item-"]')); //<<버튼은 검색하면 차례대로 잘 나옴(인덱스)



/*
참고 - https://soonmac.github.io/vaccine_campaign/js/sub.js
*/



$(document).ready(function(){
	tabMove();
	itemSlide();
	itemClickEvent();
});