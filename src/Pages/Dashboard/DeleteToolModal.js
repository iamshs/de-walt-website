import React from "react";

const DeleteToolModal = ({deleteTool,refetch,setDeleteTool}) => {
   const {_id,name} = deleteTool

  const handleDelete=()=>{
      fetch(`https://thawing-island-69083.herokuapp.com/tool/${_id}`,{
          method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          setDeleteTool(null)
          refetch()
          alert(`${name} has deleted`)
      })
  }

  return (
    <div>
    <input type="checkbox" id="delete-modal-user" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg">
         Are You Sure You Want to Delete {name} !
        </h3>
        <div class="modal-action">
            <button onClick={handleDelete} className="btn btn-xs btn-error">Delete</button>
          <label htmlFor="delete-modal-user" class="btn  btn-xs btn-primary">
           Cancel!
          </label>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DeleteToolModal;
