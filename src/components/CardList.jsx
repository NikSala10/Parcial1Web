import CardBook from "./CardBook";

const CardList = ({books,favorite, isFavorite, onDelete, state}) => {

    return(
        <>
            {books.map((book) => 
            <CardBook
            book={book} 
            key={book.cover_i}
            favorite={favorite}
            />)}
        </>    )
}

export default CardList;