import React, { useState } from 'react';

export default function CartItem({item}) {
    const [amount, setAmount] = useState(item.amount);

    return (
        <div className="itemSection">
            <span className="checkbox"></span>
            <div className="item">
                <img src={item.imgLink} alt="商品图" />
                <div className="itemInfo">
                    <div className="title">{item.itemTitle}</div>
                    <div className="specification">{item.itemSpec}</div>
                    <div className="price">{item.price}</div>
                    <div className="amount">
                        <button className="minus" onClick={()=>{setAmount(amount - 1)}}></button>
                        <input type="number" value={amount} />
                        <button className="plus" onClick={()=>{setAmount(amount + 1)}}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}