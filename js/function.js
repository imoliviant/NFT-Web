// unstake old dayc nft
function unstakeOld() {
  var tokenIDs = $("#unstakeIDs").val();
  var content = "Sending Transaction from: ";
  content += dayc;
  $("#oldDAYC1").html(content);
  var event = oldDAYCStake.methods.unstake(tokenIDs).send({ from: dayc }).then(function (receipt) {
    console.log(receipt);
    var content = "Unstaked! Can mint newDAYC now!:)";
    $("#oldDAYC1").html(content);
  });;
};

function oldApproveAll() {
    var content = "Approving transaction from: ";
    content += dayc;
    $("#DAYC1").html(content);
    var event = oldDAYC.methods.setApprovalForAll("", true).send({ from: dayc })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Approved!: Can proceed for FreeMint!:)";
    $("#DAYC1").html(content);
        });;
};
