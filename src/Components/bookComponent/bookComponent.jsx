import { useState } from "react";
import Options from "../optionComponent/optionComponent";
import "./bookComponent.css";

export default function Book({ book }) {
  const [show, setShow] = useState(false);

  const availOptions = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="book">
        <Options show={show} id={book.id} onClose={() => setShow(false)} />
        <img onClick={() => availOptions()} src={book.image} alt="" />
        <p>{book.tite}</p>
        <p>{book.author}</p>
        <p>{book.publisher}</p>
        <p>{book.year}</p>
        <p>$ {book.price}</p>
      </div>
    </div>
  );
}
