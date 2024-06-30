import React, { useContext, useState } from "react";
import UseCart from "../../hooks/UseCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const CartPage = () => {
  const [cart, refetch] = UseCart();
  const {user}=useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  

  const calculatePrice = (item) => {
    return item.price * item.quantity;
  }

  const subTotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);

  const totalOrder=subTotal;

  const handleDecrement = (item) => {
    // console.log(item._id);
   if(item.quantity>1){
    fetch(`http://localhost:5000/cart/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({quantity: item.quantity-1})
    }).then(res=>res.json()).then(data=> {
      const updatedCart = cart.map((cartItem)=> {
        if(cartItem._id===item._id){
          return {...cartItem, quantity: cartItem.quantity-1}
        }
        return cartItem;
      })
      refetch();
      setCartItems(updatedCart);
    });
    refetch();
   }else{
    alert("Quantity can't be less than 1");
   }

  }

  const handleIncrement = (item) => {
    // console.log(item._id);
    fetch(`http://localhost:5000/cart/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({quantity: item.quantity+1})
    }).then(res=>res.json()).then(data=> {
      const updatedCart = cart.map((cartItem)=> {
        if(cartItem._id===item._id){
          return {...cartItem, quantity: cartItem.quantity+1}
        }
        return cartItem;
      })
      refetch();
      setCartItems(updatedCart);
    });
    refetch();
  }
  const handleDelete =  (item) => {
    Swal.fire({
      position:"top",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${item._id}`,
        {
          method: 'DELETE'
        }
        ).then(res=> res.json()).then(data=> { 
          if(data.deletedCount>0){
            refetch();
            Swal.fire({
              position: "center",
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        })
      }
    });
    
  }

  return (
    <div className="section-container">
      <div className=" bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-24 flex flex-col items-center justify-center gap-8">
          {/* Banner text */}
          <div className="px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl text-black font-bold md:leading-snug leading-snug">
              Your <span className="text-red">Food</span> items
            </h2>
          </div>
        </div>
      </div>

      {/* Cart items */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-red text-white rounded-sm">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">
                    {item.name}
                  </td>
                  <button className="btn btn-xs"  onClick={()=>handleDecrement(item)}>-</button>
                  <input className="w-10 mx-2 text-center  overflow-hidden appearance-none" type="number" value={item.quantity}
                  onChange={()=>console.log(item.quantity)}/>
                  <button className="btn btn-xs"
                  onClick={()=>handleIncrement(item)}
                  >+</button>
                  <td>{calculatePrice(item).toFixed(2)}</td>
                  <th>
                    <button className="btn btn-xs text-red" onClick={()=>handleDelete(item)}><FaTrash/></button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details of items */}
      <div className="my-12 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2 space-y-3">
        <h3 className="font-medium">
          Customer Details
        </h3>
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <p>User_id: {user.uid}</p>
        </div>
        <div className="md:w-1/2 space-y-3">
        <h3 className="font-medium">
          Item Details
        </h3>
        <p>Total Items: {cart.length}</p>
        <p>Total Price: ${totalOrder.toFixed(2)}</p>
        <button className="btn bg-red text-white">Proceed to payment</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
