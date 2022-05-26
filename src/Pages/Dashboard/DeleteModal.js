import React from "react";

const DeleteModal = ({ deletingOrder,refetch,setDeletingOrder }) => {

    const {tool,_id} = deletingOrder;

    const handleDelete = () => {
        fetch(`https://thawing-island-69083.herokuapp.com/order/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    alert(`${tool} has deleted`)
                   setDeletingOrder(null)
                   refetch()
                }
            })
        }
  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-error">
            Are You Sure You want to delete {tool}!
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

export default DeleteModal;
