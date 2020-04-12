<template>
  <div>
    <svg :class="svgClass">
      <use :xlink:href="iconName"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'SvgIcon',
    props: {
      inputSvgClass: {
        type: String
      },
      inputIconName: {
        type: String,
        require: true
      }
    },
    computed: {
      iconName () {
        return `#icon-${this.inputIconName}`;
      },
      svgClass () {
        if (this.inputSvgClass) {
          return 'svg-icon ' + this.iconName + '' + this.inputSvgClass;
        } else {
          return 'svg-icon ' + this.iconName;
        }
      }
    }
  };
</script>

<style scoped>

</style>
