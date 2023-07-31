import { useBooks } from '../Context/useBooks';

export const Books = () => {
  const {
    filter,
    allBooks: books,
    AddBook,
    listBooks,
    allGenre,
    setfilter,
  } = useBooks();

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setfilter(e.target.value);

  return (
    <div className='w-[70%] '>
      <h2 className='text-6xl p-5'>
        {books.length - listBooks.length} Libros Disponibles
      </h2>
      <h2 className='text-3xl p-5'>
        {listBooks.length} Libros en Lista de Lectura
      </h2>
      <div>
        <select className='bg-black' value={filter} onChange={handleFilter}>
          <option value=''>todas</option>
          {allGenre.map((genre, i) => {
            return (
              <option key={i} value={genre}>
                {genre}
              </option>
            );
          })}
        </select>
      </div>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-9 py-5 px-5'>
        {books.map((book) => {
          const exist = listBooks.find((bo) => bo.ISBN === book.ISBN);
          return (
            <li key={book.ISBN} onClick={() => AddBook(book)}>
              <img
                src={book.cover}
                alt={book.title}
                className={`${
                  !exist ? '' : 'opacity-50'
                } object-cover w-[min(150px,100%)] h-[max(150px,100%)]`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
