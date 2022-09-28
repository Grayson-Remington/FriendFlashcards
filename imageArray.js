var images = ["https://content.presspage.com/uploads/1441/commercial-feature.png?10000",
"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2330.png",
"https://m.media-amazon.com/images/M/MV5BOGRjM2QxN2YtYWZiYy00MjFmLWJhNjUtYjg3NWQ2MWE2MGY1XkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_.jpg",
"https://i.ytimg.com/vi/QrR_gm6RqCo/maxresdefault.jpg"];


let names = ["Jake", "Tom", "Asher", "Mac"]
var index = 0;
function makeImage() {
   var img = document.createElement('img')
   img.src = images[index];
   img.alt = "nothing";
   document.getElementById('content').appendChild(img);
}

function nextImage(){
   var img = document.getElementById('content').getElementsByTagName('img')[0]
   index++;
   index = index % images.length; 
   img.src = images[index];
   
}

function makeNames() {
   var h1 = document.createElement('h1')
   h1.innerHTML = names[index];
   document.getElementById('names').appendChild(h1);
}

function nextNames(){
   var h1 = document.getElementById('names').getElementsByTagName('h1')[0]
   
   h1.innerHTML = names[index];
   
}
