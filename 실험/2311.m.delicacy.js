
// 2023-11-01 카드즉시할인 배너 클래스 제거
$('.area-deal .week-box').removeClass('getweek');

$("a[href^='#']").click(function(){
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 500);
});

var popupClose = {
	el : '.event-layer .js-layer-close',
	init : function(){
		this.addEvent();
	},
	addEvent : function(){
		$(document).delegate(this.el, 'click', function(){
			$(this).closest('.event-layer').hide();
			return false;
		});
		$('.event-layer__dimd').click(function(){
			$(this).closest('.event-layer').hide();
		});
	}
}

function areaOneSlide() {
	$( '.service__mobile .one-view .swiper-container' ).each( function ( i ) {
		new Swiper( $( this )[ 0 ] ,{
			loop : true,
			slidesPerView: 1,
			centeredSlides: true,
			watchOverflow: true,
			observer: true,
			observeParents: true,
			// pagination: {
			// 	el: $( '.service__mobile .one-view .swiper-pagination' )[ i ],
			// 	clickable: true,
			// },
			// navigation: {
			// 	nextEl: $( 'service__mobile [class^="area-"] .button-next' )[ i ] ,
			// 	prevEl: $( 'service__mobile [class^="area-"] .button-prev' )[ i ] ,
			// },
		});
	})
}

function areaAutoSlide() {
	$( '.service__mobile .auto-view .swiper-container' ).each( function ( i ) {
		new Swiper( $( this )[ 0 ] ,{
			//loop : true,
			slidesPerView: "auto",
			// centeredSlides: true,
			watchOverflow: true,
			observer: true,
			observeParents: true,
			// pagination: {
			// 	el: $( '.service__mobile .one-view .swiper-pagination' )[ i ],
			//   clickable: true,
			// },
			// navigation: {
			// 	nextEl: $( 'service__mobile [class^="area-"] .button-next' )[ i ] ,
			// 	prevEl: $( 'service__mobile [class^="area-"] .button-prev' )[ i ] ,
			// },
		});
	})
}

