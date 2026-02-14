const btns = document.querySelectorAll(".emoji-btn");


function updateCount(btnEl) {
  const countEl = btnEl.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];

  if (currCount === 10) return;

  currCount++;

  countEl.textContent = `${currCount}/10`;
}


btns.forEach((btn)=>{btn.addEventListener("click", ()=>{updateCount(btn)})});
