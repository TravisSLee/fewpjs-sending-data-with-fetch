// Add your code here

function renderUser(user){
    const body = document.querySelector('body');
    body.innerHTML = user[id];
};

function renderError(error){
    const body = document.querySelector('body'); 
    body.innerHTML = 'Unauthorized Access';
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
            const body = document.querySelector('body');
            console.log(object);
            body.innerHTML = object["id"];
            })
        .catch(function(error) {
            error.message = 'Unauthorized Access';
            }); 
}