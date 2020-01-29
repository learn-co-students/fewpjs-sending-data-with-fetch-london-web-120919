// Add your code here
function submitData(userName, userEmail) {
    const formData = { 
        name: userName, 
        email: userEmail 
    }
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    }

    let getData = fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            document.body.innerHTML = object.id
         })
        .catch(function(error){
            document.body.innerHTML = error.message
        })

    return getData
}