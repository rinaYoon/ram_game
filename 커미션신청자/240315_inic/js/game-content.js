
function nameCode() {
	const titleBundle = [
		"\u{1F33C} 맛냐의 옷입히기 게임 \u{1F33C}",
		"\u{1F4A7} 물꼬의 옷입히기 게임 \u{1F4A7}",
		"\u{1F47D} 테오의 옷입히기 게임 \u{1F47D}",
	];

	for (let index = 0; index < titleBundle.length; index++) {
		let titleText = $('title').text();

		if(titleText == titleBundle[index]){
			$('.wrapper').addClass('h-teg');
		}
	}
}

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
	let listaccItem = $('.wrapper.h-teg .unit-content--acc [class^="item-"]');
	let listClothesItem = $('.wrapper.h-teg .unit-content--clothes [class^="item-"]');
	let listShoesItem = $('.wrapper.h-teg .unit-content--shoes [class^="item-"]');
	let characteracc = $('.wrapper.h-teg .slot-wear .wear-acc');
	let characterClothes = $('.wrapper.h-teg .slot-wear .wear-clothes');
	let characterShoes = $('.wrapper.h-teg .slot-wear .wear-shoes');

	listaccItem.each(function(index){
		let thisButton = $(this);
		let itemNum = index + 1;

		thisButton.click(function(){
			if(!thisButton.hasClass('is-active')){
				listaccItem.removeClass('is-active');
				characteracc.css("background-image", "url(../images/user/character-acc-0" + itemNum + ".png)");
				thisButton.addClass('is-active');

			} else if(thisButton.hasClass('is-active')){
				thisButton.removeClass('is-active');
				characteracc.css("background-image", "url(../images/user/character-select-item.png)");
			}
		});
	});

	listClothesItem.each(function(index){
		let thisButton = $(this);
		let itemNum = index + 1;

		thisButton.click(function(){
			if(!thisButton.hasClass('is-active')){
				listClothesItem.removeClass('is-active');
				characterClothes.css("background-image", "url(../images/user/character-clothes-0" + itemNum + ".png)");
				thisButton.addClass('is-active');

			} else if(thisButton.hasClass('is-active')){
				thisButton.removeClass('is-active');
				characterClothes.css("background-image", "url(../images/user/character-select-item.png)");
			}
		});
	});

	listShoesItem.each(function(index){
		let thisButton = $(this);
		let itemNum = index + 1;
		thisButton.click(function(){
			if(!thisButton.hasClass('is-active')){
				listShoesItem.removeClass('is-active');
				characterShoes.css("background-image", "url(../images/user/character-shoes-0" + itemNum + ".png)");
				thisButton.addClass('is-active');

			} else if(thisButton.hasClass('is-active')){
				thisButton.removeClass('is-active');
				characterShoes.css("background-image", "url(../images/user/character-select-item.png)");
			}
		});
	});
}

function saveImage() {
	const saveImg = (uri, filename) => {
		let link = document.createElement('a');

		document.body.appendChild(link);

		link.href = uri;
		link.download = filename;
		link.click();

		document.body.removeChild(link);
	};

	$(".wrapper.h-teg .wrapper-inner .button-imgsave").click(function(){
		$(".wrapper.h-teg .division-character .slot-character").addClass('mark');
		$(".wrapper.h-teg").css("width","1920px");

		let saveTimer = setTimeout(function(){
			html2canvas(document.querySelector("#capture"), {scale:1, dpi: 300, width: 624, height: 789}).then(canvas => {
				saveImg(canvas.toDataURL('myLoveCharacter/png'), 'myLoveCharacter.png');
			});

			$(".wrapper.h-teg").css("width","100%");
			$(".wrapper.h-teg .division-character .slot-character").removeClass('mark');

			clearTimeout(saveTimer);
		}, 1);
	});
}



$(document).ready(function(){
	nameCode();
	tabMove();
	itemSlide();
	wearItem();
	saveImage();
});