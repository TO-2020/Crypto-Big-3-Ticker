function update(symbol) {
    var baseURL = 'https://api.binance.com';
    var query = '/api/v3/ticker/price?symbol=' + symbol;
    var url = baseURL + query;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url,true);
    ourRequest.onload = function(){
        var display = document.getElementById(symbol);
        var roughPrice = parseFloat(JSON.parse(ourRequest.response)['price']);
        display.innerHTML = roughPrice.toFixed(3);
    }
    ourRequest.send();
}

update('BTCUSDT');
update('ETHUSDT');
update('LINKUSDT');