function randNum (length) { return(Math.floor(Math.random()*length))}
      var generate = document.querySelector(".generate");
      
      function categorize (data) {
          col1 = data.map(function(d){return ((d.Films))})
          col2 = data.map(function(d){return d.Pets})
          col3 = data.map(function(d){return d.Possessions})
          col4 = data.map(function(d){return d.Dislikes})
          col5 = data.map(function(d){return d.Foods})

          film_books = col1.filter(word => word.length > 1)
          pets = col2.filter(word => word.length > 1)
          dislikes = col4.filter(word => word.length > 1)
          possessions = col3.filter(word => word.length > 1)
          foods = col5.filter(word => word.length > 1)
      };

      d3.csv('data.csv').then(categorize)
      function generator () {   
              document.getElementById("film_book").innerHTML = film_books[randNum(film_books.length)];
              document.getElementById("pet").innerHTML = pets[randNum(pets.length)];
              document.getElementById("possession").innerHTML = possessions[randNum(possessions.length)];
              document.getElementById("dislike").innerHTML = dislikes[randNum(dislikes.length)];
              document.getElementById("food").innerHTML = foods[randNum(foods.length)];
      };