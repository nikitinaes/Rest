function deleteUser(id) {
    function setSuccessMessage() {
        console.log("Deleted")
        fillTable();
    }

    fetch('/users/delete/'+id,  {
        method: "DELETE" }).then((res)=>res.json())
        .then(
            (response)=>{
                setSuccessMessage(response.message);
            }
        )
}

