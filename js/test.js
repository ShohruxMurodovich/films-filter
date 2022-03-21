var elList = document.querySelector(".list");
var elSelect = document.querySelector(".select")

function renderFilms (arr, element){

  arr.forEach(film => {

    var newItem = document.createElement("li");
    var newHeading = document.createElement("h3");
    var newImg = document.createElement("img");
    var newText = document.createElement("p");
    var newTime = document.createElement("time");
    var newSubList = document.createElement("ul");


    for(var genre of film.genres){
      var newSubItem = document.createElement("li");
      newSubItem.textContent = genre;

      newSubList.appendChild(newSubItem);

    }


    newHeading.textContent = film.title;
    newText.textContent = film.overview.split(" ").slice(0,20).join(" ") + " ...";
    newTime.textContent = dateFormat(film.release_date);


    newItem.setAttribute("class", "list__item");
    newImg.setAttribute("src", film.poster);
    newImg.setAttribute("class", "list__img");





    newItem.appendChild(newImg);
    newItem.appendChild(newHeading);
    newItem.appendChild(newText);
    newItem.appendChild(newTime);
    newItem.appendChild(newSubList);


    element.appendChild(newItem);
  });

}





var renderGener = arr =>{

  var arrGenre = [];


  arr.forEach(film =>{
    film.genres.forEach(genre => {
      if(!arrGenre.includes(genre)){
        arrGenre.push(genre)

      }

    })
  })
  var newOption = document.createElement("option");
  newOption.textContent = renderGener
  elSelect.appendChild(newOption);

  console.log(renderGener);
}



renderFilms(films, elList);
