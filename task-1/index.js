import readline from 'readline-sync';
import { searchBook } from './searchBook.js';
import { getAuthor }  from './getAuthor.js';


const main = async () => {
    while (true) {
        const title = readline.question('Enter book title: ');
        // console.log(title, 'title')
        const book = await searchBook(title);
        // console.log(book, 'book information')
        


        if (book) {
            const authorNames = [];
            for (const authorId of book?.authors) {
                const author = await getAuthor(authorId);
                if (author) {
                    const middleInitial = author.middleInitial ? ` ${author.middleInitial.charAt(0)}.` : '';
                    authorNames.push(`${author.firstName} ${middleInitial} ${author.lastName}`);
                }
            }
            console.log(`Title: ${book.title}`);
            console.log(`Description: ${book.description}`);
            console.log(`Authors: ${authorNames.join(', ')}`);
        } else {
            console.log('Book could not be found');
        }
    }
};

main();
