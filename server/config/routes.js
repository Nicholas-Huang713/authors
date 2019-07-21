const authors = require('../controllers/authors');

module.exports = (app) => {
    app.get("/authors", authors.getAuthors),
    app.get('/authors/:id', authors.getAuthor),
    app.post('/authors', authors.createAuthor),
    app.put('/authors/edit/:id', authors.updateAuthor),
    app.delete('/authors/:id', authors.deleteAuthor)
};