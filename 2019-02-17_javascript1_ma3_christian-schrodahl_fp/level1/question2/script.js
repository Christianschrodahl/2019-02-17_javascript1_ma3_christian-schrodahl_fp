//Console.log out elements in JSON file
video = [{ "id": 12312412312, "name": "Ecuaciones Diferenciales", "url": "/video/math/edo/12312412312", "author": { "data": [{ "name_author": "Alejandro Morales", "url": "/author/alejandro-morales", "type": "master" }] } }];

for (var property in video) {
  console.log (video[property].id);    
  console.log (video[property].name);
  console.log (video[property].url);

  var authorData = video[property].author.data;

  for(var dataProperty in authorData){
    console.log (authorData[dataProperty].name_author);
    console.log (authorData[dataProperty].url);
    console.log (authorData[dataProperty].type);
  }            
}
