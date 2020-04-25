<template>
  <div class="container">
    <h2>点名提问</h2>

    <el-button type="success" @click="init">start</el-button>
    <!-- <el-button type="success" @click="stop" v-else>stop</el-button> -->
    

    <span>倒计时：{{ time }}</span>

    <span>{{ choose }}</span>

    <div class="history">
      <h2>历史记录</h2>
      <span v-for="(item, index) in histroyList" :key="index">{{ item }}</span>
    </div>

    <ul>
      <li>已提问，不再提问</li>
      <li>选择某些同学，概率增加</li>
      <li>移除某些同学</li>
    </ul>

  </div>
</template>
<script>
let timer, timer1;
import { random } from '@/utils/fn'
export default {
  data(){
     return {
       time: 5,
       isStart: false,
       choose: '',
       histroyList: [],
       name: ['张三', '李四', '王五', '史楠', '孙','张三', '李四', '王五', '史楠', '孙','张三', '李四', '王五', '史楠', '孙','张三', '李四', '王五', '史楠', '孙']
    }

  },
  created() {
    // console.log(random());
    
  },
  methods: {
    /**
     * 初始化游戏
     */
    init() {
      this.isStart = true
      this.choose = this.name[0]
      this.time = 5

      this.reduceTime()
      this.paly()
    },


    paly() {

      this.start()

      if(this.time <= 0) {
        this.histroyList.push(this.choose)

        clearTimeout(timer)
        clearTimeout(timer1)
        return false
      }
      

      timer1 = setTimeout(() => {
        this.paly()
      }, 300);
    },

    

    stop() {
      this.isStart = false
      clearTimeout(timer)
    },

    /**
     * 时间倒计时
     */
    reduceTime() {
      this.time--

      if(this.time <= 0) {
        clearTimeout(timer)
        return false
      }

      timer = setTimeout(() => {
        this.reduceTime()
      }, 1000);
    },

    start() {
      let num  = random(0, this.name.length-1)
      this.choose = this.name[num]
    }
  }
}
</script>
<style lang='less' scoped>
// @import url("../../../assets/style/common");

</style>