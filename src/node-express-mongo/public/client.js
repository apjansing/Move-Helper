console.log('Client-side code running');

const button = document.getElementById('search');
const search_box = document.getElementById('searchField');

let crime = null;
let water_break = null;
let lead_violations = null;
let code_violations = null;



button.addEventListener('click', function(e) {
  console.log('button was clicked');
  let search_field = document.getElementById('searchField').value.split(',');
  for(let i = 0; i < search_field.length; i = i + 1){
    search_field[i] = parseFloat(search_field[i]);
  }
  console.log(search_field)

  fetch('/crime', {method: 'GET'})
    .then(function(response, search_field) {
      if(response.ok) {
        lead_violations = response.json()
        console.log(lead_violations)
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

    fetch('/water_break', {method: 'GET'})
    .then(function(response, search_field) {
      if(response.ok) {
        lead_violations = response.json()
        console.log(lead_violations)
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

    fetch('/lead_violations', {method: 'GET'})
    .then(function(response, search_field) {
      if(response.ok) {
        lead_violations = response.json()
        console.log(lead_violations)
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

    fetch('/code_violations', {method: 'GET'})
    .then(function(response, search_field) {
      if(response.ok) {
        lead_violations = response.json()
        console.log(lead_violations)
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});


search_box.addEventListener('keypress', function(e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    console.log('button was clicked');
    let search_field = document.getElementById('searchField').value.split(',');
    for(let i = 0; i < search_field.length; i = i + 1){
      search_field[i] = parseFloat(search_field[i]);
    }
    
    fetch('/crime', {method: 'GET'})
    .then(function(response, search_field) {
      if(response.ok) {
        lead_violations = response.json()
        console.log(lead_violations)
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

    fetch('/water_break', {method: 'GET'})
    .then(function(response, search_field) {
      if(response.ok) {
        lead_violations = response.json()
        console.log(lead_violations)
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

    fetch('/lead_violations', {method: 'GET'})
    .then(function(response, search_field) {
      if(response.ok) {
        lead_violations = response.json()
        console.log(lead_violations)
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

    fetch('/code_violations', {method: 'GET'})
    .then(function(response, search_field) {
      if(response.ok) {
        lead_violations = response.json()
        console.log(lead_violations)
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
  }
});
