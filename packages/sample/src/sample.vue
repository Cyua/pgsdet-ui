<template>
  <div>
    <p class="myClass">This is a sample</p>
    <Button>elementUI Button</Button>
  </div>
</template>

<script>
    import {Button} from "elementUI"
    export default {
        name: "sample",
        components: {
          Button
        }
    }
</script>

<style scoped>
.myClass{
  color: #ddd;
}
</style>
