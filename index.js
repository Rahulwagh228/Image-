const accessKey = "ANRxdAVaJTBI1DUhB7XlOP_wG1K9Atlh3o0SVEYKsnY"

const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("search-input")
const searchResult = document.getElementsByClassName("search-results")
const showMore = document.getElementById("show-more-button")

let InputData = ""
let page = 1;

async function SearchImages(){
    InputData = inputE1.value;
    url = `https://api.unsplash.com/search/photos?page=${page}&query=${InputData}&client_id=${accessKey}`;

    // console.log(url);

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if(page===1){
        searchResult.innerHTML = ""
    }

    results.map((e)=>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        // image.src = results.urls.small
        image.alt = results.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = results.link.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResult.appendChild(imageWrapper);

    });

    page++

    if(page > 1){
        showMore.style.display = "block"
    }

}

formE1.addEventListener("submit", (event)=>{
    event.preventDefault()
    page = 1;
    SearchImages()
})

showMore.addEventListener("click", ()=>{
    SearchImages()
})
