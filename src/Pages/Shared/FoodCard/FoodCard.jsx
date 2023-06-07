import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCard from "../../../hooks/useCard";


const FoodCard = ({item}) => {
    const {user} = useContext(AuthContext)
    const [, refetch] = useCard()
    const {name, image, price, recipe, _id} = item
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = (item) =>{
        console.log(item);
        if(user && user.email){
            const cartItems = {
                itemId : _id,
                name,
                image,
                price,
                email : user.email
            }
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItems)
            })
            .then(res => res.json())
            .then(data=>{
                if(data.insertedId){
                    refetch() //cart update with add to cart btn click
                    Swal.fire({
                        icon: 'success',
                        title: 'product added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Are you sure?',
                text: "Please login first for add to card!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state : {form : location}})
                }
              })
        }
    }

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
                <img className="w-full rounded-xl" src={image} alt="Shoes" />
                <span className="absolute inline-block right-5 bg-gray-600 px-5 text-white top-5">{price}</span>    
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button onClick={() =>handleAddToCart(item)} className="btn btn-primary">Add to card</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FoodCard;