class BookCollection {

    // test only git
    constructor(shelfGenre, room, shelfCapacity){
        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];

        return this;
    }

    get room(){
        return this._room;
    }

    set room(value){
        switch (value) {
            case 'livingRoom':
            case 'bedRoom':
            case 'closet':
                this._room = value;
                break;
        
            default:
               throw  `Cannot have book shelf in ${value}`
        }
    }

    get shelfCondition(){
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre){
        let newBook = {bookName, bookAuthor, genre};

        if(this.shelfCondition <= 0){
            
           this.shelf.shift();
        }

        this.shelf.push(newBook);
        this.shelf.sort((a, b)=> a.bookAuthor.localeCompare(b.bookAuthor));

        return this;

    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter(b =>b.bookName !== bookName);
        return this;
    }

    showBooks(genre){
        let result ='Results for search "history":';
        
        let temp = this.shelf.filter(b => b.genre === genre);

        temp.forEach(book => {
            result += '\n';
            result += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`;
        });  
        
        return result;
    }

    toString(){
        if(this.shelf.length == 0) {
            return "It's an empty shelf";
        } else {
            let result = `"${this.shelfGenre}" shelf in ${this.room} contains:`;

            this.shelf.forEach(book => {
                result += '\n';
                result += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}`;
            });

            return result;
        }
    }
}