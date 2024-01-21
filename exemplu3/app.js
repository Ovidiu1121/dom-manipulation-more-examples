const btnadditem = document.querySelector(".btnAddItem");
const textbox = document.querySelector("[type=text]");
const listaElemente = document.querySelector("ul");
const itemCount = document.getElementById("itemCount");
const btnclear = document.querySelector(".clear");

function createCard(text) {

    const buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Remove";
    buttonRemove.className = "remove";

    const buttonMarkDone = document.createElement("button");
    buttonMarkDone.textContent = "Mark Done";
    buttonMarkDone.className = "mark-done";

    let item = document.createElement('li');

    item.textContent = text;
    item.appendChild(buttonRemove);
    item.appendChild(buttonMarkDone);

    return item;

};

function updateItemCount() {
    const totalItems = listaElemente.children.length;
    itemCount.textContent = totalItems;
}

btnadditem.addEventListener("click", () => {

    console.log(textbox.textContent);

    if (textbox.textContent !== " ") {
        let element = createCard(textbox.value);
        listaElemente.appendChild(element);
        updateItemCount();
    }

});

listaElemente.addEventListener("click", (eve) => {
    let pressed = eve.target;
    let card = pressed.parentNode;
    let parent = card.parentNode;

    if (pressed.classList.contains("mark-done")) {

        card.style.backgroundColor = "Lime";

    } else if (pressed.classList.contains("remove")) {

        listaElemente.removeChild(card);
        updateItemCount();
    }
});


btnclear.addEventListener("click", () => {

    listaElemente.innerHTML = "";
    updateItemCount();

});

