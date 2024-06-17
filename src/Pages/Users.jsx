import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json)
  //     .then((data) => setUsers(data));
  // }, [users]);
  // const showUsers = users.map((user, index) => (
  //   <tr className="border-b  odd:bg-slate-500 even:bg-slate-300 " key={index}>
  //     <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1} </td>
  //     <td className="whitespace-nowrap px-6 py-4">{user.name}</td>

  //     <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
  //     <td className="whitespace-nowrap px-6 py-4">
  //       <button onClick={() => deleteuser(user.id)} className="text-red-700">
  //         delete
  //       </button>
  //     </td>
  //   </tr>
  // ));
  // function deleteuser(id) {
  //   axios.delete(`  ${id}`)
  // }
  return (
    <div className="flex flex-col mt-11">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    First
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Last
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>{/* <tr>{showUsers}</tr> */}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
11;

export default Users;
