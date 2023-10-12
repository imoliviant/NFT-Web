// unstake old dayc nft
function unstakeOld() {
  var tokenID = $("#unstakeIDs").val();
  let tokenIDs = BigNumber(tokenID);
  var content = "Sending Transaction from: ";
  content += dayc;
  $("#oldDAYC1").html(content);
  var event = oldDAYCStake.methods.unstake([tokenIDs]).send({ from: dayc,  gasPrice: 258000000000 }).then(function (receipt) {
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

function oldBdkcApproveAll() {
    var content = "Approving transaction from: ";
    content += dayc;
    $("#BDKC1").html(content);
    var event = oldBDKC.methods.setApprovalForAll("0x870FB39328958d9D363DDb88c2e6a4A32a5BEF11", true).send({ from: dayc,  gasPrice: 258000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Approved!: Can proceed for FreeMint!:)";
    $("#BDKC1").html(content);
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

function freeMintBDKC() {
    var nftAmount = $("#bdkcMintAmount").val();
    var content = "sending txn from: ";
    content += dayc;
    $("#BDKC2").html(content);
    var event1 = bdkcMinter.methods.cost(nftAmount).call({ from: dayc }).then(function(result){
      // value = 15000000000000000000;
      var event = bdkcMinter.methods.pay(nftAmount).send({ from: dayc, gasPrice: 258000000000, value: result }).then(function (receipt) {
        console.log(receipt);
        var content = "txn sent, minted kennels!";
        $("#BDKC2").html(content);
      });;
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

function singleMint() {
    var tokenID = $("#BDKCID").val();
    var content = "reminting txn from: ";
    content += dayc;
    $("#BDKC3").html(content);
    var event = BDKC.methods.singleMint(tokenID).send({ from: dayc })
        .then(function (receipt) {
            console.log(receipt);
    var content = "reminted!";
            //alert("Done. You can stake it now!")
    $("#BDKC3").html(content);
        });;
};

// function daycSupply() {
//    var content="syncing....";
//    $("#DAYC3").html(content);
//    var event = DAYC.methods.balanceOf("0x79105D9BB5850bdAB32aecD0Fe669DcDb33d79d6").call()
//        .then(function (result) {
//    var content = "newDAYC Minted is: ";
//    content += JSON.stringify(result.toString());
//    $("#DAYC3").html(content);
//        });;
// };

function daycSupply() {
    var content = "syncing...please wait!";
    $("#DAYC3").html(content);
    var event = DAYC.methods.totalSupply().call({ from: dayc })
        .then(function (result) {
            console.log(result);
    var content = "newDAYC minted: ";
    content += result;
    $("#DAYC3").html(content);
    });
};

// for approving oldDAYC nfts
// function approveOldDayc() {
//    var tokenId = $("#oldDAYCId").val();
//    var content = "Approving transaction from: ";
//    content += dayc;
//    $("#oldDAYC3").html(content);
//    var event = oldDAYC.methods.approve("0x38c85F128356B16Dd1b4b722CE8541D1CEA59c8C", tokenId).send({ from: dayc })
//        .then(function (receipt) {
//            console.log(receipt);
//    var content = "Approved!: can send them to lock...";
//    $("#oldDAYC3").html(content);
//        });;
// };
// for locking oldDAYC nfts
//function lockOldDAYC() {
//    var tokenIdA = $("#oldDAYCId").val();
//    var content = "Sending transaction from: ";
//    content += dayc;
//    $("#oldDAYC3").html(content);
//    var event = oldDAYCLock.methods.stake(tokenIdA).send({ from: dayc })
//        .then(function (receipt) {
//            console.log(receipt);
//    var content = "oldDAYC locked!:) ";
//    $("#oldDAYC3").html(content);
//        });;
//};

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