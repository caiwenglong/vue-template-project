<template>
  <div class="notebook-writing">
    <layout>
      <sider class="layout-side" :width="sideWidth">
        <div class="side-header">
          <span @click="handleBackToHome" class="back-to-home">
            <svg-icon tip-content="返回首页" customized-class="icon-back-to-home" icon-class="back-to-home"></svg-icon>
          </span>
        </div>
        <div class="side-content">
          <Menu :theme="'dark'" :open-names="['1']" accordion>
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper" />
                内容管理
              </template>
              <MenuItem name="1-1">文章管理</MenuItem>
              <MenuItem name="1-2">评论管理</MenuItem>
              <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people" />
                用户管理
              </template>
              <MenuItem name="2-1">新增用户</MenuItem>
              <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-stats" />
                统计分析
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
          </Menu>
        </div>
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
      handleBackToHome() {
        this.$router.push({
          name: 'Home'
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@style/global";
  /* 定义icon 宽度变量*/
  $icon-title-width: 32px;
  $icon-title-left: 12px;
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
  .side-header {
    position: relative;
    height: 40px;
    .back-to-home,
    .icon-isExpand-wrapper {
      display: inline-block;
    }
    .back-to-home {
      float: left;
    }

    .icon-isExpand-wrapper {
      float: right;
    }
  }
</style>

<style lang="scss">
  .side-header {
    $side-header-height: 43px;
    padding-top: 8px;
    padding-right: 8px;
    padding-left: 8px;
    .svg-icon {
      width: 24px;
    }
    .icon-back-to-home {
      width: 32px;
    }
  }
</style>
