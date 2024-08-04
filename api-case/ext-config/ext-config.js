Page({
  data: {
    config: ''
  },

  getExtConfig() {
    xhs.getExtConfig({
      success: res => {
        this.setData({
          content: JSON.stringify(res)
        });
      },
      fail: res => {
      }
    });
  },
  getExtConfigSync() {
    const data = xhs.getExtConfigSync();
    this.setData({
      content: JSON.stringify(data)
    });
  },
});
