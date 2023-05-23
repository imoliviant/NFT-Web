var daycUser = null;
var contract = null;

const daycNFTAddy = "0x79105D9BB5850bdAB32aecD0Fe669DcDb33d79d6";

document.getElementById('connectwallet').onclick = async () => {
    if(window.ethereum){
        await window.ethereum.request({ method: "eth_requestAccounts"});
        window.web3 = new Web3(window.ethereum);
        var accounts = await web3.eth.getAccounts();
        daycUser = accounts[0];
        document.getElementById('connectwallet').textContent = "Connected!";
        console.log('master wallet:' + daycUser);
        daycNFT = new web3.eth.Contract(nftsAbi, daycNFTAddy);

        var nftsReminted = daycNFT.methods.totalMint().call({from: daycUser}).then(function(result){
            console.log(result);
            document.getElementById('reminted').textContent = result;
        })
    }else{
        console.log('connection failed!');
    }
}