const { Web3 } = require("web3");

(async () => {
  const web3 = new Web3("http://localhost:1234");
  console.log(await web3.eth.getBlock("latest"));
})();
