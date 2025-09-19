


const allHeart = document.querySelectorAll('.fa-heart');
const hCount = document.getElementById('h-cnt');

const copyBtn = document.querySelectorAll('.copy');
const callBtn = document.querySelectorAll('.call');

const copyCount = document.getElementById('copy-cnt');

const clearBtn = document.getElementById('clear-btn');

allHeart.forEach(heart => {
  heart.addEventListener('click', () => {
    let cnt=parseInt(hCount.innerText);
    cnt++;
    hCount.innerText=cnt;
  });
});


callBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const parentDiv=btn.closest('.card');

    const h1Text = parentDiv.querySelector("h1").textContent;
    const h2Text = parentDiv.querySelector("h2").textContent;
    const num = parentDiv.querySelector(".num").textContent;

    const coinAmount = document.getElementById('coins');
    let coins = parseInt(coinAmount.innerText);
    if(coins<20) {
        alert("Not enough coins. You need at least 20 coins to make a call.");
    }
    else {
        coins -= 20;
        coinAmount.innerText = coins;
        alert("Calling " + h2Text + " at " + num + "...");

        const history = document.getElementById('call-history');
        const newEntry = document.createElement('div');
        newEntry.classList.add('history-card');

        const time=new Date().toLocaleTimeString();
        newEntry.innerHTML=`
            <div>
                <h1>${h1Text}</h1>
                <p>${num}</p>
            </div>
            <p>${time}</p>

        `
        history.appendChild(newEntry);

    }
  });
});

copyBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const parentDiv=btn.closest('.card');

    const num = parentDiv.querySelector(".num").textContent;

    navigator.clipboard.writeText(num)
    .then(() => {
        alert("Copied : " + num);
        let cnt=parseInt(copyCount.innerText);
        cnt++;
        copyCount.innerText=cnt;

    });

  });
});

clearBtn.addEventListener('click', () => {
    const history = document.getElementById('call-history');
    history.innerHTML='';
});



