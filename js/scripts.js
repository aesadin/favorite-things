$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const movieInput = $("input#movie").val();
    const foodInput = $("input#food").val();
    const songInput = $("input#song").val();

    $("#movieSpan").text(movieInput);
    $("#foodSpan").text(foodInput);
    $("#songSpan").text(songInput);

    //const allMyFavoriteThings = ["movieInput", "foodInput", "songInput"]
  });
});