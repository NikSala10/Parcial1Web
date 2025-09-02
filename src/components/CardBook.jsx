const CardBook = ({book, favorite, isFavorite, onDelete, state}) => {
// Mostrar los resultados en tarjetas con:
// Título del libro
// Autor principal
// Año de publicación (si existe)
// Un botón "Agregar a Lista"

    return (
    <>
        <p>{book.title}</p>
        <p>{book.author_name}</p>
        <p>{book.first_publish_year}</p>
        <button onClick={() => favorite()}>Agregar a lista</button>
    </>
    )
}

export default CardBook;