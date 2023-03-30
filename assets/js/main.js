const inputText = document.querySelector('form input[type="text"]');
const button = document.querySelector('form input[type="button"]');
const section = document.querySelector('section');


fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-02-28&sortBy=publishedAt&apiKey=3b4cb058feb94dcbb1da464aad22f3e2")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.articles.forEach((elt) => {
            console.log(elt)
            console.log(elt.title);
            console.log(elt.description);
            console.log(elt.urlToImage);
            section.innerHTML += `
            <div>
                <h2>${elt.title}</h2>
                <p>${elt.description}</p>
                <img src="${elt.urlToImage}" alt="random">
            </div>
            `
        })
    });