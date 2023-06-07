import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const {data : users = [], refetch} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleRole = (user) =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
           
            if(data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    icon: 'success',
                    title: `${user.name} is admin successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
        })
    }

    const handleDelete = (user) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount === 1){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            `${user.name} is deleted successfully`,
                            'success'
                        )
                    }
                })
              
            }
          })
        
    }

    return (
        <div className="w-full">
            <h3 className="text-3xl">All Users {users.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                   
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user,index)=> <tr
                            key={user._id}
                        >
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role == 'admin' ? 'admin' : <button onClick={() => handleRole(user)} className="btn bg-slate-600 text-white"><FaUserShield></FaUserShield></button>}</td>
                            <td>
                                <button onClick={() => handleDelete(user)} className="btn bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;