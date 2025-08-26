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
