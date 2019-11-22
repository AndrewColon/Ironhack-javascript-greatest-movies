/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {

  let copy = [...array];

  copy.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    else if (b.year < a.year) {
      return 1;
    }
    else if (a.title < b.title) {
      return -1;
    }
    else {
      return 0;
    }
  })
  return copy;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  let moviesBySteven = array.filter((eachMovie) => {
    return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama');
  })

  return moviesBySteven.length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {

  let copy = [...array];

  copy.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    else if (a.title > b.title) {
      return 1;
    }
  });


  let TTT = copy.splice(0, 20);

  let THEBESTOFTHEBEST = TTT.map((eachMovie) => {
    return eachMovie.title;
  })

  return THEBESTOFTHEBEST;

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage();

let  = reviews.reduce((a, c) => {
  return a + c.rate;
}, 0)

let avgReview = (totalReview / reviews.length).toFixed(2)

console.log(avgReview)



// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
