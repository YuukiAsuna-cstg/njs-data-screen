<template>
    <div class="screen screen6">
        <div class="trade1">
            <div class="trade-title">
                累计已交易土地（万亩）
            </div>
            <div class="trade-content">
                <div class="trade-data">
                    <div class="data-num">
                        <div class="num-6" ref="screen6TradeData-num6">
                            <div>{{ screen6TradeData.num6 }}</div>
                            <div>{{ screen6TradeData.num6Next }}</div>
                        </div>
                        <div class="num-5" ref="screen6TradeData-num5">
                            <div>{{ screen6TradeData.num5 }}</div>
                            <div>{{ screen6TradeData.num5Next }}</div>
                        </div>
                        <div>,</div>
                        <div class="num-4" ref="screen6TradeData-num4">
                            <div>{{ screen6TradeData.num4 }}</div>
                            <div>{{ screen6TradeData.num4Next }}</div>
                        </div>
                        <div class="num-3" ref="screen6TradeData-num3">
                            <div>{{ screen6TradeData.num3 }}</div>
                            <div>{{ screen6TradeData.num3Next }}</div>
                        </div>
                        <div class="num-2" ref="screen6TradeData-num2">
                            <div>{{ screen6TradeData.num2 }}</div>
                            <div>{{ screen6TradeData.num2Next }}</div>
                        </div>
                        <div>.</div>
                        <div class="num-1" ref="screen6TradeData-num1">
                            <div>{{ screen6TradeData.num1 }}</div>
                            <div>{{ screen6TradeData.num1Next }}</div>
                        </div>
                        <div class="num-0" ref="screen6TradeData-num0">
                            <div>{{ screen6TradeData.num0 }}</div>
                            <div>{{ screen6TradeData.num0Next }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="plant-type">
            <div class="plant-title">
                2012-2019年受让方类型占比
            </div>
            <div class="plant-charts" ref="plant-type-chart" style="height:300px"></div>
        </div>
        <div class="plant-direction">
            <div class="plant-title">
                2012-2019年受让方种植方向占比
            </div>
            <div class="plant-charts" ref="plant-direction-chart" style="height:300px"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "screen6",
        data() {
            return {
                // 受让方类型占比图表
                plantType: null,
                // 受让方种植方向图表
                plantDirection: null,
                // 累计已交易土地数据（按位储存）
                screen6TradeData: {
                    num0: 0,
                    num0Next: 0,
                    num1: 1,
                    num1Next: 1,
                    num2: 0,
                    num2Next: 0,
                    num3: 0,
                    num3Next: 0,
                    num4: 9,
                    num4Next: 9,
                    num5: 1,
                    num5Next: 1,
                    num6: 1,
                    num6Next: 1
                },
                // 已交易土地数据进位滚动判断
                nextNumScroll: {
                    num0: false,
                    num1: false,
                    num2: false,
                    num3: false,
                    num4: false,
                    num5: false
                },
            }
        },
        mounted() {
            this.plantTypeChart();
            this.plantDirectionChart();
            window.onresize = () => { // 根据窗口大小自适应
                this.plantType.resize();
                this.plantDirection.resize();
            }
            this.screen6TradeDataScroll(0);
            setInterval(() => {
                this.screen6TradeData.num0Next = this.screen6TradeData.num0Next + Math.ceil(Math.random() * 4);
                // console.log( this.screen6TradeData.num0Next);
                this.screen6TradeDataScroll(0);
                this.numberPlusJudge();
                this.numberPlusScroll(0);
            }, 5000);
            console.log(this.$refs['screen6TradeData-num0'].clientHeight);
        },
        methods: {
            // 今日新增挂牌饼图绘制
            plantTypeChart() {
                // 基于准备好的dom，初始化echarts实例
                this.plantType = this.$echarts.init(this.$refs['plant-type-chart'])
                // 绘制图表

                this.plantType.setOption({
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
                        bottom: '15%',
                        itemGap: 30,
                        data: ['公司', '合作社', '家庭农场', '个人']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '60%',
                            center: ['35%', '55%'],
                            label: {
                                formatter: '{c} ({d}%)'
                            },
                            data: [
                                {
                                    value: 2345,
                                    name: '公司',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#5b73fa',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 1374,
                                    name: '合作社',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ee62a7',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 659,
                                    name: '家庭农场',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#5baaff',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 375,
                                    name: '个人',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ffbb33',
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
            // 今日新增挂牌饼图绘制
            plantDirectionChart() {
                // 基于准备好的dom，初始化echarts实例
                this.plantDirection = this.$echarts.init(this.$refs['plant-direction-chart'])
                // 绘制图表

                this.plantDirection.setOption({
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
                        right: '12%',
                        bottom: '10%',
                        itemGap: 20,
                        data: ['休闲观光农业', '粮食种植', '林业种植', '蔬菜种植', '农业综合开发', '水产养殖']
                    },
                    series: [
                        {
                            name: '种植方向',
                            type: 'pie',
                            radius: '60%',
                            center: ['35%', '55%'],
                            label: {
                                formatter: '{c} ({d}%)'
                            },
                            data: [
                                {
                                    value: 1057,
                                    name: '休闲观光农业',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#5b73fa',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 1374,
                                    name: '粮食种植',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#5baaff',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 659,
                                    name: '林业种植',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#0cfcff',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 375,
                                    name: '蔬菜种植',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#0071f7',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 375,
                                    name: '农业综合开发',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ffc154',
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                {
                                    value: 4538,
                                    name: '水产养殖',
                                    itemStyle: {
                                        // 设置扇形的颜色
                                        color: '#ee62a7',
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
            // 数字增加滚动
            screen6TradeDataScroll(index){
                this.$refs['screen6TradeData-num' + index].style.top = 0;
                let timer = setInterval(() => {
                    if (parseInt(this.$refs['screen6TradeData-num' + index].style.top) <= -132) {
                        this.screen6TradeData['num' + index] = this.screen6TradeData['num' + index + 'Next'];
                        this.$refs['screen6TradeData-num' + index].style.top = 0;
                        clearInterval(timer);
                    }
                    else {
                        this.$refs['screen6TradeData-num' + index].style.top = parseInt(this.$refs['screen6TradeData-num' + index].style.top) - 2 + 'px';
                    }
                }, 20)
            },
            // 判断数字进位
            numberPlusJudge(){
                for(let i = 0; i < 6; i++){
                    if(this.screen6TradeData['num' + i + 'Next'] >= 10){
                        this.screen6TradeData['num' + (i + 1) + 'Next']++;
                        this.nextNumScroll['num' + i] = true;
                        this.screen6TradeData['num' + i + 'Next'] -= 10;
                    }
                }
            },
            // 递归进位函数
            numberPlusScroll(index){
                if(this.nextNumScroll['num' + index]){
                    this.screen6TradeDataScroll(index + 1);
                    this.nextNumScroll['num' + index] = false;
                    if(index < 6){
                        this.numberPlusScroll(index + 1);
                    }
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .screen {
        width: 1080px;
        height: 100%;
        &.screen6 {
            .trade1 {
                margin: 343px auto 0;
                width: 920px;
                height: 419px;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 40px 28px;
                background-color: rgba(4, 61, 114, 0.3);
                color: #ffffff;
                .trade-title {
                    height: 44px;
                    display: flex;
                    border-left: 9px solid #6edfc3;
                    font-size: 31px;
                    line-height: 31px;
                    box-sizing: border-box;
                    padding: 6px 10px;
                }
                .trade-content {
                    display: flex;
                    flex: 1;
                    .trade-data {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .data-title {
                            font-size: 38px;
                        }
                        .data-num {
                            height: 132px;
                            display: flex;
                            margin-top: 20px;
                            text-align: left;
                            font-size: 100px;
                            color: #6edfc3;
                            overflow: hidden;
                            .num-0{
                                position: relative;
                            }
                        }
                    }
                    .trade-img {
                        height: 100%;
                        width: 330px;
                        background-image: url("../assets/trade.png");
                        background-size: 100% 100%;
                    }
                }
            }
            .plant-type {
                margin: 75px auto 0;
                width: 920px;
                height: 419px;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 40px 28px;
                background-color: rgba(4, 61, 114, 0.3);
                color: #ffffff;
                .plant-title {
                    height: 44px;
                    display: flex;
                    border-left: 9px solid #6edfc3;
                    font-size: 31px;
                    line-height: 31px;
                    box-sizing: border-box;
                    padding: 6px 10px;
                }
                .plant-content {
                    display: flex;
                    flex: 1;
                    .trade-data {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .data-title {
                            font-size: 38px;
                        }
                        .data-num {
                            width: 420px;
                            margin-top: 20px;
                            text-align: left;
                            font-size: 73px;
                            color: #6edfc3;
                        }
                    }
                    .trade-img {
                        height: 100%;
                        width: 330px;
                        background-image: url("../assets/trade.png");
                        background-size: 100% 100%;
                    }
                }
            }
            .plant-direction {
                margin: 75px auto 0;
                width: 920px;
                height: 419px;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 40px 28px;
                background-color: rgba(4, 61, 114, 0.3);
                color: #ffffff;
                .plant-title {
                    height: 44px;
                    display: flex;
                    border-left: 9px solid #6edfc3;
                    font-size: 31px;
                    line-height: 31px;
                    box-sizing: border-box;
                    padding: 6px 10px;
                }
                .plant-content {
                    display: flex;
                    flex: 1;
                    .trade-data {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .data-title {
                            font-size: 38px;
                        }
                        .data-num {
                            width: 420px;
                            margin-top: 20px;
                            text-align: left;
                            font-size: 73px;
                            color: #6edfc3;
                        }
                    }
                    .trade-img {
                        height: 100%;
                        width: 330px;
                        background-image: url("../assets/trade.png");
                        background-size: 100% 100%;
                    }
                }
            }
        }
    }
</style>