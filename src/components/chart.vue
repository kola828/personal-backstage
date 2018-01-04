<template>

  <div class="chart">
    <div id="work"></div>
  </div>


</template>

<script>
  import echarts from 'echarts'

  export default {
    data() {
      return {
        workChart: {
          data: ['2/1', '2/2', '2/3', '2/4', '2/5', '2/6', '2/7', '2/8', '2/9', '2/10', '2/11', '2/12', '2/13', '2/14', '2/15', '2/16', '2/17', '2/18', '2/19', '2/20', '2/21', '2/22'],
          time: [8, 7, 8, 8, 6, 8, 9, 8, 8, 8, 6, 9, 8, 8, 8, 10, 8, 8, 8, 10, 12, 8]
        }
      }
    },
    mounted() {
      this.workChartInit()


    },


    methods: {
      /**
       * @description 图表初始化
       */
      workChartInit() {
        let self = this;
        let myChart = echarts.init(document.getElementById('work'));
        let option = {
          title: {
            text: '每日工作时长',
            subtext: '纯属虚构'
          },
          legend: {
            right: '50px'
          },
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
            }
          },
          xAxis: [
            {
              type: 'category',
              data: self.workChart.data,
              axisTick: {
                alignWithLabel: true,
                interval: 0
              },
              axisLabel: {
                interval: 0
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              boundaryGap: ['20%', '20%']
            }
          ],
          series: [
            {
              name: '时长',
              type: 'bar',
              data: self.workChart.time,
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
          ],
          color: ['#E6A23C', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
        };
        myChart.setOption(option)
      }
    }
  }


</script>
<style lang="stylus">

  @import '../style/chart';

</style>