import { useRef } from "react"

const Book = ({ book, ChangeShelf }) =>
{
    // api attributes 
    const imgUrl = book.imageLinks?.thumbnail
    const authorName = book?.authors
    const title = book.title
    const option = useRef("")
    
    

    const handelRef = ()=>{
        const optionSelected = option.current.value
      
        ChangeShelf(book,optionSelected)
    }
    return(
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${imgUrl})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select
                     defaultValue={book.shelf? book.shelf : "None"} 
                     onChange={handelRef} ref={option} >
                        <option value="none" disabled>
                            Move to...
                        </option>

                        <option  value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="None">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authorName}</div>
        </div>
    )
}

export default Book