<template>
  <div class="notebook-writing">
    <layout>
      <sider>aaa <svg-icon customized-class="icon-user2" class="icon-user" icon-class="user" ></svg-icon></sider>
      <content>
        <YBYMarkdown></YBYMarkdown>
      </content>
    </layout>
  </div>
</template>

<script>
  import YBYMarkdown from '@comp/yby-markdown/index.vue';
  export default {
    name: 'Notebook',
    components: {
      YBYMarkdown
    }
  };
</script>

<style scoped>

</style>
