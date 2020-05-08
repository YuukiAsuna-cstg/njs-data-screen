<template>
  <div class="chart">
    <div class="today-charts" ref="chart-2" style="width: 100%; height:100%"></div>
  </div>
</template>

<script>
  export default {
    name: "demo-2",
    data() {
      return {
        chart2: null
      }
    },
    mounted() {
      this.lineChart();
      window.onresize = () => { // 根据窗口大小自适应
        this.chart2.resize();
      }
    },
    methods: {
      lineChart() {
        // 基于准备好的dom，初始化echarts实例
        this.chart2 = this.$echarts.init(this.$refs['chart-2'])
        // 绘制图表

        this.chart2.setOption({
          // x 坐标轴
          xAxis: {
            type: 'category',
            data: ['闵行', '嘉定', '宝山', '浦东', '奉贤', '金山', '青浦', '崇明'],
            axisLine: {
              // 坐标轴颜色
              lineStyle: {
                color: 'rgb(42, 184, 191)'
              }
            },
            axisLabel: {
              fontSize: 18,
              color: () => {
                return '#afafaf'
              }
            },
            axisTick: {
              show: false
            }
          },
          // y 坐标轴
          yAxis: [{
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
          }, {
            type: 'value',
            axisLine: {
              show: false,
            },
            // 坐标轴文字
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            }
          },],
          grid: {
            left: '12%',
            right: '5%'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          // 设置图例颜色
          color: ['#b057b0', '#2dd8fd'],
          // 图例配置
          legend: {
            top: '0%',
            left: '65%',
            itemHeight: 15,
            itemWidth: 30,
            itemGap: 10,
            data: [
              {
                name: '成交笔数',
                icon: 'roundRect', // 图例形状
                textStyle: {
                  color: '#ffffff',
                  fontSize: 16,
                },
              },
              {
                name: '成交金额（万）',
                icon: 'roundRect',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 16,
                }
              },
            ]
          },
          series: [
            {
              name: '成交笔数',
              data: [50, 4, 58, 313, 1011, 490, 708, 268],
              type: 'line',
              smooth: 0.4,
              yAxisIndex: 1,
              lineStyle: {
                color: "#b057b0"
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 0.8,
                  colorStops: [{
                    offset: 0, color: '#b057b0' // 0% 处的颜色
                  }, {
                    offset: 1, color: 'rgba(0, 0, 0, 0)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              },
            },
            {
              name: '成交金额（万）',
              data: [18406.57342, 332.0196, 4607.580526, 12500.0173, 14953.89227, 4676.366932, 20520.81374, 6561.89327],
              type: 'line',
              smooth: 0.4,
              lineStyle: {
                color: "#2dd8fd"
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 0.8,
                  colorStops: [{
                    offset: 0, color: '#2dd8fd' // 0% 处的颜色
                  }, {
                    offset: 1, color: 'rgba(0, 0, 0, 0)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              },
            },
          ]
        })
      },
    }
  }
</script>

<style scoped>
  .chart {
    width: 100%;
    height: 120%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
