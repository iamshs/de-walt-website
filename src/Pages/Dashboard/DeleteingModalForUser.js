import React from "react";

const DeleteingModalForUser = ({deleteByUser,setDeleteByUser, refetch}) => {

   const {tool,_id}  = deleteByUser
  const handleDeleteBYUser = () =>{
      fetch(`http://localhost:5000/order/${_id}`,{
          method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.deletedCount){
              setDeleteByUser(null)
              refetch()
              alert(`${tool} has deleted`)
          }
      })
  }
  return (
    <div>
      <input type="checkbox" id="delete-modal-user" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
           Are You Sure You Want to Delete {tool}!
          </h3>
          <div class="modal-action">
              <button onClick={handleDeleteBYUser} className="btn btn-xs btn-error">Delete</button>
            <label htmlFor="delete-modal-user" class="btn  btn-xs btn-primary">
             Cancel!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteingModalForUser;
