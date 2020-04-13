<template>
  <div class="notebook-writing">
    <layout>
      <sider class="layout-side" :width="sideWidth">
        <span @click="toggleDrawer" class="icon-isExpand-wrapper">
          <svg-icon tip-content="展开" v-if="!isExpand" class="icon-expand" icon-class="expand"></svg-icon>
        </span>
        <Drawer
          title="Create"
          v-model="isExpand"
          placement="left"
          width="720"
          :mask-closable="false"
        >
          <div class="demo-drawer-footer">
            <Button style="margin-right: 8px" @click="isExpand = false">Cancel</Button>
            <Button type="primary" @click="isExpand = false">Submit</Button>
          </div>
        </Drawer>
      </sider>
      <content class="layout-content">
        <div class="notebook-title-wrapper">
          <div class="notebook-title">
            <label>
              <svg-icon class="icon-title" icon-class="title"></svg-icon>
              <input placeholder="请输入文章标题" type="text" class="input-notebook-title">
            </label>
          </div>
        </div>
        <YBYMarkdown></YBYMarkdown>
      </content>
    </layout>
  </div>
</template>

<script>
  import YBYMarkdown from '@comp/yby-markdown/index.vue';

  export default {
    name: 'Notebook',
    data: function () {
      return {
        sideWidth: '240',
        isExpand: false
      };
    },
    components: {
      YBYMarkdown
    },
    methods: {
      toggleDrawer() {
        this.isExpand = !this.isExpand;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@style/global";
  /* 定义icon 宽度变量*/
  $icon-title-width: 32px;
  $icon-title-left: 12px;

  .layout-side {
    padding: 12px;
  }
  .layout-content {
    width: 100%;
  }
  .notebook-title {
    background: #363636;
    height: 44px;
    border-bottom: 1px solid #666;
    box-sizing: border-box;
    position: relative;
    .input-notebook-title {
      width: 100%;
      border: none;
      height: 100%;
      padding-left: $icon-title-width + $icon-title-left + 8px;
      font-size: 24px;
      color: $page-font-color;
      background: transparent;
    }
    .icon-title {
      position: absolute;
      top: 50%;
      margin-top: -($icon-title-width/2);
      left: $icon-title-left;
    }
  }
</style>
