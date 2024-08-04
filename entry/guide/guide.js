
Page({
  data: {
    array: [1, 2],
    goodsList: [{
      tags: ['闪电', '旋风'],
      picUrl: 'https://img14.360buyimg.com/n1/jfs/t1/60990/38/26374/53586/66ac4fe4Fccc94b38/ac5603909959dd7f.jpg',
      goodsName: 'Apple AirPods Max 苹果耳机头戴式 max无线蓝牙耳机耳麦 天蓝色 标配'
    }, {
      tags: ['闪电', '旋风'],
      picUrl: 'https://img14.360buyimg.com/n1/jfs/t1/60990/38/26374/53586/66ac4fe4Fccc94b38/ac5603909959dd7f.jpg',
      goodsName: 'Apple AirPods Max 苹果耳机头戴式 max无线蓝牙耳机耳麦 天蓝色 标配'
    }, {
      tags: ['闪电', '旋风'],
      picUrl: 'https://img14.360buyimg.com/n1/jfs/t1/60990/38/26374/53586/66ac4fe4Fccc94b38/ac5603909959dd7f.jpg',
      goodsName: 'Apple AirPods Max 苹果耳机头戴式 max无线蓝牙耳机耳麦 天蓝色 标配'
    }, {
      tags: ['闪电', '旋风'],
      picUrl: 'https://img14.360buyimg.com/n1/jfs/t1/60990/38/26374/53586/66ac4fe4Fccc94b38/ac5603909959dd7f.jpg',
      goodsName: 'Apple AirPods Max 苹果耳机头戴式 max无线蓝牙耳机耳麦 天蓝色 标配'
    }, {
      tags: ['闪电', '旋风'],
      picUrl: 'https://img14.360buyimg.com/n1/jfs/t1/60990/38/26374/53586/66ac4fe4Fccc94b38/ac5603909959dd7f.jpg',
      goodsName: 'Apple AirPods Max 苹果耳机头戴式 max无线蓝牙耳机耳麦 天蓝色 标配'
    }],
  },

  onGoodsCardClick(e) {
    const goods = e.currentTarget.dataset.value
    console.log(goods, 'lake')
    xhs.navigateTo({
      url: '/entry/detail/detail?navi=123'
    });
  }

});
