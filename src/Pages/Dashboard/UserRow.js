import React from 'react';

const UserRow = ({user,index,refetch}) => {
    const {email,role} = user
    const handleMakeAdmin = ()=>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            }
        })
            .then(res => 
               res.json())
            .then(data => {
                  console.log(data)
                    refetch();
                    })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={handleMakeAdmin} class="btn btn-xs btn-primary">Make Admin</button>}</td>
            {/* <td><button onClick={handleMakeAdmin} class="btn btn-xs btn-primary">Make Admin</button></td> */}
            <td><button class="btn btn-xs btn-error">Remove User</button></td>
        </tr>
    );
};

export default UserRow;