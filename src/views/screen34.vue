<template>
    <div class="screen screen3-4">
        <div class="main-title">
            <div class="main-logo"></div>
            <div class="main-text">上海农业要素实时大数据</div>
        </div>
        <echartsMap></echartsMap>
    </div>
</template>

<script>
    import echartsMap from './echarts-map'
    export default {
        name: "screen34",
        data() {
            return {
                screen34PriceData: 92.1,
            }
        },
        mounted() {
            // setInterval(() => {
            //     this.screen34PriceData += 0.01;
            // }, 15000)
        },
        methods:{
            callback(eventName){
                console.log('有反应了！', eventName);
            }
        },
        components: {
            echartsMap
        }
    }
</script>

<style scoped lang="scss">
    .screen {
        width: 1080px;
        height: 100%;
        &.screen3-4 {
            position: relative;
            width: 2160px;
            height: 100%;

            .main-title {
                position: absolute;
                top: 20px;
                left: 0;
                width: 100%;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                letter-spacing: 8px;
                z-index: 99999;
                .main-logo {
                    width: 150px;
                    height: 150px;
                    background-image: url("../assets/main-logo.png");
                    background-size: 100% 100%;
                    margin-right: 50px;
                    margin-top: 20px;
                }

                .main-text {
                    color: #ffffff;
                    font-size: 100px;
                }
            }

            .map-title {
                position: absolute;
                top: 343px;
                left: 40px;

                ul {
                    display: flex;
                    flex-direction: column;
                    padding: 10px 0;

                    .content {
                        display: flex;
                        align-items: center;
                        padding: 20px 20px;
                        font-size: 40px;
                        line-height: 60px;
                        color: #5aecff;

                        .content-title {
                            width: 200px;
                        }
                    }
                }
            }
        }
    }
</style>