import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import Book from "./Book";

const Search = ({ ChangeShelf, books }) => {

    const [search,setSearch] = useState("")
    const [searched,setSearched] = useState([]);
    const searchHandler = (e)=>
    {
        setSearch(e.target.value)
    }


    useEffect(()=>{

        let isClear = true
        
       
      
    const getSearch = async ()=>
        {
             const searchValue = await BooksAPI.search(search)
            console.log(search);
            if(searchValue.error)
            {
                setSearched([])
        }else if (isClear)
            {
                setSearched(searchValue.map(searchedBook=>
                    {
                        books.forEach((book)=>
                        {
                            if (searchedBook.title === book.title) 
                            {searchedBook.shelf = book.shelf}
                           
                        })
                    return searchedBook
                    })
                

                )
            }
            
        console.log(searchValue);
    
        }
           if(search !== "") getSearch()
            
        return () => {
            isClear = false;
            setSearched([])
        }

        }, [search])
        
   
    return (
        <div className="search-books">
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search" >
                            Close
                        </button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            value={search}
                            onChange={(e)=>searchHandler(e)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searched.map(book =>
                            {
                            return <li key={book.id}>
                                 <Book book={book} ChangeShelf={ChangeShelf} />
                                </li>
                            })}
                    </ol>
                </div>
            </div>
          </div>
       
    )
}


export default Search