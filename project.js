

          
let b = document.querySelector('#id');
b.addEventListener('change', table);



// 通信を開始する処理
function table() {

	let element = document.getElementById('id');
    console.log(element.value);
    id = element.value;
	// URL を設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';
	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
    Name.textContent = data.name;
    Coordlon.textContent = data.coord.lon;
    Coordlat.textContent = data.coord.lat;
    Weatherdescription.textContent = data.weather[0].description;
    Maintemp_min.textContent = data.main.temp_min;
    Maintemp_max.textContent = data.main.temp_max;
    Mainhumidity.textContent = data.main.humidity;
    Windspeed.textContent = data.wind.speed;
    Winddeg.textContent = data.wind.deg;
	
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}


