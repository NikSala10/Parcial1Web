import CardBook from "./CardBook";

const CardList = ({books,favorite, isFavorite, onDelete, state}) => {

    return(
        <>
            {books.map((book) => 
            <CardBook
            book={book} 
            key={book.key}
            favorite={favorite}
            isFavorite={isFavorite}
            onDelete={onDelete}
            state={state}
            />)}
        </>    )
}

export default CardList;