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

function ratesAverage(array){

  if(array.length == 0){
    return 0;
  }

  let total = array.reduce( (a, c) =>{
    if(c.rate){
      return a + c.rate;
    }
    else{
      return a + 0;
    }
  }, 0);

  let avgRate = (total / array.length).toFixed(2);
  return Number(avgRate);

}

console.log(ratesAverage(movies))


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {

  let dramaMovies = array.filter(eachMovie => {
      return eachMovie.genre.includes("Drama")
  });

  let avgDramaMovies = ratesAverage(dramaMovies);
  
  return avgDramaMovies;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {

  let copy = [...array];

  let minArray = copy.map((eachMovie) => {

      let duration = eachMovie.duration;

      let min = 0;
      let hour = 0;
      let final = 0;
      let temp;
      if (duration.includes('h') && duration.includes('min')) {
          temp = duration.replace('h', ' ').replace('min', ' ').trim();
          let hour = Number(temp.substring(0, temp.indexOf(" ")));
          let min = Number(temp.substring(temp.indexOf(" ") + 1));
          console.log(hour + " " + min)
          final = (hour * 60 + min);

      }
      else if (duration.includes('h')) {
          hour = Number(duration.substring(0, duration.indexOf("h")));
          final = hour * 60;

      }
      else if (duration.includes('min')) {
          min = Number(duration.substring(0, duration.indexOf("min")));
          final = min;
      }

      return {
          title: eachMovie.title,
          year: eachMovie.year,
          director: eachMovie.director,
          duration: final,
          genre: eachMovie.genre,
          rate: eachMovie.rate
      }
  })

  return minArray;

}



// BONUS Iteration: Best yearly rate average - Best yearly rate average
