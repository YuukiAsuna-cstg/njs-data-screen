<template>
    <div class="screen screen1">
        <div class="trade-show-data">
            <div class="trade-title">
                今日新增挂牌
            </div>
            <div class="trade-item-title">
                <ul class="title-list">
                    <li>
                        <div class="name">项目名称</div>
                        <div class="area">流转面积/亩</div>
                        <div class="price">挂牌价格 元/亩/年</div>
                    </li>
                </ul>
            </div>
            <div class="trade-content">
                <ul class="item-list" ref="scroll-list">
                    <li v-for="item in tradeData">
                        <div class="name">{{ item.name }}</div>
                        <div class="area">{{ item.area }}</div>
                        <div class="price">{{ item.price }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "screen1",
        data(){
            return {
                // 今日新增挂牌数据
                tradeData: [
                    {
                        name: '奉贤区金汇镇光辉村',
                        area: '183.71',
                        price: '1900',
                    },
                    {
                        name: '闵行区浦江镇汇南村',
                        area: '114.22',
                        price: '1800',
                    },
                    {
                        name: '闵行区吴泾镇星火村',
                        area: '659',
                        price: '2000',
                    },
                    {
                        name: '青浦区重固镇郏店村',
                        area: '688',
                        price: '1800',
                    },
                    {
                        name: '浦东新区唐镇暮二村',
                        area: '117',
                        price: '1910',
                    },
                    {
                        name: '宝山区月浦镇茂盛村',
                        area: '442',
                        price: '1780',
                    },
                    {
                        name: '闵行区浦江镇汇南村',
                        area: '821',
                        price: '1820',
                    },
                    {
                        name: '崇明区陈家镇陈西村',
                        area: '427',
                        price: '1910',
                    },
                    {
                        name: '闵行区吴泾镇共和村',
                        area: '643',
                        price: '2000',
                    },
                    {
                        name: '闵行区吴泾镇友爱村',
                        area: '241',
                        price: '2000',
                    },
                    {
                        name: '青浦区重固镇郏店村',
                        area: '412',
                        price: '1800',
                    },
                    {
                        name: '宝山区月浦镇茂盛村',
                        area: '546',
                        price: '1900',
                    },
                    {
                        name: '奉贤区金汇镇光辉村',
                        area: '102',
                        price: '1800',
                    },
                    {
                        name: '青浦区练塘镇东泖村',
                        area: '423',
                        price: '1890',
                    },
                    {
                        name: '闵行区吴泾镇星火村',
                        area: '856',
                        price: '1860',
                    },
                    {
                        name: '闵行区吴泾镇共和村',
                        area: '123',
                        price: '1600',
                    },
                    {
                        name: '闵行区吴泾镇友爱村',
                        area: '424',
                        price: '1850',
                    },
                    {
                        name: '宝山区月浦镇茂盛村',
                        area: '462',
                        price: '1800',
                    },
                    {
                        name: '浦东新区唐镇暮二村',
                        area: '563',
                        price: '1900',
                    },
                    {
                        name: '闵行区吴泾镇共和村',
                        area: '124',
                        price: '1910',
                    },
                    {
                        name: '崇明区陈家镇陈西村',
                        area: '745',
                        price: '1710',
                    },
                    {
                        name: '宝山区月浦镇茂盛村',
                        area: '346',
                        price: '1200',
                    },
                    {
                        name: '闵行区浦江镇汇南村',
                        area: '542',
                        price: '1800',
                    },
                    {
                        name: '奉贤区金汇镇光辉村',
                        area: '183.71',
                        price: '1900',
                    },
                    {
                        name: '闵行区浦江镇汇南村',
                        area: '114.22',
                        price: '1800',
                    },
                    {
                        name: '闵行区吴泾镇星火村',
                        area: '659',
                        price: '2000',
                    },
                    {
                        name: '青浦区重固镇郏店村',
                        area: '688',
                        price: '1800',
                    },
                    {
                        name: '浦东新区唐镇暮二村',
                        area: '117',
                        price: '1910',
                    },
                    {
                        name: '宝山区月浦镇茂盛村',
                        area: '442',
                        price: '1780',
                    },
                    {
                        name: '闵行区浦江镇汇南村',
                        area: '821',
                        price: '1820',
                    },
                    {
                        name: '崇明区陈家镇陈西村',
                        area: '427',
                        price: '1910',
                    },
                    {
                        name: '闵行区吴泾镇共和村',
                        area: '643',
                        price: '2000',
                    },
                    {
                        name: '闵行区吴泾镇友爱村',
                        area: '241',
                        price: '2000',
                    },
                    {
                        name: '青浦区重固镇郏店村',
                        area: '412',
                        price: '1800',
                    },
                    {
                        name: '宝山区月浦镇茂盛村',
                        area: '546',
                        price: '1900',
                    },
                    {
                        name: '奉贤区金汇镇光辉村',
                        area: '102',
                        price: '1800',
                    },
                    {
                        name: '青浦区练塘镇东泖村',
                        area: '423',
                        price: '1890',
                    },
                    {
                        name: '闵行区吴泾镇星火村',
                        area: '856',
                        price: '1860',
                    },
                    {
                        name: '闵行区吴泾镇共和村',
                        area: '123',
                        price: '1600',
                    },
                    {
                        name: '闵行区吴泾镇友爱村',
                        area: '424',
                        price: '1850',
                    },
                    {
                        name: '宝山区月浦镇茂盛村',
                        area: '462',
                        price: '1800',
                    },
                    {
                        name: '浦东新区唐镇暮二村',
                        area: '563',
                        price: '1900',
                    },
                    {
                        name: '闵行区吴泾镇共和村',
                        area: '124',
                        price: '1910',
                    },
                    {
                        name: '崇明区陈家镇陈西村',
                        area: '745',
                        price: '1710',
                    },
                    {
                        name: '宝山区月浦镇茂盛村',
                        area: '346',
                        price: '1200',
                    },
                    {
                        name: '闵行区浦江镇汇南村',
                        area: '542',
                        price: '1800',
                    },
                ],
            }
        },
        mounted(){
            console.log(this.$refs['scroll-list']);
            console.log(this.$refs['scroll-list'].clientHeight);
            this.guapaiScroll();
        },
        methods:{
            // 今日新增挂牌数据滚动
            guapaiScroll(){
                this.$refs['scroll-list'].style.top = 0;
                setInterval(() => {
                    if (parseInt(this.$refs['scroll-list'].style.top) <= -1380) {
                        this.$refs['scroll-list'].style.top = 0;
                    }
                    this.$refs['scroll-list'].style.top = parseInt(this.$refs['scroll-list'].style.top) - 1 + 'px';
                }, 20);
            },
        }
    }
</script>

<style scoped lang="scss">
    .screen {
        width: 1080px;
        height: 100%;
        &.screen1 {
            box-sizing: border-box;
            .trade-show-data {
                margin: 343px auto 0;
                width: 920px;
                height: 1410px;
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
                .trade-item-title {
                    .title-list {
                        display: flex;
                        flex-direction: column;
                        margin-top: 50px;
                        li {
                            list-style: none;
                            display: flex;
                            font-size: 30px;
                            height: 60px;
                            .name {
                                width: 45%;
                            }
                            .area {
                                width: 25%;
                            }
                            .price {
                                width: 30%;
                            }
                        }
                    }
                }
                .trade-content {
                    overflow: hidden;
                    .item-list {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        margin-top: 20px;
                        li {
                            list-style: none;
                            display: flex;
                            font-size: 30px;
                            height: 60px;
                            .name {
                                width: 45%;
                            }
                            .area {
                                width: 25%;
                            }
                            .price {
                                width: 30%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>