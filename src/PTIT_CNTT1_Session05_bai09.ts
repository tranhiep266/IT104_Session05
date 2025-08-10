class Book04 {
  readonly id:number;
  private title: string;
  private author: string;
  constructor(id:number,title: string, author: string) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
  getTitle(): string {
    return this.title;
  }
  getAuthor(): string {
    return this.author;
  }
  setTitle(newTitle: string): void {
    this.title = newTitle;
  }

  setAuthor(newAuthor: string): void {
    this.author = newAuthor;
  }
}

class Library04 {
  private books: Book04[] = [];
  addBook(book: Book04): void {
    this.books.push(book);
  }
  listBooks(): void {
    console.log("Lists:");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. "${book.getTitle()}" của ${book.getAuthor()}`);
    });
  }
  searchByTitle(searchText: string): void {
    const lowerSearch = searchText.toLowerCase();
    const foundBooks = this.books.filter(book =>
      book.getTitle().toLowerCase().includes(lowerSearch)
    );

    if (foundBooks.length > 0) {
      console.log(`Tim ra:`);
      foundBooks.forEach(book =>
        console.log(`ID ${book.id}: "${book.getTitle()}" - ${book.getAuthor()}`)
      );
    }
  }
}

const book104 = new Book04(1,"hello kitty", "wenger");
const book204 = new Book04(2,"anh khac hay em khac", "Ha Thanh va Ngoc Some");
const book304 = new Book04(3,"conan", "Nguoi Nhat ban khac");
const book404 = new Book04(4,"doremon", "Nhat Ban");
const book504 = new Book04(5,"7 chu cho", "CR7");
const library04 = new Library04();
library04.addBook(book104);
library04.addBook(book204);
library04.addBook(book304);
library04.addBook(book404);
library04.addBook(book504);
library04.listBooks();
library04.searchByTitle('nhat');