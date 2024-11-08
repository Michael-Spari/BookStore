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
        <p><b>Kommentare:</b></p><div class="commentFrame">${commentsData}</div>
        <hr>
        <div class="commentInterface">
                <label for="name-${index}">Name:</label>
                <input id="name-${index}" type="text" placeholder="Name eingeben...">
                <label for="comment-${index}">Kommentar:</label>
                <textarea id="comment-${index}" type="text" rows="3" placeholder="Kommentar eingeben..." style="width: 100%;"></textarea>
                <button onclick="addComment('${index}')">Kommentar senden</button>
                </div></div>`;
}