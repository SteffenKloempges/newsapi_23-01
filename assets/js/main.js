const inputText = document.querySelector('form input[type="text"]');
const button = document.querySelector('form input[type="button"]');
const section = document.querySelector('section');

const search = () => {
    console.log(inputText.value);
    section.innerHTML = "Hallo";
    fetch(`https://newsapi.org/v2/everything?q=${inputText.value}&from=2023-02-28&sortBy=publishedAt&apiKey=89b8780c0d164bd0801a3ceb28319e7c`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            data.articles.forEach((elt) => {
                // console.log(elt)
                // console.log(elt.title);
                // console.log(elt.description);
                // console.log(elt.urlToImage);
                section.innerHTML += `
            <div>
                <h2>${elt.title}</h2>
                <p>${elt.description}</p>
                <img src="${elt.urlToImage}" alt="random">
            </div>
            `
            })
        });
}

