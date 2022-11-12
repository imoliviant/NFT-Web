[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_daycAddress","internalType":"address"},{"type":"address","name":"_daycTokenAddress","internalType":"address"}]},{"type":"error","name":"NoStakedTokens","inputs":[]},{"type":"error","name":"NoTokensSentToStake","inputs":[]},{"type":"error","name":"NotTokenOwner","inputs":[]},{"type":"error","name":"StakingNotEnabled","inputs":[]},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IdaycToken"}],"name":"daycToken","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"flipStakingStatus","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"address","name":"_addr","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"ownerTokens","internalType":"uint256[]"}],"name":"getTokensByOwner","inputs":[{"type":"address","name":"addr","internalType":"address"}]},{"type":"function","stateMutability":"pure","outputs":[{"type":"bytes4","name":"","internalType":"bytes4"}],"name":"onERC721Received","inputs":[{"type":"address","name":"","internalType":"address"},{"type":"address","name":"","internalType":"address"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"bytes","name":"","internalType":"bytes"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"stake","inputs":[{"type":"uint256[]","name":"_tokenIds","internalType":"uint256[]"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"stakingEnabled","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"tokenToStaker","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"unstake","inputs":[{"type":"uint256[]","name":"_tokenIds","internalType":"uint256[]"}]}]
