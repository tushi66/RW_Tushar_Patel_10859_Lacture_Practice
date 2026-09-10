import React from "react";
import { useState } from "react";
import { useCallback, useMemo } from "react";

const Callback = () => {

    const [item, setItem] = useState([
        { id: 1, name: 'Apple', price: 100, qauntity: 5 },
        { id: 2, name: 'Orange', price: 150, qauntity: 10 },
        { id: 3, name: 'Banana', price: 50, qauntity: 8 },
        { id: 4, name: 'Graps', price: 200, qauntity: 25 },
        { id: 5, name: 'Kiwi', price: 400, qauntity: 15 }
    ])

    const [discount, SetDiscount] = useState(10);

    const toatlPrice = useMemo(()=>{
        console.log("calcualtion updatedd...");

        const subtotal = item.reduce((sum,item) => sum + (item.price * item.qauntity),0 )
        return subtotal - (subtotal * discount /100)

    }, [item, discount])


    const addItem = useCallback((newItem) => {
        setItem(prev => [...prev, newItem])
    })

    const removeItem = useCallback((id) => {
        setItem(prev => prev.filter((item) => item.id !== id))
    }, [])

    return (


        <>


            <div>
                <h2 className='text-4xl text-center p-4 bg-red-500 text-white'>Shopping Cart</h2>
                <ul className='bg-blue-400 max-w-3xl mx-auto my-10 p-4 text-white'>
                    {
                        item.map(item => (
                            <li key={item.id} className='bg-red-500 my-2 p-2 flex justify-evenly'>
                                <p>
                                    {item.name} - ${item.price} x {item.qauntity}
                                </p>
                                <button className='bg-gray-400 p-2' onClick={() => removeItem(item.id)}>Remove</button>
                            </li>
                        ))
                    }
                </ul>
                <div className='bg-red-400 max-w-3xl mx-auto my-10 text-2xl p-4'>
                    <h3>Total : ${toatlPrice.toFixed(2)}</h3>
                    <p>Discount : {discount}%</p>

                    <button className='bg-gray-400 p-2' onClick={() => SetDiscount(prev => prev + 5)}>Increase Discount</button>
                </div>
            </div>
</>



)
}

export default Callback;