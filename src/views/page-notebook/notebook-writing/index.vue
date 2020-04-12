<template>
  <div class="notebook-writing">
    <layout>
      <sider><svg-icon :inputIconName="'user'"></svg-icon></sider>
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
