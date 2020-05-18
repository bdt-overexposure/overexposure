<template>
  <div id="app">
    <header>
        <span class="tag-1"><div class="point"></div>{{text1}}</span>
        <span class="tag-2">{{text2}}</span>
        <span class="tag-3">{{text3}}</span>
        <span class="tag-4">{{text4}}</span>
    </header>
    <div class="page">
      <router-view name="photo" class="photo"/>
      <router-view name="content" class="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      text1: '过 曝 →',
      text2: 'screen time',
      text3: 'tags↓',
      text4: 'videos ↵'
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
header{
  width: 90vw;
  height: 8vh;
  margin: 1px auto;
  color: #000;
  font-family: "Light";
  font-size: 1.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid black 1px;
  position: flex;
  top:0;
}
.tag-1{
  position: relative;
  left:20px;
}
.point{
  position: absolute;
  left:-30px;
  width: 20px;
  height: 20px;
  background-color:black;
  border-radius: 50%;
}
.page{
  display: flex;
}
.photo{
  width: 15vw;
  margin-left: 4vw;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vh;
}
.content {
  margin-left: 20vw;
}
</style>
