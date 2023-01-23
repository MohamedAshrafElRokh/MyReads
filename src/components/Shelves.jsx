import React from "react"
import Shelf from "./Shelf";
const Shelves = ({ books, ChangeShelf }) => {
    const shelves = [
        { id:1, shelf: 'currentlyReading', title: 'Currently Reading' },
        { id:2, shelf: 'wantToRead', title: 'Want to Read' },
        { id:3, shelf: 'read', title: 'Read' },
    ];

    return (
        <div className="list-books-content">
            {shelves.map(({shelf,id,title}) => {
                const BookShelf = books.filter(book => book.shelf === shelf);
                return (
                    <div key={id}>

                        <Shelf  books={BookShelf} title={title} ChangeShelf={ChangeShelf} />
                    </div>
                );
            })}
        </div>
    );
};

export default Shelves