import { useContext } from 'react';
import { BookContext } from './BookContext';

export const useBooks = () => {
  const data = useContext(BookContext);

  if (!data) {
    throw new Error('out of Context !!!');
  }
  return data;
};
