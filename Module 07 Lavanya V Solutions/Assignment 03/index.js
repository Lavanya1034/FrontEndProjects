//list of books 

//get the list of books
let books = window.prompt("Enter the list of books");
console.log(books);

//split the string to arrays
let bookArray = books.split(",");

//loop through to find whether the specific books are present
for(const book of bookArray){
    if(book.trim() === "The Little Prince" || book.trim() === "Pinocchio"){
        //input can be written with space after comma or sometimes without space,
        // so i used trim to omit space if given in input string
        bookArray.unshift("A special gift — set of stickers")
        break;
    }
}

console.log("Your items to buy:")
for(let i =0; i<bookArray.length; i++)
{
    console.log(bookArray[i].trim());
}