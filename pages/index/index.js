var app = getApp()
Page({
  data: {
    ballBottom: 240,
    ballRight: 120,
    screenHeight: 0,
    screenWidth: 0,
  },
  onLoad: function () {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });
  },
  ballMoveEvent: function (e) {
    console.log('我被拖动了....')
    var touchs = e.touches[0];
    var pageX = touchs.pageX;
    var pageY = touchs.pageY;
    console.log('pageX: ' + pageX)
    console.log('pageY: ' + pageY)
    if (pageX < 30) return;
    if (pageX > this.data.screenWidth - 30) return;
    if (this.data.screenHeight - pageY <= 30) return;
    if (pageY <= 30) return;
    var x = this.data.screenWidth - pageX - 30;
    var y = this.data.screenHeight - pageY - 30;
    console.log('x: ' + x)
    console.log('y: ' + y)
    this.setData({
      ballBottom: y,
      ballRight: x
    });
  },
  ballClickEvent: function () {
    console.log('点击了....')
  }
})