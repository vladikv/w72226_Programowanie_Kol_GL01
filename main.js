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
    new Book("Lalka", 1890, "Bolesław", "Prus"),
    new Book("Pan Tadeusz", 1834, "Adam", "Mickiewicz"),
    new Book("Quo Vadis", 1896, "Henryk", "Sienkiewicz"),
    new Book("Ferdydurke", 1937, "Witold", "Gombrowicz")
  ];

  const selectedYear = 1896;

  console.log(`Książki wydane w roku ${selectedYear}:`);

  books.forEach(book => {
    if (book.year === selectedYear) {
      console.log(`- "${book.title}" — ${book.getFullAuthorName()}`);
    }
  });