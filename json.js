var response = null;
var followers = null;

document.getElementsByTagName('button')[0].addEventListener('click', function(r){
  getUser(document.getElementsByTagName('input')[0].value);
})

function getUser(name){
  fetch('https://api.github.com/users/' + name)
  .then(function(r){
    //converts response object to json
    return r.json();
  })
  .then(function(j){
    response = j;
    assignValues();
    getFollowers(j.followers_url);
  })
}

function assignValues(){
  document.getElementById('loader').style = 'display: none'
  document.getElementById('username').innerText = response.login;
  document.getElementById('avatar').src = response.avatar_url;
  document.getElementById('realname').innerText = response.name;
  document.getElementById('location').innerText = response.location;
  document.getElementById('bio').innerText = response.bio;
  document.getElementById('numfollowers').innerText = 'Followers' + response.followers;
}

function getFollowers(url){
  fetch(url)
    .then(function(r){
      return r.json();
    })
    .then(function(f){
      followers = f;
      listFollowers(followers);
    })
}

function listFollowers(followers){
  followers.forEach(function(f){
    var li = document.createElement('li');
    li.innerHTML = '<a href="' + f.html_url + '"/>'
      + '<img src = "' + f.avatar_url + '" alt = "' + f.login + '"/>'
      + '</a>';
    document.getElementById('list').appendChild(li);

  })
}
