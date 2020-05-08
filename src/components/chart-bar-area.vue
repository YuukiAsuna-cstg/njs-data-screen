<template>
  <div class="chart">
    <div class="today-charts" ref="bar-area" style="width: 100%; height:100%"></div>
  </div>
</template>

<script>
  export default {
    name: "chart-bar-area",
    data() {
      return {
        barArea: null,
      }
    },
    mounted() {
      this.lineChart();
      window.onresize = () => { // 根据窗口大小自适应
        this.barArea.resize();
      };
    },
    methods: {
      lineChart() {
        // 基于准备好的dom，初始化echarts实例
        this.barArea = this.$echarts.init(this.$refs['bar-area'])
        // 绘制图表
        this.barArea.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['闵行', '嘉定', '宝山', '浦东', '奉贤', '金山', '青浦', '崇明'],
              axisTick: {
                show: false
              },
              axisLabel: {
                fontSize: 18,
                color: () => {
                  return '#afafaf'
                }
              },
              axisLine: {
                // 坐标轴颜色
                lineStyle: {
                  color: 'rgb(42, 184, 191)'
                }
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#afafaf'
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'rgb(18,77,115)'
                }
              },
              axisLabel: {
                fontSize: 18,
                color: () => {
                  return '#afafaf'
                }
              },
            }
          ],
          legend: {
            top: '0%',
            left: '70%',
            itemHeight: 15,
            itemWidth: 30,
            itemGap: 10,
            data: [
              {
                name: '交易面积（千亩）',
                icon: 'roundRect', // 图例形状
                textStyle: {
                  color: '#ffffff',
                  fontSize: 16,
                },
              },
            ]
          },
          series: [
            {
              name: '交易面积（千亩）',
              type: 'bar',
              barWidth: '35%',
              data: [12.096, 2.743, 5.398, 40.220, 101.361, 45.833, 91.036, 22.274],
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [
                      {offset: 0, color: '#02F6C7'},
                      {offset: 1, color: '#005EFE'}
                    ])
                }
              }
            }
          ]
        })
      },
    }
  }
</script>

<style scoped>
  .chart {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
