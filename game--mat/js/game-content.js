
function nameCode() {
	const titleBundle = [
		"\u{1F33C} MAT MAT \u{1F33C}"
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
	let listHatItem = $('.wrapper.h-teg .unit-content--hat [class^="item-"]');
	let listClothesItem = $('.wrapper.h-teg .unit-content--clothes [class^="item-"]');
	let listShoesItem = $('.wrapper.h-teg .unit-content--shoes [class^="item-"]');
	let characterHat = $('.wrapper.h-teg .slot-wear .wear-hat');
	let characterClothes = $('.wrapper.h-teg .slot-wear .wear-clothes');
	let characterShoes = $('.wrapper.h-teg .slot-wear .wear-shoes');

	listHatItem.each(function(index){
		let thisButton = $(this);
		let itemNum = index + 1;
		thisButton.click(function(){
			characterHat.css("background-image", "url(../images/character-hat-0" + itemNum + ".png)");
		});
	});

	listClothesItem.each(function(index){
		let thisButton = $(this);
		let itemNum = index + 1;
		thisButton.click(function(){
			characterClothes.css("background-image", "url(../images/character-clothes-0" + itemNum + ".png)");
		});
	});

	listShoesItem.each(function(index){
		let thisButton = $(this);
		let itemNum = index + 1;
		thisButton.click(function(){
			characterShoes.css("background-image", "url(../images/character-shoes-0" + itemNum + ".png)");
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

	$(".imgbtn").click(function(){
		//여기에 워터마크를 클래스하나추가해서 잠깐 보엿다가 없어져야할듯
		html2canvas(document.querySelector("#capture")).then(canvas => {
			saveImg(canvas.toDataURL('myLoveCharacter/png'), 'myLoveCharacter.png');
		});
	});
}



$(document).ready(function(){
	nameCode();
	tabMove();
	itemSlide();
	wearItem();
	saveImage();
});