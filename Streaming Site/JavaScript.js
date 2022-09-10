let count = 1;
class Show {
    constructor(name, year, genre, description, image) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.description = description;
        this.image = image;
        this.newRelease = year >= new Date().getFullYear();
 
    }
    static modalOpen = false;
    addToPage() {
        this.createGenre();
        console.log(this.name);
    }
    createGenre() {
        let genre = document.createElement("div");
        let genreClass = this.genre.split(" ").join("");
        genre.classList.add("genre", genreClass);
        //if the this current class does not exist, add the class.
        if (document.querySelector("." + genreClass) === null) { 
            count++;
            let title = document.createElement("h2");
            title.innerHTML = this.genre;
            document.getElementById("library").append(title);
            document.getElementById("library").append(genre);
        }
        document.querySelector("." + genreClass).append(this.buildShow());
        if (this.newRelease) {
            document.getElementById('newReleases').append(this.buildShow());
        }
    }
    buildShow() {
        let showEl = document.createElement('div');
        showEl.classList.add('show');
        showEl.style.backgroundImage = 'url(' + this.image + ')';
        showEl.onclick = this.makeModal.bind(this);
        return showEl;
    }
    makeModal() {
        if (!Show.modalOpen) {
            Show.modalOpen = true;
            let modal = document.createElement("div");
            modal.classList.add("modal");
            let newh1 = document.createElement("h1");
            newh1.innerHTML = this.name;
            let newImg = document.createElement("img");
            newImg.src = this.image;
            let newGenre = document.createElement("h2");
            newGenre.innerHTML = "Genre: " + this.genre;
            let year = document.createElement("h2");
            year.innerHTML = "Release: " + this.year;
            let description = document.createElement("p");
            description.innerHTML = this.description;

            let closeButton = document.createElement("button");
            close.innerHTML = 'X';
            closeButton.onclick = this.closeModal;

            modal.append(newh1);
            modal.append(newImg);
            modal.append(newGenre);
            modal.append(year);
            modal.append(description);
            modal.append(closeButton);
            document.body.append(modal);
        }
    }
    closeModal() {
        Show.modalOpen = false;
        document.body.removeChild(document.querySelector('.modal'));
    }
}
export { Show };
