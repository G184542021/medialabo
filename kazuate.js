// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// 2. イベントハンドラの定義


// ボタンを押した後の処理をする関数 hantei() の定義

function hantei() {
    let i = document.querySelector('input[number="seisu"]');
    let seisu = i.value;       // ユーザが記入した文字列
    answer.textContent = kaisu + '回目の予想:' + seisu;
    let n = kaisu;
    let m = Number(seisu);
    // 課題3-1：ここの判定処理を作成する
    if(kotae === m){
        if(n === 1 || n === 2 || n === 3) {
            result.textContent = '正解です. おめでとう!';
        }else {
            result.textContent = '答えは' + m + 'でした. すでにゲームは終わっています';
        }
    }
    else if (kotae > m) {
        if (n == 4) {
            result.textContent = 'まちがい. 残念でした答えは' + kotae + 'です.';
        } else if (n < 4) {
            result.textContent = 'まちがい. 答えはもっと大きいですよ'; 
        } else {
            result.textContent = '答えは' + m + 'でした. すでにゲームは終わっています';
        }
    }
    
    else {
        if (n >= 4) {
            result.textContent = 'まちがい. 残念でした答えは' + kotae + 'です.';
        } else if (n < 4) {
            result.textContent = 'まちがい. 答えはもっと小さいですよ'; 
        } else {
            result.textContent = '答えは' + m + 'でした. すでにゲームは終わっています';
        }
        
    }
    kaisu = kaisu + 1;
    

}