function tabMove() {
	var tabBox = $('.tab-box');

	tabBox.each(function(){
		var thisTabBox = $(this);
		var thisTabButton = thisTabBox.find('.button-tab');
		var thisTabCont = thisTabBox.find('.tab-content');
		var btnLength = thisTabButton.length
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

			console.log(thisIndex);
		});

		thisTabButton.keydown(function(e){
			var code = event.key || event.keyCode || event.which;

			if(code === "ArrowRight"){
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

			if(code === "ArrowLeft"){
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

function getNow() {
	var search = location.search.replace(/^\?/, '');
	var datetime;

	if (search) {
		search.split('&').forEach(function (str) {
			var keyValue = str.split('=');
			var key = keyValue[0];

			if (key !== 'date_setting') {
				return;
			}

			var value = keyValue[1];
			var result = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(value);

			if (result) {
				var YYYY = result[1];
				var MM = result[2];
				var DD = result[3];
				var hh = result[4];
				var mm = result[5];
				datetime = new Date([YYYY, MM, DD].join('-') + ' ' + [hh, mm].join(':'));
				// console.log(datetime);
			}
		});
	}
	return datetime || new Date();
}

function check() {
	var nowTime = getNow();
	// console.log('check', nowTime);

	eventHeader.forEach(function (slot, index){
		var id = 'mainHeaderId-' + index;

		if (nowTime >= slot.startTime && slot.endTime > nowTime) {
			if (!$('#' + id).length) {
				var imageName = $('.event-header .event-header__title');
				var descName = $('.event-header .event-header__title > p');

				imageName.attr("id", id);

				imageName.css("background-image","url(" + slot.imageUrl + ")");
				descName.text(slot.descText);
			}
		} else {
			$('#' + id).remove();
		}
	});

	areaFirst.forEach(function (slot, index){
		var id = 'areaFirstId-' + index;

		if (nowTime >= slot.startTime && slot.endTime > nowTime) {
			if (!$('#' + id).length) {
				var item01ImageName = $('.area-discount-first .slot-coupon01 .coupon-wrap');
				var item01Title = $('.area-discount-first .slot-coupon01 .unit-coupon dt');
				var item01Desc = $('.area-discount-first .slot-coupon01 .unit-coupon dd');
				var item01Notice = $('.area-discount-first .slot-coupon01 .notice-wrap');

				$(".coupon-bundle").attr("id", id);

				item01ImageName.css("background-image","url(" + slot.item01ImageUrl + ")");
				item01Title.html(slot.item01TitleText);
				item01Desc.html(slot.item01DescText);
				item01Notice.css("background-image","url(" + slot.item01NoticeImage + ")");
				$(slot.item01NoticeDesc).appendTo(item01Notice);

				// 2023-10-26 해당 기간에만 area와 nav메뉴 노출
				$('.area-discount-first').show();
				$('.event-nav .nav-memu01').after( '<li class="items-list__item nav-memu02"><a href="#area-first" class="items-list__link">웰컴백<br>쿠폰</a></li>' );
			}
		} else {
			$('#' + id).remove();
		}
	});

	areaThisWeek.forEach(function (slot, index){
		var id = 'areaThisWeekId-' + index;

		if (nowTime >= slot.startTime && slot.endTime > nowTime) {
			if (!$('#' + id).length) {
				var soldoutTitle = $('.area-discount-thisweek .division-thisweek');
				var discountWepper = $('.area-discount-thisweek .swiper-wrapper');

				$('.division-thisweek').attr("id", id);

				$(slot.cardTitle).appendTo(discountWepper);
				$(slot.cardNotice01).appendTo(discountWepper);
				$(slot.cardNotice02).appendTo(discountWepper);

				// soldout 수동 조절
				// soldoutTitle.addClass('division-thisweek--soldout');

				// 2023-10-26 해당 기간에만 area와 nav메뉴 노출
				$('.area-discount-thisweek').show();
				$('.event-nav .nav-memu04').before( '<li class="items-list__item nav-memu03"><a href="#area-thisweek" class="items-list__link">카드<br>즉시할인</a></li>' );
				$('.area-deal .week-box').addClass('getweek');
			}
		} else {
			$('#' + id).remove();
		}
	});

	areaNext.forEach(function (slot, index){
		var id = 'areaNextId-' + index;

		if (nowTime >= slot.startTime && slot.endTime > nowTime) {
			if (!$('#' + id).length) {
				var imageName = $('.area-next .division-desc');

				imageName.attr("id", id);

				imageName.css("background-image","url(" + slot.imageUrl + ")");
				$(slot.imageDesc).appendTo(imageName);
			}
		} else {
			$('#' + id).remove();
		}
	});

	areaproductBanner.forEach(function (slot, index){
		var id = 'areaProductBannerId-' + index;

		if (nowTime >= slot.startTime && slot.endTime > nowTime) {
			if (!$('#' + id).length) {
				var bennerSlideWrapper = $('.area-banner-product .division-desc');
				$(slot.slideHtml).appendTo(bennerSlideWrapper);
				bennerSlideWrapper.attr('id', id);
			}
		} else {
			$('#' + id).remove();
		}
	});

	areaCardNotice.forEach(function (slot, index){
		var id = 'areaCardNoticeId-' + index;

		if (nowTime >= slot.startTime && slot.endTime > nowTime) {
			if (!$('#' + id).length) {
				var cardNotice = $('.area-card-notice .division-desc');

				cardNotice.attr("id", id);
				$(slot.CardNoticeDesc).appendTo(cardNotice);

				$('.area-card-notice').show();
			}
		} else {
			$('#' + id).remove();
		}
	});
}
check();
setInterval(check, 1000 * 60);

function getWeek() {
	var nowTime = getNow();
	var getTuesday = nowTime.getDay();
	var navItem = $('.event-nav .items-list .items-list__item');
	// console.log('getTuesday___' + getTuesday);

	if(getTuesday === 2){
		$('.event-wrapper').addClass('event-wrapper--week');
	}

	/* 2023-10-26삭제 */
	// else{
	// 	$('.event-nav .items-list .items-list__item.nav-memu03').replaceWith('<!-- <li class="items-list__item"><a href="#area-thisweek" class="items-list__link">카드 즉시할인</a></li>-->');
	// }
}


$(document).ready(function(){
	popupClose.init();
	areaOneSlide();
	areaAutoSlide();
	tabMove();
	getWeek();
	var iacNavigation = new iacFixedNavigation("#event-nav", ".event-nav__item",{
		navButtonOver : true
	});
});