Page({
  onShareAppMessage() {
    return {
      title: '获取手机网络状态',
      path: 'packageAPI/pages/get-network-type/get-network-type',
    };
  },

  data: {
    hasNetworkType: false,
  },
  getNetworkType() {
    const that = this;
    xhs?.getNetworkType({
      success(res) {
        console.log(res);
        that.setData({
          hasNetworkType: true,
          networkType: res.subtype || res.networkType,
        });
      },
    });
  },
  clear() {
    this.setData({
      hasNetworkType: false,
      networkType: '',
    });
  },
});
