import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteUser from "./DeleteUser";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const [deleteUser,setDeleteUser] = useState(null)
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://thawing-island-69083.herokuapp.com/user").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold p-4">
        All Users:{users.length}
      </h2>
      <div class="overflow-x-auto">
                <table class="table lg:w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user,index)=><UserRow
                           key={user._id}
                           index={index}
                           user={user}
                           refetch={refetch}
                           setDeleteUser={setDeleteUser}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
            {
              deleteUser && <DeleteUser
              deleteUser={deleteUser}
              refetch={refetch}
              setDeleteUser={setDeleteUser}
              key={deleteUser._id}
              ></DeleteUser>
            }
    </div>
  );
};

export default MakeAdmin;
