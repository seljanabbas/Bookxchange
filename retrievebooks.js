// Display books function - only on index.html
  // Send an HTTP request to get the data from the JSON file
  const request = new XMLHttpRequest();
  request.open('GET', 'books.json', true);
  request.onload = function() {
    // Process the response data
    const data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      // Success!
      data.books.forEach(book => {
        // Create a new list item for each book
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${book.coverImage}" alt="book-cover">
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Genre: ${book.genre}</p>
          <button type = "button" id = "${book.id}" class = "request-trade-button" onclick = "tradeRequest(id)">Request Trade</button>
        `;
        // Add the new list item to the book list
        document.getElementById('book-list').appendChild(li);
      });
    } else {
      // Something went wrong
      console.error('Error:', data);
    }
  };
  request.send();
