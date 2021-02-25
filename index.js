// Add your code here

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
            console.log(object);
            })
        .catch(function(error) {
            alert('Unauthorized Access');
            console.log(error.message);
            }); 
}