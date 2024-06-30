import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const Cards = ({ item }) => {
  // console.log(item)
  const { name, image, price, recipe, _id } = item;
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { user } = useContext(AuthContext);

  const navigate=useNavigate();
  const location=useLocation();
  const handleAddToCart = (item) => {
    // console.log(item);
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        recipe,
        email: user.email,
      };
      // console.log(cartItem);
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.insertedId){
            Swal.fire({
              title: "Added to Cart",
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
              timer:1500
            });
          }

        });
    }
    else{
      Swal.fire({
        title: "Please Login",
        text: "Cannot add item without login. Do you want to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate("/signup",{state:{from:location}});
        }
      });
    }
  };

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (
    <div
      to={`/menu/${item._id}`}
      className="card shadow-xl relative mr-5 md:my-5"
    >
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-red ${
          isHeartFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="w-5 h-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt="Shoes"
            className="hover:scale-105 transition-all duration-300 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}!</h2>
        </Link>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-green">Rs </span> {item.price}
          </h5>
          <button
            className="btn bg-red text-white"
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
