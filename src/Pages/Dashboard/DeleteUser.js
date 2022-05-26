import React from 'react';

const DeleteUser = ({deleteUser,refetch,setDeleteUser}) => {
const {_id,email} = deleteUser
   const handleDelete = event =>{
      fetch(`https://thawing-island-69083.herokuapp.com/user/${_id}`,{
          method:'DELETE',
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          setDeleteUser(null)
          refetch()
      })
   }

    return (
        <div>
           <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-error">
            Are You Sure You want to delete {email} !
          </h3>
          <p class="py-4">
           If You delete once it will be removed from order list!
          </p>
          <div class="modal-action">
          <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
            <label for="delete-modal" className="btn btn-xs btn-primary">
              Cancel
            </label>
          </div>
        </div>
      </div>  
        </div>
    );
};

export default DeleteUser;