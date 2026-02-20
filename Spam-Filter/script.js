const messageInput = document.querySelector("#message-input");
const result = document.querySelector("#result-message");
const checkMessageButton = document.querySelector("#check-message-btn");

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/i;
const stockRegex = /[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7]/i;
const dearRegex = /dear friend/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

checkMessageButton.addEventListener("click", ()=>{
    if (messageInput.value === ''){
        alert("Please enter a message.");
        return;
    }
    result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";
    messageInput.value = '';
});

function isSpam(msg){
    const matched = denyList.some(exp => exp.test(msg));
    return matched;
}