import {IoSearchSharp} from "react-icons/io5"
 import styles from "../components/SearchBox.module.css"
function SearchBox({search, setSearch, searchHandler}) {
  return (
    <div className={styles.search}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value.toLocaleLowerCase())} placeholder=" Search title" />
        <button onClick={searchHandler}><IoSearchSharp/></button>
        
    </div>
  )
}

export default SearchBox