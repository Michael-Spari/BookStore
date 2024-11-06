let bookImg = [{
    "cover": './assets/img/thumb.png'
}];

// function mit for loop und ausgabe von bookTemplate(book) in id="bookFrame"
function renderBooks() {
    const bookFrame = document.getElementById("bookFrame");
    for (let index = 0; index < books.length; index++) {
        const book = books[index];
        bookFrame.innerHTML += bookTemplate(book);
    }
}

function bookTemplate(book) {
    return `<div class="contentBookFrame">
    <h3>${book.name}</h3>
    <img src="${bookImg[0].cover}">
    <p>${book.price} ${book.liked}</p>
    <p>${book.author}</p>
    <p>${book.published}</p>
    <p>${book.genre}</p>
    <p>${book.comments}</p></div>`;
    // return a string of HTML containing the book data
    // titel
    // bild vom buch
    // preis liked
    // author
    // published year
    // genre
    // comments
}