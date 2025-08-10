class Book {
  private title: string;
  private author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  getTitle(): string {
    return this.title;
  }
  getAuthor(): string {
    return this.author;
  }
}

class Library {
  private books: Book[] = [];
  public addBook(book: Book): void {
    this.books.push(book);
  }
  public listBooks(): void {
    console.log("Lists:");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. "${book.getTitle()}" của ${book.getAuthor()}`);
    });
  }
}

const book1 = new Book("hello kitty", "wenger");
const book2 = new Book("anh khac hay em khac", "Ha Thanh va Ngoc Some");
const book3 = new Book("conan", "Nguoi Nhat ban khac");
const book4 = new Book("doremon", "Nhat Ban");
const book5 = new Book("7 chu cho", "CR7");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.listBooks();
