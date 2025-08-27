// function get id
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

getElement("cart-container").addEventListener("click", function (e) {
  if (e.target.className.includes("heart-btn")) {
    const heartBtn = e.target;

    const countBtn = getElement("heartCount").innerText;
    const count = Number(countBtn) + 1;
    getElement("heartCount").innerText = count;

    console.log(countBtn);
  }
});

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

    alert(`emergency-service-netlify.app says
  Calling ${serviceName}${serviceNumber}..`);

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
