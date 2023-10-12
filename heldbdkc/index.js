function connectWallet() {
    var content = "";
    var event = BDKC.methods.balanceOf(dayc).call({ from: dayc })
        .then(function (result) {
            balance = result;
            for (var i = 0; i < balance; i++) {
                var event = BDKC.methods.tokenOfOwnerByIndex(dayc, i).call({ from: dayc })
                    .then(function (result) {
                        var event = BDKC.methods.tokenURI(Number(result)).call()
                            .then(function (result1) {
                                content += "<br><br>Id: " + result;
                                $("#wallet").html(content);
                            });
                    });
            };
        });
};