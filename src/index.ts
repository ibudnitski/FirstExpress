import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express()

const corsMiddleware = cors();
app.use(corsMiddleware);
const jsonBodyMiddleware = bodyParser.json();
app.use(jsonBodyMiddleware);

const port = process.env.PORT || 3003;

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

app.get('/', (Request: any, Response: any) => {
    res.json(movies);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})