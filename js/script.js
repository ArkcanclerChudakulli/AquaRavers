async function load(){
	$('#photo').hide();
	$('#photo').attr("src","img/gallery/1.jpg");
	$('#award_text').hide();
	let index = 1;
	$('#vorobey').attr("onclick", "#");
	let audio = new Audio('audio/together.mp3');
	audio.play();
	await sleep(1000);
	//$('#final').attr("src","img/enemies/" + index + ".jpg");
	$('#count').show();
	for(let i = 2; i >= 0; i--){
		await sleep(1000);
		$('#count').html(i);
	}
	$('#count').hide();
	$('#title').html('Команда');
	$('#title').show();
	await sleep(1000);
	$('#title').hide();
	$('#photo').show();
	$('#award_text').show();
	for(index = 1; index <= crue_texts.length; index++){
		$('#photo').attr("src","img/gallery/" + index + ".jpg");
		$('#award_text').html(crue_texts[index-1]);
		await sleep(2000);
	}
	$('#photo').hide();
	$('#award_text').html("Ура, товарищи!");
	$('#final').show();
	await sleep(2000);
	//audio.pause();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let enemies_texts = [
	'Васаби'
];

let awards_texts = [
	"1 Инста-конкурс. Устали..."
];

let crue_texts = [
	"Настя",
	"Стас",
	"Катя",
	"Вероника",
	"Полина",
	"Алёна",
	"Паша",
	"Даша",
	"Андрей",
	"Наташа",
	"Маша",
	"Андрей",
	"Лиза",
	"Никита",
	"Алёна"
];