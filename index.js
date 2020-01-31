// Add your code here
// let formData = {
//     name,
//     email
// };

// function submitData(formData) {
//     return fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(formData)
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
//         .catch(function (error) {
//             alert("Bad Things!");
//             console.log(error.message);
//         })
// }
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (object) {
            document.body.innerHTML = object["id"]
        })
        .catch(function (error) {
            document.body.innerHTML = error.message
        })
}