let bookImg = [{
    "cover": './assets/img/thumb.png'
}];

// function mit for loop und ausgabe von bookTemplate(book) in id="contentbookFrame"
function renderBooks() {
    const bookFrame = document.getElementById("bookFrame");
    bookFrame.innerHTML = "";
    for (let index = 0; index < books.length; index++) {
        const book = books[index];
        bookFrame.innerHTML += bookTemplate(book, index);
    }
}

function bookTemplate(book, index) {
    let commentsData = '';
    const heartIcon = book.liked ? '❤️' : '🤍';
    for (let i = 0; i < book.comments.length; i++) {
        const comment = book.comments[i];
        commentsData += `<b>${comment.name}:</b><br>${comment.comment}<br><br>`;
    }
    return `<div class="contentBookFrame">
        <h3>${book.name}</h3>
        <hr>
        <img src="${bookImg[0].cover}">
        <hr>
        <div class="priceLikeFrame">
        <div class="bookPrice"> ${book.price},- €</div>
        <div class="likeBook" onclick="likeBook(${index})">${book.likes} Likes ${heartIcon}</div>
        </div>
        <p><b>Autor: </b>${book.author}</p>
        <p><b>Erscheinungsjahr: </b>${book.publishedYear}</p>
        <p><b>Genre: </b>${book.genre}</p>
        <hr>
        <p><b>Kommentare:</b></p><br><div class="commentFrame">${commentsData}</div>
        <hr>
        <div class="commentInterface">
                <label for="name-${index}">Name:</label>
                <input id="name-${index}" type="text" placeholder="Name eingeben...">
                <label for="comment-${index}">Kommentar:</label>
                <textarea id="comment-${index}" type="text" rows="3" placeholder="Kommentar eingeben..."></textarea>
                <button onclick="addComment('${index}')">Kommentar senden</button>
                </div></div>`;
}

function addComment(bookIndex){
    let nameInputRef = document.getElementById(`name-${bookIndex}`);
    let nameInput = nameInputRef.value;
    let commentarInputRef = document.getElementById(`comment-${bookIndex}`);
    let commentarInput = commentarInputRef.value;
    if (!nameInput || !commentarInput) {
        alert("Bitte Name und Kommentar eingeben");
        return;
    }
    books[bookIndex].comments.push({ name: nameInput, comment: commentarInput });
    renderBooks();
    nameInputRef.value = "";
    commentarInputRef.value = "";
} 

//function für like button mit counter der likes und farbwechsel

function likeBook(index) {
    if (books[index].liked) {
        books[index].likes--;
    } else {
        books[index].likes++;
    }
    books[index].liked = !books[index].liked;
    renderBooks();
    console.log(books[index].likes);
}
