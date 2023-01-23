import React from "react"
import Header from "./Header"
import { Link } from 'react-router-dom'
import Shelves from "./Shelves"

const Home = ({ books, ChangeShelf }) => {
    return (
        <div className="list-books">
            <Header />
            <div className="list-books-content">
                <Shelves books={books} ChangeShelf={ChangeShelf} />
            </div>
            <div className="open-search">
                <Link className="open-search" to="/search">
                    
                </Link>
            </div>
        </div>
        )
}


export default Home