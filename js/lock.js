function lockID() {
    var tokenID = $("#tokenid").val();
    var content = "locking";
    document.getElementById('lockbtn').textContent = content;
    var event = oldDAYC.methods.transferFrom(dayc, "0x79105D9BB5850bdAB32aecD0Fe669DcDb33d79d6", tokenID).send({from: dayc}).then(function(result){
        console.log(result);
        var content = 'locked!';
        document.getElementById('lockbtn').textContent = content;
    });;
}

/*function oldApproveAll() {
    var content = "Approving";
    var event = oldDAYC.methods.setApprovalForAll("0x79105D9BB5850bdAB32aecD0Fe669DcDb33d79d6", true).send({ from: dayc }).then(function (receipt){
        console.log(receipt);
        var content = "Approved!";
    });;
};*/