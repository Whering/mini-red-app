Page({
  onShareAppMessage() {
    return {
      title: 'menu-button',
      path: 'api-case/menu-button/menu-button',
    };
  },
  data: {
    context: ''
  },


  getMenuButtonBoundingClientRect() {
    const res = xhs.getMenuButtonBoundingClientRect();

    if (res.errMsg) {
      xhs.showToast({
        title: `调用失败：${res.errMsg}`,
        duration: 2000
      });
      return; 
    }

    this.setData({
      content: JSON.stringify(res)
    });
  },
});
