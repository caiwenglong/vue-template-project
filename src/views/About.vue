<template>
  <div class="about">
    <h1>This is an about page</h1>
    <YBYMarkdown></YBYMarkdown>
  </div>
</template>

<script>
  import YBYMarkdown from '@comp/yby-markdown/index.vue';
  export default {
    name: 'About',
    components: {
      YBYMarkdown
    }
  };
</script>
