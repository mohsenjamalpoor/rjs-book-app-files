import { useState } from "react"
import {books as bookData} from "../constants/mockData"
import BookCard from "./BookCard"
import SideCard from "./SideCard";

import styles from "../components/Books.module.css"
import SearchBox from "./SearchBox";
export default function Books() {
  const[liked, setLiked] = useState([]);
  const[books, setBooks] = useState(bookData);
  const[search, setSearch] = useState([]);
  const handelLikedList = (book, status) => {
    if(status){
        const newLiked = liked.filter(i => i.id !==book.id)
        setLiked(newLiked)
    } else{
        setLiked(liked =>[...liked, book])
    }

  }

  const searchHandler = () => {
    if(search){
      const newBooks = bookData.filter( book => book.title.toLocaleLowerCase().includes(search))
      setBooks(newBooks)

    }else{
      setBooks(bookData)
    }
  }
  return (
    <>
    <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
    <div className={styles.container}>
        <div className={styles.cards}>{books.map( (book)  => (
          <BookCard key={book.id} data={book} handelLikedList={handelLikedList}/>
        ))}</div>
        {!!liked.length && <div className={styles.favorite}> <h4>Favorites</h4>{liked.map((book) => <SideCard key={book.id} data={book}/>)}</div>}


    </div>
          </>
  )
}
