// Add your code here

function renderUser(user){
    const body = document.querySelector('body');
    const h2 = document.createElement('h2');
    h2.innerHTML = user.id;
    body.appendChild(h2);
};

function renderError(error){
    const body = document.querySelector('body');
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Unauthorized Access';
    body.appendChild(h2);
};

function submitData(name, email){

    let anObj = {};
    anObj.name = name;
    anObj.email = email;
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(anObj)
    };

    fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
            })
        .then(function(object) {
            renderUser(object);
            })
        .catch(function(error) {
            renderError(error);
            }); 
}