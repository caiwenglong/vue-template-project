<template>
  <Tooltip :content="tipContent">
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </Tooltip>
</template>

<script>
  export default {
    name: 'SvgIcon',
    props: {
      iconClass: {
        type: String,
        required: true
      },
      customizedClass: {
        type: String
      },
      tipContent: {
        type: String
      }
    },
    computed: {
      iconName () {
        return `#icon-${this.iconClass}`;
      },
      svgClass () {
        if (this.customizedClass) {
          return 'svg-icon ' + this.customizedClass;
        } else {
          return 'svg-icon';
        }
      }
    }
  };
</script>

<style scoped>
  .svg-icon {
    width: 32px;
    height: 32px;
    fill: currentColor;
    overflow: hidden;
    cursor: pointer;
  }
</style>
