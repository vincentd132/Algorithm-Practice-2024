'''javascript
function getHistory() {
DOMSelectors.content.innerHTML = "";
DOMSelectors.history.innerHTML = "";
let win = 0;
let lose = 0;
let draw = 0;

for (let i = 0; i < history.length; i++) {
if (history[i] == "win") {
win++;
} else if (history[i] == "lose") {
lose++;
} else {
draw++;
}

    DOMSelectors.history.insertAdjacentHTML(
      "afterbegin",
      `<div class="historyCard" id="${history[i]}">
        <h4>Game ${i + 1}: ${history[i].toUpperCase()}</h4>
        </div>`
    );

}
'''

this function has clearly defined inputs, (let win = 0; let lose = 0; let draw = 0;), it has finite steps becuase there are only 3 outcomes, and 3 endings. Also uses both for and else. There is a clear selections with the (if) command
