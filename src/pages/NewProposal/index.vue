<template>
  <div class="new-question dialog-component" v-if="visible">
    <div class="dialog-body">
      <CTitle title="指导书建议" @dialogClose="closeDialog()"></CTitle>
      <div class="input-contain">
        <textarea name="" id="input-contain" rows="10" cols="77" v-model="input"></textarea>
        <div class="mask align jus" v-if="!input">这里输入你的建议</div>
      </div>
      <div class="cancel-enter align between">
        <div class="point button cancel" @click="enter(false)">取 消</div>
        <div class="point button enter" @click="enter(true)">提 交</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
      },
    },
    data() {
      return {
        input: ''
      }
    },
    methods: {
      closeDialog() {
        this.$emit('closeDialog', {old: 'dialogProposalNew', new: 'advise'})
      },
      enter(val) {
        if(val) {
          if(this.input) {
            this.$post({
              road: 'advise',
              data: {
                dtype: "advise_new",
                // uid: "330172199301013625",
                msg: this.input
              }
            })
            .then(res=>{
              this.input = ''
              this.closeDialog()
            })
          }
        }else {
          this.closeDialog()
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  .new-question {
    .input-contain {
      margin-top: 60px;
      background: #ededed;
      position: relative;
      width: 634px;
      height: 162px;
    }

    .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      font-size: 16px;
      z-index: 3000;
      color: rgba(153, 153, 153, 1);
    }

    #input-contain {
      background: transparent;
      resize: none;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 3001;
      font-size: 15px;
      color: #333;
      padding: 10px;
    }

    .cancel-enter {
      width: 100%;
      padding: 0 60px;
      margin-top: 60px;

      .button {
        width: 134px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 21px;
        border-radius: 20px;
      }

      .cancel {
        color: #fff;
        background: #4c4a48;
      }

      .enter {
        background:#00b7c3;
        color: #fff;
      }
    }
  }
</style>