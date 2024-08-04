Page({
  onShareAppMessage() {
    return {
      title: '检查登录状态是否过期',
      path: 'package/API/pages/check-session/check-session',
    };
  },

  data: {
    isAccess: '',
  },

  checkSession() {
    xhs.checkSession({
      success: msg => {
        console.log(msg);
        this.setData({
          isAccess: '已登陆'
        });
      },
      fail: msg => {
        this.setData({
          show: true,
          isAccess: '未登陆或登陆失效'
        });
      }
    });
  },
});
