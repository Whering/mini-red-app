const templateMessageUrl = 'xxxxxx'

const app = getApp();

const formData = {
  address: 'T.I.T 造舰厂',
  time: '2017.01.09',
  name: '帝国歼星舰',
  serial: '123456789',
};

Page({
  onShareAppMessage() {
    return {
      title: '模板消息',
      path: 'packageAPI/pages/template-message/template-message',
    };
  },

  onLoad() {
    this.setData({
      formData,
    });
  },

  submitForm(e) {
    const self = this;
    const { formId } = e.detail;
    const formData = e.detail.value;

    console.log('form_id is:', formId);

    self.setData({
      loading: true,
    });

    app.getUserOpenId((err, openid) => {
      if (!err) {
        xhs?.request({
          url: templateMessageUrl,
          method: 'POST',
          data: {
            form_id: formId,
            openid,
            formData,
          },
          success(res) {
            console.log('submit form success', res);
            xhs?.showToast({
              title: '发送成功',
              icon: 'success',
            });
            self.setData({
              loading: false,
            });
          },
          fail({ errMsg }) {
            console.log('submit form fail, errMsg is:', errMsg);
          },
        });
      } else {
        console.log('err:', err);
      }
    });
  },
});
