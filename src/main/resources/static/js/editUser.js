//попытка -не пытка
// async function fillEditModal(modal, id) {
//     let oneUser = await fetch('/get_user/' + id, {
//         method: "GET"
//     });
//
//     if (oneUser.ok) {
//         let user = await oneUser.json();
//
//         modal.find('.modal-title').html('Edit user');
//
//         let editButton = `<button class="btn btn-info" id="editButton">Edit</button>`;
//         let closeButton = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
//         modal.find('.modal-footer').append(editButton);
//         modal.find('.modal-footer').append(closeButton);
//
//         let bodyForm = `
//             <form class="form-group text-center" id="editUser">
//                <div class="form-group">
//                     <label for="userId" class="col-form-label">ID</label>
//                     <input type="text" class="form-control username" id="userId" value="${user.userId}" readonly>
//                </div>
//
//                <div class="form-group">
//                     <label for="username" class="col-form-label">Username</label>
//                     <input type="text" class="form-control username" id="username" value="${user.username}">
//                </div>
//
//                 <div class="form-group">
//                     <label for="password" class="com-form-label">Password</label>
//                     <input type="password" class="form-control" id="password" value="${user.password}">
//                 </div>
//
//                 <div class="form-group">
//                     <label for="name" class="com-form-label">Name</label>
//                     <input type="text" class="form-control" id="name" value="${user.name}">
//                 </div>
//
//                 <div class="form-group">
//                     <label for="email" class="com-form-label">Email</label>
//                     <input type="text" class="form-control" id="email" value="${user.email}">
//                 </div>
//
//                 <div class="form-group">
//                     <label for="roles" class="com-form-label">Role</label>
//                     <select multiple id="roles" size="2" class="form-control" style="max-height: 100px">
//                         <option value="ROLE_USER">USER</option>
//                         <option value="ROLE_ADMIN">ADMIN</option>
//                     </select>
//                 </div>
//             </form>
//         `;
//         modal.find('.modal-body').append(bodyForm);
//
//         $("#editButton").on('click', async () => {
//             let checkedRoles = () => {
//                 let array = [];
//                 let options = document.querySelector('#roles').options;
//                 for (let i = 0; i < options.length; i++) {
//                     if (options[i].selected) {
//                         array.push(checkedRoles()[i]); // Assuming roleList is defined elsewhere
//                     }
//                 }
//                 return array;
//             };
//             let userId = modal.find("#userId").val().trim();
//             let username = modal.find("#username").val().trim();
//             let password = modal.find("#password").val().trim();
//             let email = modal.find("#email").val().trim();
//             let data = {
//                 userId: userId,
//                 username: username,
//                 password: password,
//                 email: email,
//                 roles: checkedRoles()
//             };
//
//             const response = await oneUser.updateUser(data, id); // Assuming userFetch is defined elsewhere
//
//             if (response.ok) {
//                 await getUsers(); // Assuming getUsers is defined elsewhere
//                 modal.modal('hide'); // Fixed modal closing
//             } else {
//                 let body = await response.json();
//                 let alert = `<div class="alert alert-danger alert-dismissible fade show col-12" role="alert" id="messageError">
//                             ${body.info}
//                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                                 <span aria-hidden="true"></span>
//                             </button>
//                         </div>`;
//                 modal.find('.modal-body').prepend(alert);
//             }
//         });
//     } else {
//         // Handle error if oneUser response is not ok
//     }
// }
