Page({
  onShareAppMessage() {
    return {
      title: 'get-account-info-sync',
      path: 'package/API/pages/get-account-info-sync/get-account-info-sync',
    };
  },

  data: {
    ret: '',
    content: '',
  },

  getAccountInfoSync() {
    const ret = xhs?.getAccountInfoSync();
    this.setData({ ret: JSON.stringify(ret) });
    console.log('ret', ret);
  },
});
