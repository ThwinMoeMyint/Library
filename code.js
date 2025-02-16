function Books(name, author) {
    this.name = name;
    this.author = author; 
};

const library = [];

const form = document.querySelector(".submit-form");
const booksList = document.querySelector(".book-table");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const book = document. querySelector(".book").value;
    const author = document.querySelector(".author").value;

    if(book && author) {
        library.push(new Books(book, author));

        bookDisplay();

        form.reset();
    } else {
        alert("Please add author or book");
    }
});

function bookDisplay () {
    const rows = document.querySelectorAll(".book-table tr");
    rows.forEach((row, index) => {
        if (index !== 0) row.remove();
    });
    
    const table = document.querySelector(".book-table");

    library.forEach((books, index) => {
        const row = document.createElement("tr");
        const bookRow = document.createElement("td");
        const authorRow = document.createElement("td");
        const cancelButton = document.createElement("td");

        bookRow.textContent = books.name;
        authorRow.textContent = books.author;
        cancelButton.innerHTML = `<button class="cancel" data-index="${index}">x</button>` 
        
        row.appendChild(bookRow);
        row.appendChild(authorRow);
        row.appendChild(cancelButton);
        table.appendChild(row);
    });

    document.querySelectorAll(".cancel").forEach(button => {
        button.addEventListener("click", function(){
            const index = this.getAttribute("data-index");
            deleteBook(index);
        })
    });
}

function deleteBook(index){
    library.splice(index, 1);
    bookDisplay();
}