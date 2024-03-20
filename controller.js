const getBook = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ books: [{ name: "Harry Potter" }] }))
}

const postBook = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end('post a books')
}



const putBook = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end('put a books')
}



const patchBook = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end('patch a books')
}


const deleteBook = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end('delete a books')
}


const getAuthors = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end('get all authors ')
}
const postAuthors = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end('post an author')
}

const putAuthors = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end('put an author')
}

const patchAuthors = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end('patch an author')
}

const deleteAuthors = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end('delete an author')
}



module.exports = {
    getBook,
    postBook,
    patchBook,
    putBook,
    deleteBook,
    getAuthors,
    postAuthors,
    putAuthors,
    patchAuthors,
    deleteAuthors
}