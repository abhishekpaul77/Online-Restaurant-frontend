import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const UseCart = () => {
    const {user}=useContext(AuthContext);
    const {refetch,data:cart=[]}=useQuery({
        queryKey:['cart',user?.email],
        queryFn: async () => {
            const req=await fetch(`https://online-restaurant-backend.onrender.com/cart?email=${user?.email}`);
            return req.json();
          },
    })

  return [cart,refetch];
}

export default UseCart
