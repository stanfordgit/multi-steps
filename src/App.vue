<template>
  <div class="main">
    <InviteUser/>
  </div>
</template>

<script>
   import InviteUser from "@/views/InviteUser";
   export default {
    name: 'App',
    components: {
      InviteUser
    }
  }
</script>

<style lang="scss" scoped>
  .main{
    margin: 10px;
  }
</style>