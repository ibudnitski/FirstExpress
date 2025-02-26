import express from 'express';
const app = express()
const port = 3003

const movies = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Sci-Fi"
    },
    {
        title: "The Matrix",
        director: "The Wachowskis",
        year: 1999,
        genre: "Action"
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        genre: "Sci-Fi"
    },
    {
        title: "Parasite",
        director: "Bong Joon-ho",
        year: 2019,
        genre: "Thriller"
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        genre: "Action"
    }
];

app.get('/', (req, res) => {
    res.json(movies);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})