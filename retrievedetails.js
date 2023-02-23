    //Get book details
    // Get the book ID from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get("book");
        
    //Fetch the JSON data from your file
    fetch("books.json")
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    // Find the book that matches the ID
    // convert the object into an array of values
    const books = data.books;
    // Find the book that matches the ID
    const book = books.find(function(books) {
      return books.id === bookId;
    });

    if (!book){
        console.log("No book found.");
    }
    else{
        // Use the book data to update the page
        document.querySelector("#book-details").innerHTML = `
          <div id = left-detail>
          <img src="${book.coverImage}" alt="book-cover" id = "book-d-image">
          </div>
          <div id = "right-detail">
          <h3 id = "book-d-title">${book.title}</h3>
          <p id = "book-d-author">Author: ${book.author}</p>
          <p id = "book-d-genre">Genre: ${book.genre}</p>
          <button type = "button" id = "d-${book.id}" class = "request-trade-button-d">Request Trade</button>
          </div>
        `;
    }});
    