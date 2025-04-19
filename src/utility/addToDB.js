const getStoredBooks=() => {
    const storedBooks = localStorage.getItem('readList');
    if (storedBooks) {
        const storeBookData=JSON.parse(storedBooks);
        return storeBookData;
    }
    else {
        return [];
    }
}
const addToDB = (id) => {
    const storedBooks = getStoredBooks();
    if(storedBooks.includes(id)){
        alert('Already added to read list')
    }
    else {
        storedBooks.push(id);
        localStorage.setItem('readList', JSON.stringify(storedBooks));
    }

    // const bookIndex = storedBooks.indexOf(id);
    // if (bookIndex === -1) {
    //     storedBooks.push(id);
    // }
    // localStorage.setItem('readList', JSON.stringify(storedBooks));
}
export {addToDB , getStoredBooks};
