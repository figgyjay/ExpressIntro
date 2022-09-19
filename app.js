const express = require('express')
const app = express()
const port = 3000
const favoriteMovieList = [];
const movieString = favoriteMovieList.join(",");
let titleToUpdate = null
let titleToDelete = null




app.get('/my-name', (req, res) => {
    console.log('Default Route');
  res.send('Christopher Hoskins 9/13/2022')  
})

app.get('/list-movies', (req, res) => {
   
    favoriteMovieList;
    console.log('movielist');
   

    favoriteMovieList.push(
      {
        title: "Batman",
        starRating: "5",
        isRecommended: true,
        createAt: Date,
        lastModified: Date
      }
    );
    favoriteMovieList.push(
      {
        title: "Batman",
        starRating: "5",
        isRecommended: true,
        createAt: Date,
        lastModified: Date
      }

    );
    favoriteMovieList.push(
      {
        title: "Batman",
        starRating: "5",
        isRecommended: true,
        createAt: Date,
        lastModified: Date
      }

    );
    favoriteMovieList.push(
      {
        title: "Batman",
        starRating: "5",
        isRecommended: true,
        createAt: Date,
        lastModified: Date
      }

    );

    if (isRecommended < 3) {
        isRecommended = false;
    };

    console.log(favoriteMovieList);

    const movieString = favoriteMovieList.join(",");
    res.send(movieString);
})
console.log(movieString);

app.get('/new-movie', (req, res) => {

  console.log('new Movie');
  favoriteMovieList.push('Joker');
  const movieString = favoriteMovieList.join(",");

  console.log(favoriteMovieList);
  res.send(movieString);
})
console.log(movieString);

app.get('/all-movies', (req, res) => {
  console.log('all movies');q
  res.send(movieString);
})
console.log(newMovie);

app.get('/update-movies', (req, res) => {
  console.log(req.query);
  titleToUpdate = req.query.titleToUpdate;
  console.log("Title to Update");
 
  res.send("Update Title" + titleToUpdate);
})


app.get('/delete-movies', (req, res) => {
  console.log(req.query);
  titleToDelete = req.query.titleToDelete;
  console.log("Title to Delete");
 
  res.send("Delete Title" + titleToDelete);
})








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

 



