import fetchMock, { post } from 'fetch-mock'

const cartItems = [{
    store: '胡大宝官方旗舰店',
    imgLink: 'https://jkcdn.pajk.com.cn/image/T1jUYhBCCT1RCvBVdK?img=/rs,w_180,h_180/tf,q_70',
    itemTitle: '胡大话哈',
    itemSpec: '8片',
    price: 99,
    amount: 3
},
{
    store: '胡大宝官方旗舰店',
    imgLink: 'https://jkcdn.pajk.com.cn/image/T1jUYhBCCT1RCvBVdK?img=/rs,w_180,h_180/tf,q_70',
    itemTitle: '胡大宝抱枕',
    itemSpec: '8片',
    price: 20,
    amount: 1
},
{
    store: '胡大宝官方旗舰店',
    imgLink: 'https://jkcdn.pajk.com.cn/image/T1jUYhBCCT1RCvBVdK?img=/rs,w_180,h_180/tf,q_70',
    itemTitle: 'zhangs枕',
    itemSpec: '20片',
    price: 60,
    amount: 2
}];

//detail页面数据
fetchMock.mock('/api/details', {
    code: '2000',
    success: true,
    data: {
        store: 'u官方旗舰店',
        imgLink: 'https://jkcdn.pajk.com.cn/image/T1jUYhBCCT1RCvBVdK?img=/rs,w_180,h_180/tf,q_70',
        itemTitle: '皮卡丘',
        itemSpec: '20cm',
        price: 200,
        amount: 1
    },
    message: '商品信息查询成功'
});

// 加入购物车
fetchMock.mock({url:'/api/cart',method:'POST'}, (url, options) => {
    cartItems.push(options.body);

    return {
        code: '2000',
        success: true,
        data: cartItems,// 加入购物车不需要知道返回参数；
        message: '购物车添加成功'
    };
})

// 查询购物车
fetchMock.mock( {url:'/api/cart',method:'GET'}, {
    code: 2000,
    success: true,
    data: cartItems,
    message: '商品信息返回成功'
})

//猜你喜欢数据
fetchMock.mock('/api/cart/moreItems', {
    code: 2000,
    success: true,
    data: [
        {
            store: '胡大宝官方旗舰店',
            imgLink: 'https://jkcdn.pajk.com.cn/image/T1jUYhBCCT1RCvBVdK?img=/rs,w_180,h_180/tf,q_70',
            itemTitle: 'benge',
            itemSpec: '8片',
            price: 260,
            salesVolume: 3000
        },
        {
            store: '胡大宝官方旗舰店',
            imgLink: 'https://jkcdn.pajk.com.cn/image/T1jUYhBCCT1RCvBVdK?img=/rs,w_180,h_180/tf,q_70',
            itemTitle: 'newcity',
            itemSpec: '8片',
            price: 30,
            salesVolume: 2445
        },
        {
            store: '胡大宝官方旗舰店',
            imgLink: 'https://jkcdn.pajk.com.cn/image/T1jUYhBCCT1RCvBVdK?img=/rs,w_180,h_180/tf,q_70',
            itemTitle: 'xiyangyang',
            itemSpec: '20片',
            price: 220,
            salesVolume: 361
        }
    ],
    message: '商品信息返回成功'
})