function init(){
    getFromLocalStorage();
    renderBooks();
}

let bookImg = [{
    "cover": './assets/img/thumb.png'
}];

function renderBooks() {
    const bookFrame = document.getElementById("bookFrame");
    bookFrame.innerHTML = "";
    for (let index = 0; index < books.length; index++) {
        const book = books[index];
        bookFrame.innerHTML += bookTemplate(book, index);
    }
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
    saveToLocalStorage();
    renderBooks();
    nameInputRef.value = "";
    commentarInputRef.value = "";
}

function likeBook(index) {
    if (books[index].liked) {
        books[index].likes--;
    } else {
        books[index].likes++;
    }
    books[index].liked = !books[index].liked;
    saveToLocalStorage();
    renderBooks();
}