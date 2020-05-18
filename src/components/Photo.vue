<template>
  <div>
      <div class="png1">
        <img :src="png1">
      </div>
            <div class="png1">
        <img :src="png2">
      </div>
            <div class="png1">
        <img :src="png3">
      </div>
            <div class="png1">
        <img :src="png4">
      </div>

  </div>
</template>

<script>
export default {
  name: 'Photo',
  data () {
    return {
      png1: require('../assets/1.png'),
      png2: require('../assets/2.png'),
      png3: require('../assets/3.png'),
      png4: require('../assets/4.png')
    }
  },
  components: {

  }
}
</script>

<style scoped>
img{
  width: 7vw;
  padding: 20px;
}
</style>
