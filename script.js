// function get id
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// heart function
getElement("cart-container").addEventListener("click", function (e) {
  if (e.target.className.includes("heart-btn")) {
    const heartBtn = e.target;

    const countBtn = getElement("heartCount").innerText;
    const count = Number(countBtn) + 1;
    getElement("heartCount").innerText = count;
  }
});

// copy function
getElement("cart-container").addEventListener("click", function (e) {
  if (e.target.className.includes("copy-button")) {
    const copyBtn = e.target;

    const numberElement =
      copyBtn.parentNode.parentNode.children[2].children[0].innerText;

    // copy to clipboard
    navigator.clipboard
      .writeText(numberElement)
      .then(() => {
        alert(`Copied to clipboard: ${numberElement}`);
      })
      .catch((err) => {
        console.error("Failed to copy!", err);
      });
    const countBtn = Number(getElement("copyButton").innerText);
    getElement("copyButton").innerText = countBtn + 1;
  }
});

// calling function
getElement("cart-container").addEventListener("click", function (e) {
  if (e.target.className.includes("call-button")) {
    const callBtn = e.target;

    const serviceName =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;

    const description =
      callBtn.parentNode.parentNode.children[1].children[1].innerText;

    const serviceNumber =
      callBtn.parentNode.parentNode.children[2].children[0].innerText;

    // const callIcon = callBtn.parentNode.children[1].children[0].src;
    // console.log(callIcon);

    const totalCoin = getElement("coinCount").innerText;

    const currentCoin = Number(totalCoin) - 20;
    if (currentCoin >= 0) {
      alert(`Calling ${serviceName} ${serviceNumber}..`);
    } else {
      alert(
        "You don’t have enough coins; it will cost 20 coins to make a call."
      );
      return;
    }

    getElement("coinCount").innerText = currentCoin;

    // createElement and append
    const historyContainer = getElement("history-container");

    const div = document.createElement("div");
    const date = new Date().toLocaleTimeString();

    div.innerHTML = `<div
                class="flex justify-between items-center bg-[#FAFAFA] p-2 rounded-lg mt-3"
              >
                <div class="text-lg">
                  <h1 class="font-semibold">${serviceName}</h1>
                  <p class="text-[#5C5C5C]">${serviceNumber}</p>
                </div>
                <span class="text-[#5c5c5c]">${date}</span>
              </div>`;
    historyContainer.append(div);
  }
});

// clear button

document.getElementById("clear-button").addEventListener("click", function () {
  const historyContainer = getElement("history-container");
  historyContainer.innerHTML = "";
});
