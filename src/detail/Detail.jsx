import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import React from 'react';
import '../iconfont/iconfont.css';
import './detail.scss';

export default function Detail(props) {
    const [count, setCount] = useState(0);
    const [itemInfo, setItemInfo] = useState({});
    const [cartItems,setCartItems] = useState([]);
    let history = useHistory();

    //页面挂载时，显示detail商品信息；
    useEffect(() => {
        fetch('/api/details').then((res) => {
            return res.json();
        }).then((data) => {
            setItemInfo(data.data);
        })
    }, [])

    //挂载时,查询购物车详情
    useEffect(() => {
        fetch('/api/cart').then((res) => {
            return res.json();
        }).then((result) => {
            setCartItems(result.data);
        })
    }, [])

    //往购物车，添加detail页面的商品
    const addToCart = () => {
        fetch('/api/cart', {
            method: 'POST',
            body: itemInfo,//上传的内容
        }).then(res => {
           return res.json()
        }).then(result => {
            return setCartItems(result.data)
        });
    }

    //操作页面购物车数量变化；
    useEffect(() => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.amount;
        })
        setCount(total);
    }, [cartItems])

    return (
        <div>
            <div>
                <img src={itemInfo.imgLink} alt="主图" />
                <p>{itemInfo.itemTitle}</p>
                <p>{itemInfo.itemSpec}</p>
                <p>{itemInfo.price}</p>
                <p>{itemInfo.amount}</p>
            </div>
            <div className="bottom-wrapper">
                <div className="bottom-bar">
                    <a className="navbar">
                        <i className="iconfont icon-shop"></i>
                        <p>店铺</p>
                    </a>
                    <a className="navbar" onClick={() => { history.push('/shoppingCart') }}>
                        <i className="iconfont icon-cart-full-fill"></i>
                        <p>购物车</p>
                        <p className="dot">{count}</p>
                    </a>
                    <button onClick={addToCart}>加入购物车</button>
                    <button >立即购买</button>
                </div>
            </div>
        </div>
    )
}