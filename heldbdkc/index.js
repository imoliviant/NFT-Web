function connectWallet() {
    var content = "";
    for (var i = 0; i < 5001; i++) {
        var event = BDKC.methods.tokenOfOwnerByIndex(dayc, i).call({ from: dayc }).then(function (result) {
            var event = BDKC.methods.tokenURI(Number(result)).call().then(function (result1) {
                content += "<br><br>Id: " + result;
                $("#wallet").html(content);
            });
        });
    };
};