import "./MainPage.css";

import { Link } from "react-router-dom";

import { useContext } from "react";
import Book from "../../Components/bookComponent/bookComponent";
import { bookContext } from "../../Contexts/bookContext";

export default function MainPage() {
  const { allBooks } = useContext(bookContext);

  const reading = allBooks.filter(({ category }) => category === "reading");
  const wantToRead = allBooks.filter(
    ({ category }) => category === "wantToRead"
  );
  const read = allBooks.filter(({ category }) => category === "read");

  return (
    <div className="App">
      <Link to="search">Seach you Favourate here</Link>

      <h1>Reading</h1>

      <div className="books">
        {reading.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </div>

      <h1>Want to Read</h1>

      <div className="books">
        {wantToRead.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </div>

      <h1>Read</h1>

      <div className="books">
        {read.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </div>
    </div>
  );
}
