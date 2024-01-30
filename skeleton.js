const myLibrary = []
const bookContainer = document.querySelector('.inner-book-container')

//prototype
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

/* function to create object from Book proto and also to add
* the created objects to myLibrary */
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}


/* add the created object info() function to
* a variable, so it can be displayed as a text content */
function displayMyLibrary() {
    myLibrary.forEach((book, index) => {
        book.id = `data-${index + 1}`

        let eachBook = document.createElement('div')
        eachBook.className = 'each-book'
        eachBook.innerHTML = `
            <p class="title"><span class="head">Title:</span> ${book.title}</p>
                <p class="author"><span class="head">Author:</span> ${book.author}</p>
                <p class="pages"><span class="head">Pages:</span> ${book.pages}</p>
                <p class="read"><span class="head">Read:</span> ${book.read}</p>
        `;
        bookContainer.appendChild(eachBook)


        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'btn';
        deleteBtn.textContent = 'Delete'

        eachBook.appendChild(deleteBtn)

        const currentBookId = book.id
        const indexToRemove = myLibrary.findIndex(
            book => book.id === currentBookId
        )

        deleteBtn.addEventListener('click', () => {

            if (currentBookId) {
                myLibrary.splice(indexToRemove, 1)
                eachBook.remove()

                console.log(currentBookId)
                console.log(book)
                console.log(myLibrary)
            }
        })
    })
}

//function for dialog modal
function addModalForm() {
    const close = document.querySelector('.close')
    const addNewBook = document.querySelector('.add-new-book')
    const addNewBookDialog = document.querySelector('.add-new-book-dialog')
    const form = document.querySelector('.form')


    addNewBook.addEventListener('click', () => {
        addNewBookDialog.showModal()
    })
    close.addEventListener('click', () => {
        addNewBookDialog.close()
    })

    form.addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault()

        //create object from the form
        const formData = new FormData(form)

        //convert the object to plain javascript object
        const toObject = Object.fromEntries(formData)

        let eachBook = document.createElement('div')
        eachBook.className = 'each-book'
        eachBook.innerHTML = `
        <p class="title"><span class="head">Title:</span> ${toObject.title}</p>
            <p class="author"><span class="head">Author:</span> ${toObject.author}</p>
            <p class="pages"><span class="head">Pages:</span> ${toObject.pages}</p>
            <p class="read"><span class="head">Read:</span> ${toObject.read}</p>
<!--            <button class="btn btns delete">Delete</button>-->
        `;

        bookContainer.appendChild(eachBook)

        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'btn';
        deleteBtn.textContent = 'Delete'

        eachBook.appendChild(deleteBtn)



        myLibrary.push(toObject)

        myLibrary.forEach((book, index) => {
            if (!book.id) {
                book.id = `data-${index + 1}`

                const currentBookId = book.id
                const indexToRemove = myLibrary.findIndex(
                    book => book.id === currentBookId
                )

                deleteBtn.addEventListener('click', () => {

                    if (currentBookId) {
                        myLibrary.splice(indexToRemove, 1)
                        eachBook.remove()
                    }
                })
            }
        })



        addNewBookDialog.close()
        // console.log(toObject)
        // console.log(myLibrary)
    }
}


addBookToLibrary('Joy', 'Joyce', 20, 'not read')
addBookToLibrary('God', 'James', 20, 'read')
addBookToLibrary('Cruise', 'Lance', 10, 'not read')
// addBookToLibrary('Joy', 'Joyce', 20, 'not read')
// addBookToLibrary('God', 'James', 20, 'read')
// addBookToLibrary('Cruise', 'Lance', 10, 'not read')
// addBookToLibrary('Joy', 'Joyce', 20, 'not read')
// addBookToLibrary('God', 'James', 20, 'read')
// addBookToLibrary('Cruise', 'Lance', 10, 'not read')

addModalForm()
displayMyLibrary()