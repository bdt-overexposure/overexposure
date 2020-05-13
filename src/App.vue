<template>
  <div id="app">
    <!-- Left side -->
    <div id="left">
      <header id="header">
        <div class="demo">Demo</div>
        <div class="black">Black</div>
      </header>
        <router-view/>
    </div>
    <!-- Right side -->
    <div id="right">
      <header id="sub-header">
        <div class="white">white</div>
      </header>
      <!-- Actual resize handle -->
      <div id="handle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {}
  },
  components: {},
  mounted () {
    $(function () {
      // eslint-disable-next-line one-var
      var isResizing = false
      // eslint-disable-next-line no-unused-vars
      var lastDownX = 0
      // eslint-disable-next-line one-var
      var container = $('#app'), left = $('#left'), right = $('#right'), handle = $('#handle'), header = $('header'), subHeader = $('#sub-header')
      handle.on('mousedown', function (e) { isResizing = true; lastDownX = e.clientX })
      $(document).on('mousemove', function (e) {
        if (!isResizing) return
        var offsetRight = container.width() - (e.clientX - container.offset().left)
        left.css('right', offsetRight)
        right.css('width', offsetRight)
        header.css('right', offsetRight)
        subHeader.css('width', offsetRight - 20)
      }).on('mouseup', function (e) { isResizing = false })
    })
  }
}
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  /* Disable selection so it doesn't get annoying */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: moz-none;
  -ms-user-select: none;
  user-select: none;
}

#left {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0px;
  background: black;
  color: white;
  overflow: scroll;
  max-width: 70vw;
  min-width: 30vw;
}

#right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: white;
  min-width: 30vw;
  max-width: 70vw;
  overflow: scroll;
}

#handle {
  position: absolute;
  left: -4px;
  top: 0;
  width: 15px;
  cursor: ew-resize;
  background-color: gray;
  height: 5000px;
  z-index: 100;
}
#header {
  min-width: 28.5vw;
  max-width: 69vw;
  height: 20px;
  /* Safari for macOS & iOS */
  -webkit-backdrop-filter: blur(15px);
  /* Google Chrome */
  backdrop-filter: blur(15px);
  /* 设置背景半透明黑色 */
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  display: flex;
  left: 0;
  right: 30vw;
  top: 0;
  padding: 10px;
  justify-content: center;
  align-items: center;
  z-index: 99;
  color: #000;
}
#sub-header {
  min-width: 28.5vw;
  max-width: 68vw;
  height: 20px;
  /* Safari for macOS & iOS */
  -webkit-backdrop-filter: blur(15px);
  /* Google Chrome */
  backdrop-filter: blur(15px);
  /* 设置背景半透明黑色 */
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  top: 0;
  right: 0 !important;
  padding: 10px;
  justify-content: center;
  align-items: center;
  color: white;
}
.demo {
  position: absolute;
  left: 10px;
}
.black {
  position: absolute;
  right: 10px;
}
.white {
  position: absolute;
  left: 10px;
}
</style>
