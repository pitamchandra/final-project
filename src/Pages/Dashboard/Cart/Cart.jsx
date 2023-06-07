import { Helmet } from "react-helmet";
import SectionHeading from "../../../Components/SectionHeading";
import useCard from "../../../hooks/useCard";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const Cart = () => {
    const [cart, refetch] = useCard()
    const totalPrice = cart.reduce((sum, item) => item.price + sum,  0);
    // console.log(cart);

    const handleDelete = (id) =>{
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
                fetch(`http://localhost:5000/carts/${id}`,{
                    method: "DELETE"
                })
                .then(res=>res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })

            //   
            }
          })
    } 
    return (
        <>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
                <link rel="canonical" href="https://www.tacobell.com/"/>
            </Helmet>
            <SectionHeading subHeading='My Cart' heading="WANNA ADD MORE?"></SectionHeading>
            <div className="flex h-12 w-full justify-between items-center mb-5">
                <h1 className="text-3xl uppercase">total orders : {cart.length}</h1>
                <h1 className="text-3xl uppercase">total price : ${totalPrice}</h1>
                <button className="btn btn-sm bg-orange-400">pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        {
                            cart.map((row, index) => <tr
                                key={row._id}
                            >
                                <th>{index + 1}</th>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>{row.name}</td>
                                <td>${row.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(row._id)} className="btn bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Cart;