<template>
    <div class="screen screen2">
        <div class="today">
            <div class="today-title">
                今日新增挂牌比例
            </div>
            <div class="today-charts" ref="chart-1" style="height:300px"></div>
        </div>
        <div class="by-time">
            <div class="time-select">
                <el-date-picker
                        v-model="dateValue"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions"
                        :unlink-panels="false">
                </el-date-picker>
            </div>
            <div class="guapai">
                <div class="today-title">
                    挂牌情况
                </div>
                <div class="today-charts" ref="chart-3" style="height:300px"></div>
            </div>
            <div class="items">
                <div class="today-title">
                    各项指标
                </div>
                <div class="today-charts" ref="chart-2" style="height:300px"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "screen2",
        data(){
            return{
                // 今日新增挂牌比例图表
                chart1: null,
                // 挂牌情况图表
                chart2: null,
                // 各项指标图表
                chart3: null,
                // 时间段选择区间设置
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                            picker.$emit('pick', [start, end])
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                            picker.$emit('pick', [start, end])
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                            picker.$emit('pick', [start, end])
                        }
                    }]
                },
                // 时间段值
                dateValue: '',
            }
        },
        mounted(){
            this.drawTodayChart();
            this.byTimeItemsChart();
            this.byTimeChart();
            window.onresize = () => { // 根据窗口大小自适应
                this.chart1.resize();
                this.chart2.resize();
                this.chart3.resize();
            }
        },
        methods:{
            // 今日新增挂牌饼图绘制
            drawTodayChart() {
                // 基于准备好的dom，初始化echarts实例
                this.chart1 = this.$echarts.init(this.$refs['chart-1'])
                // 绘制图表

                this.chart1.setOption({
                    // title : {
                    //     text: '某站点用户访问来源',
                    //     subtext: '纯属虚构',
                    //     x:'center'
                    // },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 16
                        },
                        orient: 'vertical',
                        right: '15%',
                        bottom: '25%',
                        itemGap: 30,
                        data: ['土地流转', '集体资产', '非集体资产', '权益']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '60%',
                            center: ['35%', '50%'],
                            label: {
                                formatter: '{c} ({d}%)'
                            },
                            data: [
                                {
                                    value: 335,
                                    name: '土地流转',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#5b73fa',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 200,
                                    name: '集体资产',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ee62a7',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 234,
                                    name: '非集体资产',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ffc154',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 135,
                                    name: '权益',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#5baaff',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]

                })
            },
            // 按时间查询指标饼图绘制
            byTimeItemsChart() {
                // 基于准备好的dom，初始化echarts实例
                this.chart2 = this.$echarts.init(this.$refs['chart-2'])
                // 绘制图表

                this.chart2.setOption({
                    // title : {
                    //     text: '某站点用户访问来源',
                    //     subtext: '纯属虚构',
                    //     x:'center'
                    // },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: '15%',
                        bottom: '35%',
                        itemGap: 30,
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 16
                        },
                        data: ['已完成', '进行中', '已撤牌']
                    },
                    series: [
                        {
                            name: '各项指标',
                            type: 'pie',
                            radius: '60%',
                            center: ['35%', '50%'],
                            label: {
                                formatter: '{c} ({d}%)',
                                avoidLabelOverlap: true,
                            },
                            data: [
                                {
                                    value: 70,
                                    name: '已完成',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#5b73fa',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 25,
                                    name: '进行中',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ee62a7',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 15,
                                    name: '已撤牌',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ffc154',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]

                })
            },
            // 按时间查询挂牌情况饼图绘制
            byTimeChart() {
                // 基于准备好的dom，初始化echarts实例
                this.chart3 = this.$echarts.init(this.$refs['chart-3'])
                // 绘制图表
                this.chart3.setOption({
                    title: {
                        text: '',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: '15%',
                        bottom: '25%',
                        itemGap: 30,
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 16
                        },
                        data: ['土地流转', '集体资产', '非集体资产', '权益']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '60%',
                            center: ['35%', '50%'],
                            label: {
                                formatter: '{c} ({d}%)'
                            },
                            data: [
                                {
                                    value: 24787,
                                    name: '土地流转',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#5b73fa',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 4527,
                                    name: '集体资产',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ee62a7',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 5427,
                                    name: '非集体资产',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ffc154',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 968,
                                    name: '权益',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#5baaff',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    .screen {
        width: 1080px;
        height: 100%;
        &.screen2 {
            .today {
                margin: 343px auto 0;
                width: 920px;
                height: 419px;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 40px 28px;
                background-color: rgba(4, 61, 114, 0.3);
                color: #ffffff;
                .today-title {
                    height: 44px;
                    display: flex;
                    border-left: 9px solid #6edfc3;
                    font-size: 31px;
                    line-height: 31px;
                    box-sizing: border-box;
                    padding: 6px 20px;
                }
            }
            .by-time {
                margin: 75px auto 0;
                width: 920px;
                height: 920px;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 28px;
                background-color: rgba(4, 61, 114, 0.3);
                color: #ffffff;
                .time-select {
                    margin-left: 20px;
                }
                .guapai {
                    .today-title {
                        height: 44px;
                        display: flex;
                        border-left: 9px solid #6edfc3;
                        font-size: 31px;
                        line-height: 31px;
                        box-sizing: border-box;
                        padding: 6px 20px;
                        margin-top: 50px;
                    }
                }
                .items {
                    margin-top: 60px;
                    .today-title {
                        height: 44px;
                        display: flex;
                        border-left: 9px solid #6edfc3;
                        font-size: 31px;
                        line-height: 31px;
                        box-sizing: border-box;
                        padding: 6px 20px;
                    }
                }
            }
        }
    }
</style>