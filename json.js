
document.getElementsByTagName('button')[0].addEventListener('click', function(r){
  getUser(document.getElementsByTagName('input')[0].value);
})

function getUser(name){
  fetch('https://images-api.nasa.gov/search?keywords=' + name)
  .then(function(r){
    return r.json();    //converts response object to json
  })
   .then(function(j){
     reset();
     if ((j.collection.items).length != 0){
       var limit_ten = [];
       for (i=0;i<10;i++){
         limit_ten.push(j.collection.items[i]);
       }
       assignValues(limit_ten);
     }
     else{
       errorHandle();
     }
  })
}

function reset() {
  document.getElementById('loader').style = 'display: none';
  document.getElementById('list').innerHTML = '';
}

function assignValues(ten_results){
  console.log(ten_results);
  ten_results.forEach(function(f){
    if(f){
      var li = document.createElement('li');
      if (f.links){
        var image = f.links[0].href;
      }
      else{
        var image = f.href;  //janky error handleing
      }
      var title = f.data[0].title;
      var date_created = f.data[0].date_created;
      var description = f.data[0].description;
      li.innerHTML =  '<h3>'+title+'</h3>'
      + '<img src = "' + image + '" />'
      + '<p><strong>' + date_created +'</strong><br>' + description + '</p>';
      document.getElementById('list').appendChild(li);
    }
   })
 }

 function errorHandle(){
   var li = document.createElement('li');
   li.innerHTML =  '<h3>oops...try again!</h3>';
   document.getElementById('list').appendChild(li);
 }
