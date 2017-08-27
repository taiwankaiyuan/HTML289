function Scene(id, title) {
    this.id = id;
    this.title = title;
    this.getImage = function () {
        return './images/' + (this.id) + '.jpg';
    };
}

module.exports = Scene;