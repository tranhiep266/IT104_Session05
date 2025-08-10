"use strict";
class Book02 {
    constructor(id, title, author) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
}
class Library02 {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        console.log("Lists:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. "${book.getTitle()}" của ${book.getAuthor()}`);
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find((b) => b.id === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            return true;
        }
        return false;
    }
}
const book102 = new Book02(1, "hello kitty", "wenger");
const book202 = new Book02(2, "anh khac hay em khac", "Ha Thanh va Ngoc Some");
const book302 = new Book02(3, "conan", "Nguoi Nhat ban khac");
const book402 = new Book02(4, "doremon", "Nhat Ban");
const book502 = new Book02(5, "7 chu cho", "CR7");
const library02 = new Library02();
library02.addBook(book102);
library02.addBook(book202);
library02.addBook(book302);
library02.addBook(book402);
library02.addBook(book502);
library02.listBooks();
const updateBook02 = library02.updateBookById(3, "hehehe", "Sena");
console.log('Sau updated: ');
library02.listBooks();
