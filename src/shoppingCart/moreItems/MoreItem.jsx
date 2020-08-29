import React from 'react';

export default function MoreItems({moreItem}) {

    return (
        <div>
            <img src={moreItem.imgLink} alt="猜你喜欢主图" />
            <div className="MoreItemstitle">{moreItem.itemTitle}</div>
            <p className="price">{moreItem.price}</p>
            <p className="salesVolume">{moreItem.salesVolume}</p>
            <span className="iconfont icon-cart-full-fill" ></span>
        </div>
    )
}