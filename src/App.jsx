import { useEffect, useState } from 'react'
import CardList from './components/CardList';
import './App.css'

function App() {
  
  const [search, setSearch] = useState('');  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));  

  const handleAddBook = (() => {
    const favoriteBooks = [...books, favorites]
    setFavorites(favoriteBooks)
  })

  const handleDelete = (id) => {
    const bookiltered = books.filter((book, index) => id !== index);
    setBooks(bookiltered);
  }

  // useEffect(() => {
  //   fetch('https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10')
  //   .then((res) => res.json())
  //   .then((datos) => setBooks(datos.docs))
  //   .catch((error) => setError(error))
  //   .finally(() => setLoading(false))
  // },[])

  const sendForm = () => {
    setLoading(true)
    fetch(`https://openlibrary.org/search.json?q=${search}&limit=10`)
    .then((res) => res.json())
    .then((datos) => setBooks(datos.docs))
    .catch((error) => setError(error))
    .finally(() => setLoading(false))
}

  if(error) return <p>Hay un error: {error}</p>
  if(loading) return <p>Cargando.....</p>

  return (
    <>
      <input 
      type='text'
      placeholder='Search Book'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <button onClick={sendForm}>search</button>
      {filteredBooks.length > 0 ? 
      <CardList books={filteredBooks}  favorite={handleAddBook}></CardList>
			 : 
				<p>No has buscado libros.</p>
			}

      <h3>Libros guardados</h3>
      <div>
        {favorites.length > 0 ? (
					favorites.map((book, i) =>
            <CardList favorite={favorites} key={book.key}/>
            )
			) : (
				<p>No books available.</p>
			)}
      </div>
    </>
  )
}

export default App
