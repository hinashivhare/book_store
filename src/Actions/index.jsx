
export const AddBooks = book => {
    return{
        type: "ADD_BOOK",
        payload: book,
    };
};

export const DeleteBOok = id => {
    return{
        type: "DELETE_BOOK",
        payload: id
    };
};

export const EditBookDetails = values => {
    return{
        type: "EDIT_BOOK_DETAILS",
        payload: values
    };
}