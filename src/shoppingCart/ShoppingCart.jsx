import React, { useState, useEffect } from 'react';
import CartItem from './cartItem/CartItem'
import MoreItem from './moreItems/MoreItem'
import './shoppingCart.scss';

//页面逻辑
export default function ShoppingCart(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/api/cart').then((res) => {
            return res.json();
        }).then((result) => {
            setItems(result.data);
        })
    }, [])

    const [moreItems, setMoreItems] = useState([]);

    useEffect(() => {
        fetch('api/cart/moreItems').then((res) => {
            return res.json()
        }).then((result) => {
            setMoreItems(result.data);
        })
    }, [])

    return (
        <div className="wrapper">
            <div>
                {items.map((item, index) => {
                    return <CartItem item={item} key={index} className="cartItems" />
                    // 数组中的每一项item通过props传值给CartItem组件中{item}
                })}
            </div>
            <div>
                {moreItems.map((moreItem, index) => {
                    return <MoreItem moreItem={moreItem} key={index} className="moreItems" />
                })}
            </div>
        </div>
    )
}