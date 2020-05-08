<template>
    <div class="screen screen5">
        <div class="chart1">
            <div class="trade-title">
                2015-2020上海土地流转交易情况
            </div>
            <lineNormal></lineNormal>
        </div>
        <div class="chart2">
            <div class="trade-title">
                2019各区土地流转交易面积
            </div>
            <barArea></barArea>
        </div>
        <div class="chart3">
            <div class="trade-title">
                2015-2020各区土地流转交易笔数
            </div>
            <lineLinear></lineLinear>
        </div>
    </div>
</template>

<script>
    import lineNormal from '../components/chart-line-normal'
    import barArea from '../components/chart-bar-area'
    import lineLinear from '../components/chart-line-linear'
    export default {
        name: "screen5",
        components: {
            lineNormal,
            barArea,
            lineLinear
        }
    }
</script>

<style scoped lang="scss">
    .screen {
        width: 1080px;
        height: 100%;
        &.screen5 {
            .chart1 {
                margin: 343px auto 0;
                width: 920px;
                height: 419px;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 40px 28px 0;
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
            .chart2 {
                margin: 75px auto 0;
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
            .chart3 {
                margin: 75px auto 0;
                width: 920px;
                height: 419px;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 40px 28px 0;
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