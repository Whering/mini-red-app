Page({
  data: {
    shouldUpdate: ''
  },

  handleCheckUpdate(e) {
    this.setData({
      shouldUpdate: false
    });
  },

  onLoad() {
    const updateManager = xhs.getUpdateManager();
    updateManager.onCheckForUpdate((res) => {
      xhs.showModal({
        title: '提示',
        content: JSON.stringify(res),
      });
    });
  }
});