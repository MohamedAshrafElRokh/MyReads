import React from "react"
import Book from "./Book"
const Shelf = ({ books, title, ChangeShelf }) => {



    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Book book={book} ChangeShelf={ChangeShelf} />
                        </li>
                    ))}

                </ol>
            </div>
        </div>
    )
}

export default Shelf