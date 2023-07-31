import { Books } from './components/Books';
import { ListBooks } from './components/ListBooks';

function App() {
  return (
    <div className='bg-fondo-500 h-screen text-white'>
      <div className='flex px-10 gap-10 '>
        <Books />
        <ListBooks />
      </div>
    </div>
  );
}

export default App;
