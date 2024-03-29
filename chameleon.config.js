
// 设置静态资源的线上路径
const publicPath = '//www.mqcms.net/';
// 设置api请求前缀
const apiPrefix = 'https://api.mqcms.net';

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  enableLinter: false,
  // platforms: ["web","weex","wx","alipay","baidu"],
  platforms: ["web","wx"],
  check: {
    enable: true,
    enableTypes: ["Object", "Array", "Nullable"]
  },
  buildInfo: {
    wxAppId: 'wx8939e147dd55e3ec'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

