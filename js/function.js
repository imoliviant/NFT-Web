// unstake old dayc nft
function unstakeOld() {
  var tokenIDs = $("#unstakeIDs").val();
  var content = "Sending Transaction from: ";
  content += dayc;
  $("#oldDAYC1").html(content);
  var event = oldDAYCStake.methods.unstake(tokenIDs).send({ from: dayc,  gasPrice: 258000000000 }).then(function (receipt) {
    console.log(receipt);
    var content = "Unstaked! Can mint newDAYC now!:)";
    $("#oldDAYC1").html(content);
  });;
};

function oldApproveAll() {
    var content = "Approving transaction from: ";
    content += dayc;
    $("#DAYC1").html(content);
    var event = oldDAYC.methods.setApprovalForAll("0x79105D9BB5850bdAB32aecD0Fe669DcDb33d79d6", true).send({ from: dayc,  gasPrice: 258000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Approved!: Can proceed for FreeMint!:)";
    $("#DAYC1").html(content);
        });;
};

function freeMint() {
    var content = "sending txn from: ";
    content += dayc;
    $("#DAYC2").html(content);
    var event = DAYC.methods.mintOwners().send({ from: dayc, gasPrice: 258000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "txn sent, re-minted!";
    $("#DAYC2").html(content);
        });;
};

function oldBalance() {
    var content="syncing....";
    $("#oldDAYC2").html(content);
    var event = oldDAYC.methods.balanceOf(dayc).call()
        .then(function (result) {
    var content = "Your NFT Balance is: ";
    content += JSON.stringify(result.toString());
    $("#oldDAYC2").html(content);
        });;
};

function daycSupply() {
    var content="syncing....";
    $("#DAYC3").html(content);
    var event = DAYC.methods.balanceOf("0x79105D9BB5850bdAB32aecD0Fe669DcDb33d79d6").call()
        .then(function (result) {
    var content = "newDAYC Minted is: ";
    content += JSON.stringify(result.toString());
    $("#DAYC3").html(content);
        });;
};
