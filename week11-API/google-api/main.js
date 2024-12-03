var bookList = document.getElementById("bookList");
var key = "AIzaSyCWTtBAgOnxDB46IZNrYa6dTKZdFRFjIUw";
var url = "https://www.googleapis.com/books/v1/volumes?q=alchemist&key=";


// initiate an API request to the URL with the credential
fetch(url + key).then(function(response) {
  //console.log(response);
  return response.json();
})
.then(function(data){
  console.log(data);

  data.items.forEach(function(item){
    var title = item.volumeInfo.title;
    var author = item.volumeInfo.authors[0];
    var link = item.volumeInfo.canonicalVolumeLink;
    if (item.volumeInfo.hasOwnProperty("imageLinks")) {
      var image = item.volumeInfo.imageLinks.smallThumbnail;
    }

    var newItem =
      "<li><h2>" +
      title +
      "</h2>" +
      author +
      "<br>" +
      "<a href='" +
      link +
      "'>" +
      link +
      "</a><br>";
    if (item.volumeInfo.hasOwnProperty("imageLinks")) {
      newItem += "<img src='" + image + "'>";
    }
    newItem += "</li>";

    bookList.innerHTML += newItem;
  })
})