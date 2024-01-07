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





/*
참고 - https://soonmac.github.io/vaccine_campaign/js/sub.js

// 모자
.unit-content--hat .item-01 (모자 1)을 누르면
.unit-content--hat .item-02 (모자 2)을 누르면
.unit-content--hat .item-03 (모자 3)을 누르면
.unit-content--hat .item-04 (모자 4)을 누르면
.division-character .slot-wear .wear-hat (캐릭터가 착용한 모자) << 의 css 백그라운드 이미지가 바뀐다.

// 옷
.unit-content--clothes .item-01 (옷 1)을 누르면
.unit-content--clothes .item-02 (옷 2)을 누르면
.unit-content--clothes .item-03 (옷 3)을 누르면
.division-character .slot-wear .wear-clothes (캐릭터가 착용한 옷) << 의 css 백그라운드 이미지가 바뀐다.

// 모자
.unit-content--shoes .item-01 (신발 1)을 누르면
.unit-content--shoes .item-02 (신발 2)을 누르면
.unit-content--shoes .item-03 (신발 3)을 누르면
.unit-content--shoes .item-04 (신발 4)을 누르면
.division-character .slot-wear .wear-shoes (캐릭터가 착용한 신발) << 의 css 백그라운드 이미지가 바뀐다.
*/
function wearItem() {
	var characterHat = $('.wrapper.h-teg .slot-wear .wear-hat');
	var characterClothes = $('.wrapper.h-teg .slot-wear .wear-clothes');
	var characterShoes = $('.wrapper.h-teg .slot-wear .wear-shoes');

	characterHat.css("background-image", "url(../images/character-hat-01.png)");
	characterClothes.css("background-image", "url(../images/character-clothes-01.png)");
	characterShoes.css("background-image", "url(../images/character-shoes-01.png)");
}
wearItem();

console.log($('.unit-content--clothes [class^="item-"]')); //<<버튼은 검색하면 차례대로 잘 나옴(인덱스)














// function itemClickEvent() {
// 	$('.wrapper.h-teg .unit-content--hat .item-01').click(function(){});
// }





$(document).ready(function(){
	tabMove();
	itemSlide();
	itemClickEvent();
});