/*
document.querySelector('link').href="ABDC.css";
document.querySelector('script').src="ABDC.js"; //되긴 되나 봄 근데 한개만

var a = $('link');
var a1Text = "https://rinayoon.github.io/ram_game/test.css";
var a2Text = "https://test.github.io/ram_test/teat.css";

a2Text = a1Text;

a.attr("href", a2Text);

// 로컬스토리지 실험 (안씀)
console.log(localStorage.getItem("이름"));
*/



// 난독화: https://obfuscator.io/
// function _0x20af(){var _0x3d0ae7=['ABDC.js','src','3251120OCiSUn','ABDC.css','2926tppDdP','218666dviswq','8871048IGNccl','https://test.github.io/ram_test/teat.css','1119sEvhZc','7114208yrwSvS','querySelector','842kqIdtP','attr','9UivTlL','29560XQJjnd','150fFtinr','4sYGIyQ','https://rinayoon.github.io/ram_game/test.css','157347tsemvP','link','href'];_0x20af=function(){return _0x3d0ae7;};return _0x20af();}function _0x50d8(_0x5ddfef,_0x347850){var _0x20af77=_0x20af();return _0x50d8=function(_0x50d8bc,_0x16e9d4){_0x50d8bc=_0x50d8bc-0x119;var _0x32a1f3=_0x20af77[_0x50d8bc];return _0x32a1f3;},_0x50d8(_0x5ddfef,_0x347850);}var _0x4d56da=_0x50d8;(function(_0x505f65,_0x2e27ef){var _0x33f17e=_0x50d8,_0x29a258=_0x505f65();while(!![]){try{var _0x595e32=-parseInt(_0x33f17e(0x124))/0x1+-parseInt(_0x33f17e(0x11d))/0x2*(parseInt(_0x33f17e(0x11a))/0x3)+-parseInt(_0x33f17e(0x122))/0x4*(-parseInt(_0x33f17e(0x129))/0x5)+parseInt(_0x33f17e(0x121))/0x6*(parseInt(_0x33f17e(0x12c))/0x7)+-parseInt(_0x33f17e(0x11b))/0x8*(-parseInt(_0x33f17e(0x11f))/0x9)+parseInt(_0x33f17e(0x120))/0xa*(-parseInt(_0x33f17e(0x12b))/0xb)+-parseInt(_0x33f17e(0x12d))/0xc;if(_0x595e32===_0x2e27ef)break;else _0x29a258['push'](_0x29a258['shift']());}catch(_0x2bb774){_0x29a258['push'](_0x29a258['shift']());}}}(_0x20af,0x75508),document[_0x4d56da(0x11c)](_0x4d56da(0x125))[_0x4d56da(0x126)]=_0x4d56da(0x12a),document[_0x4d56da(0x11c)]('script')[_0x4d56da(0x128)]=_0x4d56da(0x127));var a=$('link'),a1Text=_0x4d56da(0x123),a2Text=_0x4d56da(0x119);a2Text=a1Text,a[_0x4d56da(0x11e)]('href',a2Text);



// 타이틀 실험
// var a = $(document).attr('title', '바꿧나'); //바뀜
var title = $('title'); //선택자 이걸로 하면 됨
console.log('현재 타이틀________' + title.text());

var titleBundle = [
	'👼테스트테스트여👼',
	'🍎사과🍎',
	'🍟감튀🍟'
];

for (let i = 0; i < titleBundle.length; i++) {
	if(title.text() === titleBundle[i]){
		console.log('있음');//된다. 나중에 여기에 실행하기
	}
}
/*
~~ 실행 생각한거 ~~
1. 주력 함수 만들어서 안에다가 실행하기
2. 클래스 하나로만 모든 함수 실행되게 만들기
(ex. 옥션별미 wrapper에다가 week 클래스 준 것처럼 week기준으로 죄다 선택되게 만들기) <<이게 나을지도
*/