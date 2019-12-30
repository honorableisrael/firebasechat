<template>
  <PrivateChat/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PrivateChat from '../views/PrivateChat.vue';

@Component({
  components: {
    PrivateChat,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>