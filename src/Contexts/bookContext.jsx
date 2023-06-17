import { createContext, useEffect, useReducer, useState } from "react";
import { books } from "../books";

export const bookContext = createContext();

export default function BookProvider({ children }) {
  const [allBooks, setAllBooks] = useState(books);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <bookContext.Provider
        value={{ setAllBooks, allBooks, searchText, setSearchText }}
      >
        {children}
      </bookContext.Provider>
    </div>
  );
}

// const reducerFunc = (state, action) => {
//   switch (action.type) {
//     case "reading":
//       console.log(action.payload, "readRedcuer");
//       return { ...state, reading: [...state.reading, ...action.payload] };

//     case "wantToRead":
//       return {
//         ...state,
//         wantToRead: [...state.wantToRead, ...action.payload]
//       };

//     case "read":
//       return { ...state, read: [...state.read, ...action.payload] };

//     default:
//       return state;
//   }
// };

// const [state, disptach] = useReducer(reducerFunc, {
//   reading: [],
//   wantToRead: [],
//   read: []
// });

// const booksCategory = () => {
//   const read = allBooks.filter(({ category }) => category === "read");
//   disptach({ type: "read", payload: read });

//   console.log(read, "readfromfetch");

//   const reading = allBooks.filter(({ category }) => category === "reading");
//   disptach({ type: "reading", payload: reading });

//   const wantToRead = allBooks.filter(
//     ({ category }) => category === "wantToRead"
//   );
//   disptach({ type: "wantToRead", payload: wantToRead });
// };

// const bookData = async () => {
//   try {
//     const response = await fakeFetch("https://example.com/api/books");
//     if (response.status === 200) {
//       const allBooks = response.data.books;
//       const read = allBooks.filter(({ category }) => category === "read");
//       disptach({ type: "read", payload: read });
//       console.log(read, "readfromfetch");
//       const reading = allBooks.filter(
//         ({ category }) => category === "reading"
//       );
//       disptach({ type: "reading", payload: reading });

//       const wantToRead = allBooks.filter(
//         ({ category }) => category === "wantToRead"
//       );
//       disptach({ type: "wantToRead", payload: wantToRead });

//       setAllBooks(allBooks);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   booksCategory();
// }, []);

// console.log(allBooks);
// console.log(state);
