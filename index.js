const accessKey = "ANRxdAVaJTBI1DUhB7XlOP_wG1K9Atlh3o0SVEYKsnY";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResult = document.querySelector(".search-results"); // Use querySelector instead of getElementsByClassName
const showMore = document.getElementById("show-more-button");

let InputData = "";
let page = 1;

async function SearchImages() {
    InputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${InputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResult.innerHTML = ""; // Clear previous results
    }

    results.forEach((e) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.alt = e.alt_description;
        image.src = e.urls.small; // You need to specify the image source
        const imageLink = document.createElement("a");
        imageLink.href = e.links.html; // Use links.html for the image link
        imageLink.target = "_blank";
        imageLink.innerText = e.alt_description; // Use innerText instead of textContent

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResult.appendChild(imageWrapper); // Append to the search result container
    });

    page++;

    if (page > 1) {
        showMore.style.display = "block";
    }
}

formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    SearchImages();
});

showMore.addEventListener("click", () => {
    SearchImages();
});
