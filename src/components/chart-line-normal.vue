<template>
    <div class="chart">
        <div class="today-charts" ref="chart-4" style="width: 100%;height:100%"></div>
    </div>
</template>

<script>
    export default {
        name: "demo-4",
        data() {
            return {
                chart4: null
            }
        },
        mounted() {
            this.lineChart();
            window.onresize = () => { // 根据窗口大小自适应
                this.chart4.resize();
            }
        },
        methods: {
            lineChart() {
                // 基于准备好的dom，初始化echarts实例
                this.chart4 = this.$echarts.init(this.$refs['chart-4'])
                // 绘制图表

                this.chart4.setOption({
                    // x 坐标轴
                    xAxis: {
                        type: 'category',
                        data: ['2015', '2016', '2017', '2018', '2019', '2020'],
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
                    yAxis: [
                        {
                            type: 'value',
                            // 坐标轴线
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#ffffff'
                                }
                            },
                            // 刻度分割线
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
                        },
                        {
                            type: 'value',
                            // 坐标轴线
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
                        }
                    ],
                    // 数值提示框
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    // 设置图例颜色
                    color: ['#ffc154', '#b057b0', '#2dd8fd'],
                    // 图例配置
                    legend: {
                        top: '0%',
                        left: '67%',
                        itemHeight: 15,
                        itemWidth: 30,
                        itemGap: 10,
                        symbolSize: 20,
                        data: [
                            {
                                name: '成交笔数',
                                icon: 'roundRect',
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: 16,
                                }
                            },
                            {
                                name: '成交亩数',
                                icon: 'roundRect',
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: 16,
                                }
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
                            data: [265, 1215, 2926, 3874, 2902, 6],
                            type: 'line',
                            yAxisIndex: 1,
                            lineStyle: {
                                color: "#ffc154"
                            },
                        },
                        {
                            name: '成交亩数',
                            data: [35841.42, 127067.36, 290407.572, 421924.178, 320966.094, 824.151],
                            type: 'line',
                            lineStyle: {
                                color: "#b057b0"
                            },
                        },
                        {
                            name: '成交金额（万）',
                            data: [6626, 34400, 79000, 122000, 82600, 531],
                            type: 'line',
                            lineStyle: {
                                color: "#2dd8fd"
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
        height: 110%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
