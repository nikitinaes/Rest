// const urlPost = "/users/add"
// const newUserForm = document.getElementById("addForm")
// document.getElementById("addForm")
//     .addEventListener("submit", (e) => {
//         e.preventDefault()
//         let nameRole = document.getElementById("rolesCreate")
//         let listRoles = []
//         let roleValue = ""
//         for (let i = 0; i < nameRole.options.length; i++) {
//             if (nameRole.options[i].selected) {
//                 listRoles.push({
//                     id: nameRole.options[i].value,
//                     role: "ROLE_" + nameRole.options[i].innerHTML
//                 })
//                 roleValue += nameRole.options[i].innerHTML + ''
//             }
//         }
//         fetch(urlPost, {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify({
//                 username: document.getElementById("usernameCreate").value,
//                 password: document.getElementById("passwordCreate").value,
//                 email: document.getElementById("emailCreate").value,
//                 roles: listRoles
//             })
//         }).then(() => {
//             newUserForm.reset()
//         })
//         document.getElementById("adminTable").click()
//     })
//------------
// var selectedRow = null
//
// function onFormSubmit() {
//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         else
//             updateRecord(formData);
//         resetForm();
//     }
// }
//
// function readFormData() {
//     var formData = {};
//     formData["name"] = document.getElementById("usernameCreate").value;
//     formData["password"] = document.getElementById("passwordCreate").value;
//     formData["email"] = document.getElementById("emailCreate").value;
//     formData["roles"] = document.getElementById("rolesCreate").value;
//     return formData;
// }
// // ------------------
function readFormData() {
    const formData = {};
    formData["Username"] = document.getElementById("usernameCreate").value;
    formData["Password"] = document.getElementById("passwordCreate").value;
    formData["Email"] = document.getElementById("emailCreate").value;
    formData["Role"] = document.getElementById("rolesCreate").value;
    return formData;
}
async function postData(url ='/users/add', data = readFormData()) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "same-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

postData('/users/add', { answer: 42 }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
});
//
// //--------
//
