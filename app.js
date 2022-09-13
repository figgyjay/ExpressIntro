const express = require('express')
const app = express()
const port = 3000
const favoriteMovieList = ['Inception', 'The Color Purple', 'Coming To America', 'Rasing Arizona', 'The Pianist', 'Dune'];
const movieString = favoriteMovieList.join(",");

app.get('/my-name', (req, res) => {
    console.log('Default Route')
  res.send('Christopher Hoskins 9/13/2022')  
})

app.get('/list-movies', (req, res) => {
    console.log('movielist');
    const movieString = favoriteMovieList.join("+");
    res.send(movieString);
})

console.log(movieString)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





