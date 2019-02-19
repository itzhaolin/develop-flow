<template>
  <div>
    <div class="home">
      <h2>首页</h2>
      <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
      <div id="main" style="width: 600px;height:400px;"></div>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'

  export default {
    data () {
      return {}
    },
    mounted () {
      this.initChart()
    },
    methods: {
      initChart () {
        var myChart = echarts.init(document.getElementById('main'))
        var option = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
        myChart.setOption(option)
      }
    }
  }
</script>

<style>
  .home{
    width: 500px;
    margin: 50px auto;
  }
</style>

