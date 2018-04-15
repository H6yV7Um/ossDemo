<template>
  <transition name="modal">
    <div class="modal" v-show="value">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-closer">
            <slot name="closer">
              <div class="closer iconfont icon-close" @click="close"></div>
            </slot>
        </div>

          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <slot>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
      <slot name="mask">
        <div class="modal-mask" @click="close"></div>
      </slot>
    </div>
  </transition>
</template>

<script>

  export default {
      name: 'modal',
      mounted: function () {
      },
      data() {
          return {
              innerShow: false
          };
      },
      computed: {},
      props: {
          value: {},
          autoClose: {
              type: Boolean,
              default: true
          }
      },
      methods: {
          close() {
              if (!this.autoClose) {return;}
              this.$emit('input', false);
          }
      }
  };
</script>

<style lang="less" rel="stylesheet/less">
  .modal {
    transition: all .3s ease;
    color: #323232;
    z-index: 1000;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    .modal-wrapper {
      width: 80%;
      z-index: 1000;
      position: relative;
      text-align: left;
      display: inline-block;
      vertical-align: middle;
    }

    &:after{
      content: "";
      display: inline-block;
      height: 100%;
      width: 0;
      vertical-align: middle;
    }
  }

  .modal-mask {
    position: fixed;
    z-index: 999;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .modal-header {
    text-align: center;
    font-size: 22px;
    font-weight: 400;
  }

  .modal-container {
    margin: 0px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    position: relative;
  }

  .closer {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
    color: #999;
    &:hover {
      color: #20a0ff;
    }
  }

  /*
   * the following styles are auto-applied to elements with
   * v-transition="modal" when their visiblity is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter,
  .modal-leave-active {
    /*opacity: 0;*/
  }

  .modal-enter .modal-mask,
  .modal-leave-active .modal-mask {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    /*-webkit-transform: scale(1.1);*/
    /*transform: scale(1.1);*/
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
</style>
