import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteToolModal from './DeleteToolModal';


const ManageProduct = () => {
  const [deleteTool,setDeleteTool] = useState(null)
    const {data:tools,isLoading,refetch} = useQuery('tools' ,()=> fetch('https://thawing-island-69083.herokuapp.com/tool').then(res=>res.json()))
   if(isLoading){
       return <Loading></Loading>
   }
    return (
        <div>
            <h2 className="text-2xl font-serif font-bold p-4">Manage All Orders Here:{tools.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Image</th>
        <th>Delete Tool</th>
      </tr>
    </thead>
    <tbody>
   {
       tools.map((t,i)=><tr>
           <th>{i+1}</th>
        <td>{t.name}</td>
        <td>
        <div class="avatar">
       <div class="w-24 rounded">
       <img src={t.img} alt='' />
       </div>
       </div>
        </td>
        <td>
        <label onClick={()=>setDeleteTool(t)} htmlFor="delete-modal-user" className="btn text-semibold btn-error btn-xs">Remove</label>
            </td>
       </tr>)
   }  
      
      
    </tbody>
  </table>
</div>
{
    deleteTool && <DeleteToolModal
    deleteTool={deleteTool}
    key={deleteTool._id}
    refetch={refetch}
    setDeleteTool={setDeleteTool}
    ></DeleteToolModal>
}
        </div>
    );
};

export default ManageProduct;