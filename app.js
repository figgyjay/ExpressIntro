const express = require('express')
const app = express()
const port = 3000
const favoriteMovieList = [];
const movieString = favoriteMovieList.join(",");
let titleToUpdate = null
let titleToDelete = null




// app.get('/my-name', (req, res) => {
//     console.log('Default Route');
//   res.send('Christopher Hoskins 9/13/2022')  
// })

app.get('/all-movies', (req, res) => {
    console.log('movielist');
    res.json(movieString);
})

    const newMovieTitle = [{
        title: "",
        starRating: 5,
        isRecommended: true,
        createAt: new Date(),
        lastModified: new Date()
      
    }];

app.post('/new-movie:newMovieTitle', (req, res) => {
  console.log(req.body);

  const newMovie = {
    title: "",
    starRating: 0,
    isRecommended: false
  }
  newMovieTitle = req.body.title
  newMovieTitle = req.body.starRating
  newMovieTitle = req.body.isRecommended

  if (re.body.isRecommended !== true && req.body.isRecommended !== false){
    res.json ({
      success: false,
      message: " isRecommended field is required"
    })
    return;
  }  
  else {
    newMovie.isRecommended = req.body.isRecommended

  };

  if (req.body.title !== true && req.body.title !== false){
    res.json ({
      success: false,
      message: "field is required"
    })
    return;
  }  
  else {
    newMovie.title = req.body.title

  };

  if (re.body.starRating !== true && req.body.starRating !== false){
    res.json ({
      success: false,
      message: " isRecommended field is required"
    })
    return;
  }  
  else {
    newMovie.starRating = req.body.starRating

  };

   console.log(newMovie)

   favoriteMovieList.push(newMovie)

  res.json({
    success: true
  })
})
console.log(movieString);

app.get('/all-movies', (req, res) => {
  res.json(favoriteMovieList);
  console.log('all movies');
})


app.put('/update-movies:titleToUpdate', (req, res) => {
  //route parameter
  console.log("req param", req.params);

  const titleToUpdate = req.params.titleToUpdate;
  const originalMovie = favoriteMovie.findIndex((movie)=>{
    if  (movie.title === req.params.titleToUpdate){
      return true
    } else {
      return false
    }
  });

  // const originalMovie = favoriteMovieList[indexOfMovie];

  // const updatedMovie = {
  


  
  const  updatedMovie = {
        title: originalMovie.title,
        starRating: originalMovie.starRating,
        isRecommended: originalMovie.isRecommended,
        createAt: originalMovie.createAt,
        lastModified: new Date()
       
  };

  if(req.body.title !== undefined){
    updatedMovie.title = req.body.title
  }
  if(req.body.starRating !== undefined){
    updatedMovie.starRating= req.body.starRating
  }
  if(req.body.title !== undefined){
    updatedMovie.isRecommended = req.body.isRecommended
  }
  return;

  // newMovie.title = req.body.title
  // newMovie.starRating = req.body.starRating
  // newMovie.isRecommended = req.body.isRecommended

  // console.log(titleToUpdate)
  // console.log(newTitle);

  // const indexOfMovie = favoriteMovieList.indexOf(titleToUpdate);
  // console.log(indexOfMovie);

  // favoriteMovieList(indexOfMovie) = newTitle
  // console.log(favoriteMovieList);


  res.json({
    success: true
  });
})
favoriteMovieList[indexOfMovie] = updatedMovie


app.delete('/delete-movies:titleToDelete', (req, res) => {
  console.log("req param", req.params);

  const indexOfMovie = favoriteMovie.findIndex((movie)=>{
    if  (movie.title === req.params.titleToDelete){
      return true
    } else {
      return false
    }
  });

  if(indexOfMovie < 0){
    res.json({
      hasBeenDeleted: false
    });
    return;
  }

  // console.log(favoriteMovieList);
  res.json({
    success: true
  });
});

  favoriteMovieList.splice(indexOfMovie, 1);
  res.json({
    hasBeenDeleted: true
  })

  app.get('single-movie/:titleToFind', (req, res) => {
    const titleToFind = req.params.titleToFind
    if (movie.title === req.params.titleToFind){
      return true
    }else{
      return false
    }
  })

  const foundMovie = favoriteMovieList[foundMovieIndex];
  res.json(foundMovie)





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

 



