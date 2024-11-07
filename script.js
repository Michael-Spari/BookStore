let bookImg = [{
    "cover": './assets/img/thumb.png'
}];

// let allNotes = {
//     commentname: ['Ba', 'Aufgabe'],
//     notes: ['banana','rasen mähen'],
//     trashNotesTitles: [],
//     trashNotes: []
// }

// function mit for loop und ausgabe von bookTemplate(book) in id="bookFrame"
function renderBooks() {
    const bookFrame = document.getElementById("bookFrame");
    bookFrame.innerHTML = "";
    for (let index = 0; index < books.length; index++) {
        const book = books[index];
        bookFrame.innerHTML += bookTemplate(book);
    }
}

function bookTemplate(book) {
    let commentsData = '';
    for (let i = 0; i < book.comments.length; i++) {
        const comment = book.comments[i];
        commentsData += `<b>${comment.name}:</b><br>${comment.comment}<br><br>`;
    }
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
        <p><b>Kommentare:</b></p><br><div class="commentFrame">${commentsData}</div>
        <hr>
        <div class="commentInterface">
                <label for="name">Name:</label>
                <input id="name" type="text" placeholder="Name eingeben...">
                <label for="comment">Kommentar:</label>
                <textarea id="comment" type="text" rows="3" placeholder="Kommentar eingeben..."></textarea>
                <button onclick="addComment()">Kommentar senden</button>
                </div></div>`;
}

function addComment(){
    let nameInputRef = document.getElementById('name');
    let nameInput = nameInputRef.value;
    let commentarInputRef = document.getElementById('comment');
    let commentarInput = commentarInputRef.value;
    // if (!nameInput || !commentarInput) {
    //     alert("Bitte Name und Kommentar eingeben");
    //     return;
    // }
    const bookIndex = books[index];
    books[bookIndex].comments.push({ name: nameInput, comment: commentarInput });
    renderBooks();
    nameInputRef.value = "";
    commentarInputRef.value = "";

}