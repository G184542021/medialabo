// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei(1);
hantei(2);
hantei(3);
hantei(4);

// ボタンを押した後の処理をする関数 hantei() の定義
let n;
function hantei(n) {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    console.log(n + '回目の予想:' + yoso);

    if(kotae === yoso){
        if(n === 1) {
            result.textContent = '正解です. おめでとう!';
        }else {
            result.textContent = '答えは' + yoso + 'でした. すでにゲームは終わっています';
        }
    }
    else if (kotae >= yoso) {
        if (n === 4) {
            result.textConent = 'まちがい. 残念でした答えは' + kotae + 'です.';
        } else {
            result.textContent = 'まちがい. 答えはもっと大きいですよ';
        }
    }
    else {
        if (n === 4) {
            result.textContent = 'まちがい. 残念でした答えは' + kotae + 'です.';
        } else {
            result.textContent = 'まちがい. 答えはもっと小さいですよ';
        }
    }
    

}