class Book {
    constructor(title, year, authorFirstName, authorLastName) {
      this.title = title;
      this.year = year;
      this.authorFirstName = authorFirstName;
      this.authorLastName = authorLastName;
    }

    getFullAuthorName() {
      return `${this.authorFirstName} ${this.authorLastName}`;
    }
  }

  const books = [
    new Book("test", 1890, "autor name", "autor"),
    new Book("test 2", 1834, "autor name2", "autor 2"),
    new Book("test 3", 1896, "autor name3", "autor 3"),
    new Book("test 4", 1937, "autor name4", "autor 4")
  ];

  const selectedYear = 1896;

  console.log(`Książki wydane w roku ${selectedYear}:`);

  books.forEach(book => {
    if (book.year === selectedYear) {
      console.log(`- "${book.title}" — ${book.getFullAuthorName()}`);
    }
  });