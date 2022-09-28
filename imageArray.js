var images = ["https://content.presspage.com/uploads/1441/commercial-feature.png?10000",
"./img/profilepic.jpg",
"./img/profilepic.jpg",
"./img/profilepic.jpg"];


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
