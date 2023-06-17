import { useContext } from "react";
import { bookContext } from "../../Contexts/bookContext";

import "./optionComponent.css";

export default function Options(props) {
  const { allBooks, setAllBooks } = useContext(bookContext);

  if (!props.show) {
    return null;
  }

  const categoryChange = (value) => {
    console.log(value);
    const updatedBook = allBooks.map((theBook) => {
      if (theBook.id === props.id) {
        return { ...theBook, category: value };
      }
      return theBook;
    });
    setAllBooks(updatedBook);
    props.onClose();
  };

  return (
    <div className="optionsMenuParent">
      <div className="optionsMenu">
        <p>Move to </p>
        <p onClick={() => categoryChange("reading")}>Reading shelf</p>
        <p onClick={() => categoryChange("wantToRead")}>Want to Read shelf</p>
        <p onClick={() => categoryChange("read")}>Read Shelf</p>
      </div>
    </div>
  );
}
