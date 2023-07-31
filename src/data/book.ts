import { library } from './book.json';

export const books = library.map(({ book }) => book);
