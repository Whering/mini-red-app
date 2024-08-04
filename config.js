module.exports = {
  component: [
    {
      icon: '../../image/biaodanzujian.png',
      name: '表单组件',
      open: false,
      list: [
        {
          subName: '按钮',
          subNameTra: 'button',
          id: 'button'
        },
        {
          subName: '开关',
          subNameTra: 'switch',
          id: 'switch'
        },
        {
          subName: '单项/多项选择器',
          subNameTra: 'checkbox',
          id: 'checkbox'
        },
        {
          subName: '输入框',
          subNameTra: 'input',
          id: 'input'
        },
        {
          subName: '滚动选择器',
          subNameTra: 'picker-view',
          id: 'picker-view'
        },
        {
          subName: '滑动选择器',
          subNameTra: 'slider',
          id: 'slider'
        },
        {
          subName: '表单',
          subNameTra: 'form',
          id: 'form'
        },
        {
          subName: '底部弹起的滚动选择器',
          subNameTra: 'picker',
          id: 'picker'
        },
        {
          subName: '富文本编辑器',
          id: 'editor',
          subNameTra: 'editor'
        }
      ]
    },

    {
      icon: '../../image/jichuneirong.png',
      name: '基础内容',
      open: false,
      list: [
        {
          subName: '图标',
          subNameTra: 'icon',
          id: 'icon'
        },
        {
          subName: '进度条',
          subNameTra: 'progress',
          id: 'progress'
        },
        {
          subName: '文本',
          subNameTra: 'text',
          id: 'text'
        }
      ]
    },

    {
      icon: '../../image/meituzujian.png',
      name: '媒体组件',
      open: false,
      list: [
        {
          subName: '图片',
          subNameTra: 'image',
          id: 'image'
        },
        {
          subName: '视频',
          subNameTra: 'video',
          id: 'video'
        },
      ]
    },

    {
      icon: '../../image/dituzujian.png',
      name: '地图组件',
      open: false,
      list: [
        {
          subName: '地图',
          subNameTra: 'map',
          id: 'map'
        }
      ]
    },

    {
      icon: '../../image/shiturongqi.png',
      name: '视图容器',
      open: false,
      list: [
        {
          subName: '基础视图',
          subNameTra: 'view',
          id: 'view'
        },
        {
          subName: '可移动视图容器',
          subNameTra: 'movable-area',
          id: 'movable-area'
        },
        {
          subName: '可滚动视图区域',
          subNameTra: 'scroll-view',
          id: 'scroll-view'
        },
        {
          subName: '滑块视图容器',
          subNameTra: 'swiper',
          id: 'swiper'
        },
      ]
    },

    {
      icon: '../../image/daohangzujian.png',
      name: '导航组件',
      open: false,
      list: [
        {
          subName: '页面导航',
          subNameTra: 'navigator',
          id: 'navigator'
        },
      ]
    },

    {
      icon: '../../image/kaifangnengli.png',
      name: '开放能力',
      open: false,
      list: [
        {
          subName: '网页容器',
          subNameTra: 'webview',
          id: 'webview'
        },
        {
          subName: '模版引用',
          subNameTra: 'template',
          id: 'template'
        },
        {
          subName: '手势和动画事件',
          subNameTra: 'event',
          id: 'event'
        },
        {
          subName: 'include引用',
          subNameTra: 'include',
          id: 'include'
        },
        {
          subName: '事件消息队列',
          id: 'event-message-queue'
        }
      ]
    },

    {
      icon: '../../image/daohangzujian.png',
      name: '自定义组件',
      open: false,
      list: [
        {
          subName: '组件通信与事件',
          subNameTra: 'component-communication',
          id: 'component-communication'
        }, 
      ]
    }
  ],
  api: [
    {
      icon: '../../image/jichu.png',
      name: '基础',
      open: false,
      list: [
        {
          subName: '检测api能力',
          id: 'caniuse'
        },
        {
          subName: '获取设备系统信息',
          id: 'get-system-info'
        }, 
        {
          subName: '检测小程序更新',
          id: 'mp-update'
        },
      ]
    }, 

    {
      icon: '../../image/luyou.png',
      name: '路由',
      open: false,
      list: [
        {
          subName: '页面跳转',
          id: 'navigator'
        }
      ]
    }, 
    {
      icon: '../../image/jiemian.png',
      name: '界面',
      open: false,
      list: [
        {
          subName: '显示加载提示框',
          id: 'loading'
        }, 
        {
          subName: '显示消息提示框',
          id: 'toast'
        }, 
        {
          subName: '操作菜单',
          id: 'action-sheet'
        }, 
        {
          subName: '显示模态弹窗',
          id: 'modal'
        }, 
        {
          subName: '设置tabBar状态',
          id: 'set-tab-bar-item'
        },
        {
          subName: '设置tabBar样式',
          id: 'set-tab-bar-style'
        },
        {
          subName: '设置导航栏颜色',
          id: 'set-navigation-bar-color'
        }, 
        {
          subName: '设置导航栏标题',
          id: 'set-navigation-bar-title'
        }, 
        {
          subName: '下拉刷新',
          id: 'pull-down-refresh'
        }, 
        {
          subName: '创建动画',
          id: 'animation'
        }, 
        {
          subName: '获取菜单按钮布局信息',
          id: 'menu-button'
        }, 
      ]
    }, 

    {
      icon: '../../image/wangluo.png',
      name: '网络',
      open: false,
      list: [
        {
          subName: '发起请求',
          id: 'request'
        }, 
        {
          subName: '上传文件',
          id: 'upload-file',
          show: 'not'
        }, 
        {
          subName: '下载文件',
          id: 'download-file'
        }, 
      ]
    }, 
    {
      icon: '../../image/shujuhuancun.png',
      name: '数据缓存',
      open: false,
      list: [
        {
          subName: '数据存储',
          id: 'storage'
        },
        {
          subName: '异步数据存储',
          id: 'storage-async'
        }
      ]
    }, 

    {
      icon: '../../image/meiti.png',
      name: '媒体',
      open: false,
      list: [
        {
          subName: '图片',
          id: 'image'
        }, 
        {
          subName: '视频',
          id: 'video',
          show: 'no'
        }, 
      ]
    }, 

    {
      icon: '../../image/weizhi.png',
      name: '位置',
      open: false,
      list: [
        {
          subName: '获取位置',
          id: 'get-location'
        },
        {
          subName: '地图控制',
          id: 'map'
        }, 
      ]
    }, 

    {
      icon: '../../image/kaifangjiekou.png',
      name: '开放接口',
      open: false,
      list: [
        {
          subName: '登录',
          id: 'login'
        },
        {
          subName: '检验登陆态',
          id: 'check-session'
        },
        {
          subName: '支付',
          id: 'request-payment'
        }, 
        {
          subName: '分享',
          id: 'share'
        },
        {
          subName: '授权设置',
          id: 'setting'
        }, 
        {
          subName: '选择收货地址',
          id: 'choose-address'
        }, 
        {
          subName: '  获取用户信息',
          id: 'get-user-info'
        }, 
        {
          subName: '  获取账号信息',
          id: 'get-account-info-sync'
        }, 
        {
          subName: '节点查询',
          id: 'query'
        },
        {
          subName: '监听节点',
          id: 'observer'
        },
        {
          subName: 'webview的sdk接口',
          id: 'webview'
        },
        {
          subName: '生命周期',
          id: 'lifetime'
        }
      ]
    }, 

    {
      icon: '../../image/shebei.png',
      name: '设备',
      open: false,
      list: [
        {
          subName: '剪贴板',
          id: 'clipboard-data'
        }, 
        {
          subName: '获取手机网络类型',
          id: 'get-network-type'
        },
        {
          subName: '拨打电话',
          id: 'make-phone-call'
        },
        {
          subName: '扫码',
          id: 'scan-code'
        }, 
      ]
    }, 
    {
      icon: '../../image/sanfangpingtai.png',
      name: '第三方平台',
      open: false,
      list: [
        {
          subName: '获取第三方数据',
          id: 'ext-config'
        }
      ]
    },
  ],
  requestUrl: "https://e.xiaohongshu.com/"
};