
const reviewList = document.querySelector("ul");
const slide = document.getElementById("slide");
const btnAddReview = document.getElementById("addReview");
const reviewText = document.querySelector("[type=text]");
const images = slide.getElementsByTagName("img");

let ct = 0;

function displayImage(x) {

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[x].style.display = "block";
}

function nextImage() {
    ct = (ct + 1) % slide.childElementCount;
    displayImage(ct);
}

function prevImage() {
    ct = (ct - 1 + slide.childElementCount) % slide.childElementCount;
    displayImage(ct);
}

setInterval(nextImage, 2000);

btnAddReview.addEventListener("click", function () {

    if (reviewText !== "") {
        const li = document.createElement("li");
        li.textContent = reviewText.value;
        reviewList.appendChild(li);
    }
});