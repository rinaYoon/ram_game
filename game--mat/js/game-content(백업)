// 해야할거 : 탭, 드래그(+클릭), 보안


// 탭
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

// 슬라이드
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

// 클릭이벤(클릭버전 + 이거할때 span태그에 포커스가게 하고 엔터나 스페이스로 옷이 입혀져야함)



$(document).ready(function(){
	tabMove();
	itemSlide();
});