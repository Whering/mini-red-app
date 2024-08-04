const app = getApp();
Page({
  onShareAppMessage() {
    return {
      title: '小红书登录',
      path: 'package/API/pages/login/login',
    };
  },
  data: {
    timeout: 3000,
    hasLogin: false
  },

  onLoad() {
    this.setData({
      hasLogin: app.globalData.hasLogin
    });
  },

  login() {
    if (app.globalData.hasLogin) {
      xhs.showToast({
        title: '您已登陆'
      });
      return;
    }
    xhs.login({
      timeout: this.timeout,
      success: res => {
        app.globalData.hasLogin = true;
        this.setData({
          hasLogin: true,
        });
      },
      fail: res => {
      },
      complete: res => {
      },
    });
  },
});
