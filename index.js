// Add your code here
function submitData(name, email){
    let dataToSend = {
        name: name,
        email: email
    }
    const configurationObject = {
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(dataToSend)
    }
    return fetch("http://localhost:3000/users", configurationObject)
            .then(promise => promise.json())
            .then(data => document.body.innerText = data["id"])
            .catch(error => document.body.innerHTML = error.message)
}

submitData()