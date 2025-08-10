"use strict";
class Book03 {
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
class Library03 {
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
    searchByTitle(searchText) {
        const lowerSearch = searchText.toLowerCase();
        const foundBooks = this.books.filter(book => book.getTitle().toLowerCase().includes(lowerSearch));
        if (foundBooks.length > 0) {
            console.log(`Tim ra:`);
            foundBooks.forEach(book => console.log(`ID ${book.id}: "${book.getTitle()}" - ${book.getAuthor()}`));
        }
    }
}
const book103 = new Book03(1, "hello kitty", "wenger");
const book203 = new Book03(2, "anh khac hay em khac", "Ha Thanh va Ngoc Some");
const book303 = new Book03(3, "conan", "Nguoi Nhat ban khac");
const book403 = new Book03(4, "doremon", "Nhat Ban");
const book503 = new Book03(5, "7 chu cho", "CR7");
const library03 = new Library03();
library03.addBook(book103);
library03.addBook(book203);
library03.addBook(book303);
library03.addBook(book403);
library03.addBook(book503);
library03.listBooks();
library03.searchByTitle('nhat');
