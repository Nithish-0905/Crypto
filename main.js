var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var doge=document.getElementById("dogecoin");

async function fetchData(){
    let setting={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
    };
    try{
        const respone= await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",setting);

        if(!respone.ok){
            throw new Error(`HTTP error! Status: ${respone.status}`);
        }

        const data=await respone.json();
         btc.innerHTML=data.bitcoin.inr;
         eth.innerHTML=data.ethereum.inr;
         doge.innerHTML=data.dogecoin.inr;
    }
    catch(error){
        console.error("Error:",error);
    }
}
fetchData();