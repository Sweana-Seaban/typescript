// pick type
type Book = {
    name: string,
    price: number,
    genre: string,
    author: string,
    published_year: number,
}

/* creates a type BookPreview
with properties name and price picked from
Book type
*/
type BookPreview = Pick<Book, 'name' | 'price'>

// omit type
/* creates a type BookDetails
with price and published_year omitted from 
Book type
*/
type BookDetails = Omit<Book, 'price' | 'published_year'>

// exclude
type Alphabets = 'a' | 'b' | 'c' | 'd' | 'e';

/* creates a type FirstAlphabets
 by excluding d and e 
 from Alphabets
*/
type FirstAlphabets = Exclude<Alphabets, 'd' | 'e'>

// extract
/* creates a type LastAlphabets
by extracting d and e
from Alphabets
*/
type LastAlphabets = Extract<Alphabets, 'd' | 'e'>