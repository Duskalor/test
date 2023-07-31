import { useBooks } from '../Context/useBooks';

export const ListBooks = () => {
  const { listBooks: books, DeleteBook } = useBooks();
  return (
    <div className='bg-lista-500 p-10 mt-10 rounded-2xl'>
      <h2 className='text-5xl p-5'>Lista de Lectura</h2>
      <ul className='grid grid-cols-[repeat(2,minmax(100px,1fr))] gap-4 py-5'>
        {books.map((book) => {
          return (
            <li key={book.ISBN} className='relative'>
              <img
                src={book.cover}
                alt={book.title}
                className='object-cover w-[180px] h-[280px] '
              />
              <span
                className='text-center cursor-pointer absolute right-[-7px] top-[-7px] text-sm bg-white text-black rounded-[50%] h-[20px] w-[20px]'
                onClick={() => DeleteBook(book.ISBN)}
              >
                ❌
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
