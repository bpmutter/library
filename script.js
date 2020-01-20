

function Book(title, author, year, description, readStatus) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.description = description;
    this.readStatus = readStatus;
}

let myLibrary = [];

function addBookToLibrary() {
    let newBook = new Book()
    newBook.title = document.getElementById("title").value;
    newBook.author = document.getElementById("author").value;
    newBook.year = document.getElementById("year").value;
    newBook.description = document.getElementById("description").value;

    let radios = document.getElementsByName("read-status");

    if (radios[0].checked) {
        newBook.readStatus = true;
    }
    else if (radios[1].checked) {
        newBook.readStatus = false;
    }

    myLibrary.push(newBook);
}

function renderLibrary() {
    const library = document.getElementById("library");
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {

        let thisBook = createBook(i);

        // add the newly created element and its content into the DOM
        library.appendChild(thisBook);
    }
}

function createBook(i) {
    // create a new book element
    let newBook = document.createElement("div");
    newBook.className += "book";

    //populates book card with the relevant info
    let newBookTitle = document.createElement("h3");
    newBookTitle.innerText = myLibrary[i].title;
    newBookTitle.className += "book-title";
    newBook.appendChild(newBookTitle);

    let newBookAuthor = document.createElement("p");
    newBookAuthor.innerText = myLibrary[i].author;
    newBookAuthor.className += "book-author";
    newBook.appendChild(newBookAuthor);

    let newBookYear = document.createElement("p");
    newBookYear.innerText = myLibrary[i].year;
    newBookYear.className += "book-year";
    newBook.appendChild(newBookYear);

    let newBookDescription = document.createElement("p");
    newBookDescription.innerText = myLibrary[i].description;
    newBookDescription.className += "book-description";
    newBook.appendChild(newBookDescription);

    let bookBreak = document.createElement("br");
    newBook.appendChild(bookBreak);

    let newBookReadStatus = document.createElement("button");
    newBookReadStatus.innerText = "Read Status: ";
    newBookReadStatus.className = "book-button";
    let newBookReadIcon = document.createElement("i");
    if (myLibrary[i].readStatus === true) {
        newBookReadIcon.className += "book-read fas fa-check";
    }
    else if (myLibrary[i].readStatus === false) {
        newBookReadIcon.className += "book-unread fas fa-times";
    }
    newBookReadStatus.addEventListener("click", (e) => {
        if (myLibrary[i].readStatus === true) {
            newBookReadIcon.className = "book-unread fas fa-times";
            myLibrary[i].readStatus = false;
        }
        else if (myLibrary[i].readStatus === false) {
            newBookReadIcon.className = "book-read fas fa-check";
            myLibrary[i].readStatus = true;
        }

    });
    newBookReadStatus.appendChild(newBookReadIcon);
    newBook.appendChild(newBookReadStatus);

    let newBookRemove = document.createElement("button");
    newBookRemove.innerText = "Remove Book";
    newBookRemove.className += "book-button remove-book";
    newBookRemove.addEventListener("click", (e) => {
        e.currentTarget.parentNode.remove();
        myLibrary.splice(i, 1);
        if (myLibrary.length === 1) {
            myLibrary = [];
        }
        console.table(myLibrary);
    }, false);
    newBook.appendChild(newBookRemove);

    return newBook;
}


document.getElementById("submit").addEventListener("click", () => {
    addBookToLibrary();
    renderLibrary();
    modal.style.display = "none";
    console.table(myLibrary);

});

//POP UP
// Get the modal
const modal = document.getElementById("my-pop-up");

// Get the button that opens the modal
const btn = document.getElementById("add-book");

// Get the <span> element that closes the modal
const span = document.getElementById("closer");

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
