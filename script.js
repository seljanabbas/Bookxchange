
    //Request Trade button
    function tradeRequest(id){
        window.location.href = `bookpage.html?book=${id}`;
    }

    //Dropdown Menu
    // Add event listener to the parent li element of the dropdown
    const dropdown = document.querySelector('.dropdown-menu');
    // Add event listener to the "Menu" link
    const navlink = document.querySelector('.navlist-e a');
    navlink.addEventListener('click', function(event) {
        console.log(dropdown);
        event.preventDefault(); // Prevent link from redirecting
        dropdown.classList.toggle('show'); // Show/hide the dropdown menu
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navlist-e')) {
            document.querySelector('.dropdown-menu').classList.remove('show');
        }
    });

    //Search Initialization
    const searchButton = document.querySelector('#search-btn');
    const nameInput = document.querySelector('#book-name');
    const authorInput = document.querySelector('#book-auth');

    searchButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get the search query from the input fields
    const nameQuery = nameInput.value.trim();
    const authorQuery = authorInput.value.trim();

    // Search for books based on the query and condition
    searchBooks(nameQuery, authorQuery);
});


    // Search Function
    function searchBooks(nameQuery,authorQuery) {
        fetch("books.json")
        .then(function(response) {
        return response.json();
        })
        .then(function(data) {
        const book = data.books;
        // Filter the books based on the search query
        const filteredBooks = book.filter(book =>  (nameQuery != '' && book.title.toLowerCase().includes(nameQuery.toLowerCase())) || (authorQuery != '' && book.author.toLowerCase().includes(authorQuery.toLowerCase())));
        if (filteredBooks.length === 0){
            console.log("No books found.");
            document.querySelector("#error-message").innerHTML = 'No books found.';
            document.querySelector("#book-list").innerHTML = "";
        }
        else{
        document.querySelector("#error-message").innerHTML = "";
        // Clear the current list of books
        document.querySelector("#book-list").innerHTML = "";
        // Add the filtered books to the list
        filteredBooks.forEach(book => {
            let bookList = document.querySelector("#book-list");
            let bookHTML = `
                <li>
                    <img src="${book.coverImage}" alt="book-cover">
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Genre: ${book.genre}</p>
                    <button type="button" id="${book.id}" class="request-trade-button" onclick = "tradeRequest(id)">Request Trade</button>
                </li>
            `;
            bookList.innerHTML += bookHTML;
        });
        }
        });
    }
    