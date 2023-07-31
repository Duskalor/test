import { ReactNode, createContext, useEffect, useState } from 'react';
import { Book } from '../interface/book.interface';
import { books } from '../data/book';

interface bookContext {
  allBooks: Book[];
  AddBook: (book: Book) => void;
  DeleteBook: (ISBN: string) => void;
  listBooks: Book[];
  allGenre: string[];
  setfilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
}
export const BookContext = createContext<bookContext | undefined>(undefined);

export const BooksContext = ({ children }: { children: ReactNode }) => {
  const [allBooks] = useState<Book[]>(books);
  const [listBooks, setListBooks] = useState<Book[]>(() => {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
  });

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'books') setListBooks(JSON.parse(`${event.newValue}`));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const [filter, setfilter] = useState('');

  const allGenre = [...new Set(books.map((book) => book.genre))];

  const persist = (books: Book[]) =>
    window.localStorage.setItem('books', JSON.stringify(books));

  const AddBook = (book: Book) => {
    const exist = listBooks.find((b) => b.ISBN === book.ISBN);
    const newData = [...listBooks, book];
    if (!exist) {
      setListBooks(newData);
      persist(newData);
    }
  };
  const DeleteBook = (ISBN: string) => {
    const exist = listBooks.find((b) => b.ISBN === ISBN);
    if (exist) {
      const newList = listBooks.filter((bro) => bro.ISBN !== ISBN);
      setListBooks(newList);
      persist(newList);
    }
  };

  const filterBooks =
    filter !== '' ? allBooks.filter((book) => book.genre === filter) : allBooks;

  return (
    <BookContext.Provider
      value={{
        filter,
        setfilter,
        allBooks: filterBooks,
        listBooks,
        AddBook,
        DeleteBook,
        allGenre,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
