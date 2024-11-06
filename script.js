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

function commentsTemplate(comment) {
    return `<div>
    <p><b>${comment.name}</b>: ${comment.comment}</p></div>`;
}

function bookTemplate(book) {
    return `<div class="contentBookFrame">
    <h3>${book.name}</h3>
    <hr>
    <img src="${bookImg[0].cover}">
    <hr>
    <p>${book.price} ${book.liked}</p>
    <p><b>Autor: </b>${book.author}</p>
    <p><b>Erscheinungsjahr: </b>${book.publishedYear}</p>
    <p><b>Genre: </b>${book.genre}</p>
    <hr>
    <p><b>Kommentare:</b></p><br><div class="commentFrame"> ${book.comments.map(comment => commentsTemplate(comment)).join('')}</div></div>`;
    
    // return a string of HTML containing the book data
    // titel
    // bild vom buch
    // preis liked
    // author
    // published year
    // genre
    // comments
}