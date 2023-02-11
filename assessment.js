'use strict';
const userNameInput =document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivied = document.getElementById('result-area');
const tweetDivied = document.getElementById('tweet-area');

/**
 * 指定した要素の子要素を全て削除する
 * @param{HTMLElement} element HTMLの要素 * 
 */
function removeAllChildren(element){  
	while(element.firstChild){//子要素があるかぎり削除
	element.removeChild(element.firstChild);
	}
}

assessmentButton.onclick =()=>{
	const userName = userNameInput.value;
	if(userName.length===0){
		//名前が空の時は処理を終了する
		return;
	}
	//診断結果表示エリアの作成
	removeAllChildren(tweetDivied);
	const header =document.createElement('h3');
	header.innerText ='診断結果';
	resultDivied.appendChild(header);

	const paragraph =document.createElement('p');
	const result =assessment(userName);
	paragraph.innerText = result;
	resultDivied.appendChild(paragraph);

	//TODO ツイートエリアの作成

};



const answers = [
	'{userName}	のいいところは声です{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
	'{userName}	のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
	'{userName}	のいいところは情熱です。{userName}の情熱に周囲の人は感化されます。',
	'{userName}	のいいところは厳しさです。{userName}の厳しさが物事をいつも成功に導きます。',
	'{userName}	のいいところは知識です。{userName}を多くの人が頼りにしています。',
	'{userName}	のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
	'{userName}	のいいところは用心深さです。{userName}の洞察に多くの人が助けられます。',
	'{userName}	のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が心惹かれます。',
	'{userName}	のいいところは決断力です。{userName}がする決断にいつも助けられます。',
	'{userName}	]のいいところは思いやりです。{userName}に気にかけてもらった多くの人が感謝しています。',
	'{userName}	のいいところは感受性です。{userName}が感じたことに皆が共感し、分かり合うことが出来ます。',
	'{userName}	のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
	'{userName}	のいいところは好奇心です。新しいことに向かっていく{userName}の気構えが多くの人に魅力的に映ります。',
	'{userName}	のいいところは気くばりです。{userName}の配慮が多くの人を救っています。',
	'{userName}	のいいところはそのすべてです。ありのままの{userName}自身がいいところなのです。',
	'{userName}	のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}は皆から評価されています。'
];
/**
 *  *名前の文字列を渡すと診断結果を返す関数
 * @param{string} userName　ユーザーの名前
 * @return{string} 診断結果
 */
function assessment(userName){
	//全文字のコード番号を取得してそれを足し合わせる
	let sumOfCharCode =0;
	for(let i =0;i<userName.length; i++){
		sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
	}
//文字のコード番号の合計を回答の数で割って添え字の数値を求める
const index =sumOfCharCode % answers.length;
let result = answers[index];

result = result.replace(/\{userName\}/g, userName);
return result;
}

//テストコード
console.log(assessment('健四郎'));


console.assert(
	assessment('太郎')===	assessment('太郎'),
	'入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
);


