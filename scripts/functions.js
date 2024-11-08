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