import "./searchPage.css";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../../Components/bookComponent/bookComponent";
import { bookContext } from "../../Contexts/bookContext";

export default function SearchPage() {
  const { searchText, setSearchText, allBooks } = useContext(bookContext);

  const [filteredBooks, setFilteredBooks] = useState([]);

  const findOut = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setFilteredBooks(
      allBooks.filter(({ title }) => title.includes(searchText))
    );
  };

  return (
    <div className="searchPage">
      <h1>Search here</h1>{" "}
      <Link className="back" to="/">
        back
      </Link>
      <input type="text" value={searchText} onChange={(e) => findOut(e)} />
      <div className="books">
        {filteredBooks.map((book) => (
          <div>
            <Book book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}
