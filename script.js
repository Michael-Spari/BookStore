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
    console.log(books[index].likes);
}

function saveToLocalStorage() {
    const bookData = [];
    for (let i = 0; i < books.length; i++) {
        bookData.push({
            likes: books[i].likes,
            liked: books[i].liked,
            comments: books[i].comments
        });
    }
    localStorage.setItem("bookData", JSON.stringify(bookData));
}

function getFromLocalStorage() {
    const bookData = JSON.parse(localStorage.getItem("bookData")) || [];
    for (let i = 0; i < bookData.length; i++) {
        if (books[i]) {
            books[i].likes = bookData[i].likes || 0;
            books[i].liked = bookData[i].liked || false;
            books[i].comments = bookData[i].comments || [];
        }
    }
}