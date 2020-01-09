<template>
    <div class="screen screen5">
        <div class="chart1">
            <div class="trade-title">
                各区土地流转交易面积
            </div>
        </div>
        <div class="chart2">
            <div class="trade-title">
                2012-2019农村产权交易情况
            </div>
        </div>
        <div class="chart3">
            <div class="trade-title">
                2012-2019各区农村产权交易笔数
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "screen5"
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
                padding: 40px 28px;
                background-image: url("../assets/chart01.png");
                background-size: 100% 100%;
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
                background-image: url("../assets/chart02.png");
                background-size: 100% 100%;
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
                padding: 40px 28px;
                background-image: url("../assets/chart03.png");
                background-size: 100% 100%;
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