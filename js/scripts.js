$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const movieInput = $("input#movie").val();
    const foodInput = $("input#food").val();
    const songInput = $("input#song").val();
    const allMyFavoriteThings = [movieInput, foodInput, songInput];

    $("#allSpan").text(allMyFavoriteThings.toString());
    $("#movieSpan").text(movieInput);
    $("#foodSpan").text(foodInput);
    $("#songSpan").text(songInput);

  const newMovie = [allMyFavoriteThings[0]];
  const newFood = [allMyFavoriteThings[1]]
  const newSong = [allMyFavoriteThings[2]]
  //const newSong2 = [newSong.push("Formation")];

  $("#movie1").text(newMovie.toString());
  $("#food1").text(newFood.toString());
  $("#song1").text(newSong.toString(newSong.push(" Formation")));
    
  });
});