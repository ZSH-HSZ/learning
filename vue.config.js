module.exports = {
  devServer: {
      proxy: {
        '/apis': {
          target: 'https://x.isvbot.com', //对应自己的接口
          changeOrigin: true,
        }
      },
      disableHostCheck: true
  }
};
