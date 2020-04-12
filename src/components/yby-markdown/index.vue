<template>
  <div>
    <div class="markdown">
      <MarkdownPro :theme=theme :bordered="false" />
    </div>
  </div>
</template>

<script>
  import { MarkdownPro } from 'vue-meditor';
  export default {
    name: 'YBYMarkdown',
    data: function () {
      return {
        theme: 'oneDark'
      };
    },
    prop: {
      theme: {
        type: String,
        default: 'dark'
      }
    },
    components: {
      MarkdownPro
    },
    computed: {

    }
  };
</script>

<style scoped>

</style>
