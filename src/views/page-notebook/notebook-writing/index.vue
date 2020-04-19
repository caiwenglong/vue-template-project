<template>
  <div class="page-notebook-writing">
    <layout>
      <sider class="layout-side" :width="sideWidth">
        <div class="side-header">
          <span @click="handleBackToHome" class="back-to-home">
            返回首页
          </span>
        </div>
        <div class="side-content">
          <Menu :theme="'dark'" :open-names="['1']" accordion>
            <div class="ivu-menu-submenu-title add-category">
              <Icon type="md-add" />
              <span @click="handleAddCategory">添加文集</span>
            </div>
            <Submenu name="1">
              <template slot="title">
                <div class="sub-menu-title" @mouseenter="showMoreIcon" @mouseleave="hideMoreIcon">
                  <Icon type="ios-folder-open" />
                  <span>内容管理</span>
                  <Dropdown @on-visible-change="getDropdownState" transfer>
                    <span class="icon-more-wrapper">
                      <Icon type="ios-more" v-show="isIconMoreShow" />
                    </span>
                    <DropdownMenu @mouseenter.native="showMoreIcon" @mouseleave.native="hideMoreIcon" slot="list">
                      <DropdownItem>添加</DropdownItem>
                      <DropdownItem>修改</DropdownItem>
                      <DropdownItem>删除</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <span class="art-create-time">2020-04-18</span>
                </div>
              </template>
              <MenuItem @mouseenter.native="showMoreIcon" @mouseleave.native="hideMoreIcon" name="1-1">
                <span>文章管理</span>
                <Dropdown @on-visible-change="getDropdownState" transfer>
                  <span class="icon-more-wrapper">
                    <Icon type="ios-more" />
                  </span>
                  <DropdownMenu slot="list">
                    <DropdownItem>添加</DropdownItem>
                    <DropdownItem>修改</DropdownItem>
                    <DropdownItem>删除</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </MenuItem>
              <MenuItem name="1-2">评论管理</MenuItem>
              <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-folder-open" />
                <span>用户管理</span>
              </template>
              <MenuItem name="2-1">新增用户</MenuItem>
              <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-folder-open" />
                <span>
                  统计分析
                </span>
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
              <Input v-model="notebookTitle" class="input-notebook-title" maxlength="20" show-word-limit placeholder="请输入文章标题" />
              <input placeholder="请输入文章标题" type="text" class="input-notebook-title">
            </label>
            <span class="publish-article">发表文章</span>
            <span class="add-tag">添加标签</span>
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
        isExpand: false,
        isIconMoreShow: false,
        notebookTitle: ''
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
      },
      handleAddCategory() {
        alert('t添加文集');
      },
      showMoreIcon(e) {
        console.log(e.target.querySelector('.icon-more-wrapper'));
        // e.target.querySelector('.icon-more-wrapper').style.display = 'block';
        this.isIconMoreShow = true;
      },
      hideMoreIcon(e) {
        // e.target.querySelector('.icon-more-wrapper').style.display = 'none';
        this.isIconMoreShow = false;
      },
      getDropdownState(e) {
        this.isIconMoreShow = e;
        console.log(this.isIconMoreShow);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@style/global";
  /* 定义icon 宽度变量*/
  $icon-title-width: 32px;
  $icon-title-left: 12px;
  .page-notebook-writing {
    color: $font-color-white-opacity;
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
      background: transparent;
      color: $font-color-white-opacity;
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
      cursor: pointer;
    }

    .icon-isExpand-wrapper {
      float: right;
    }
  }
  .publish-article,
  .add-tag {
    position:  absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }
  .add-tag {
    right: 100px;
  }
  .ivu-dropdown {
    right: 36px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 0;
    transition: 0.3s;
  }
  .sub-menu-title .ivu-icon {
    margin-right: 8px;
  }
  .art-create-time {
    position: absolute;
    left: 38px;
    bottom: 0;
    font-size: 12px;
    color: $font-color-white-opacity;
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
