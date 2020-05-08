<template>
    <div class="chart" ref="container">
        <div ref="map-scatter" class="charts"></div>
        <div class="map-title" v-show="showMapTitle">
            <ul>
                <li class="content">
                    <div class="content-title">分中心</div>
                    <div>
                        <span class="title-data">78</span>
                        <span>个</span>
                    </div>
                </li>
                <li class="content">
                    <div class="content-title">经纪公司</div>
                    <div>
                        <span class="title-data">20</span>
                        <span>个</span>
                    </div>
                </li>
                <li class="content">
                    <div class="content-title">审核员</div>
                    <div>
                        <span class="title-data">78</span>
                        <span>人</span>
                    </div>
                </li>
                <li class="content">
                    <div class="content-title">制单员</div>
                    <div>
                        <span class="title-data">166</span>
                        <span>人</span>
                    </div>
                </li>
                <li class="content">
                    <div class="content-title">增收金额</div>
                    <div>
                        <span class="title-data">{{ screen34PriceData.toFixed(2) }}</span>
                        <span>亿元</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="map-btn-box">
            <div class="init-map" @click="initMap"></div>
            <div class="refresh-map" @click="refreshMap(currentMap)"></div>
        </div>
        <div class="visual-btn-box" v-show="visualMapCtrlShow">
            <div :class="{'visualMaxPlus': true, 'disable': !visualMapMaxPlusAble}" @click="visualMaxPlus">+</div>
            <div :class="{'visualMaxReduce': true, 'disable': !visualMapMaxReduceAble}" @click="visualMaxReduce">-</div>
            <div :class="{'visualFull': true, 'disable': !visualMapFull}" @click="visualMapShowFull">全部</div>
            <div :class="{'visualMinPlus': true, 'disable': !visualMapMinPlusAble}" @click="visualMinPlus">+</div>
            <div :class="{'visualMinReduce': true, 'disable': !visualMapMinReduceAble}" @click="visualMinReduce">-</div>
        </div>
        <div id="land-info" v-show="showLandInfo" @click="controlLandInfo($event)">
            <div class="land-box" @click.stop="closeAllInfo">
                <div class="land-info-title">
                    {{currentMap}}-{{townName}}{{villageName}}-土地流转
                </div>
            </div>
            <div class="land-img-info-click1" @click.stop="landInfoClick1">
                <div class="point point-animation"></div>
                <div class="info" v-show="showLandInfo1">
                    <p>流出方名称：{{villageName}}</p>
                    <p>流入方名称：长江农业发展有限公司</p>
                    <p>法定代表人：李爱农</p>
                    <p>身份证号：1023198304097717</p>
                    <p>注册资本：200000000.00/RMB</p>
                    <p>组织机构代码：5827219372</p>
                    <p>注册证号：5827219372</p>
                    <p>流转形式：租赁</p>
                    <p>流转面积：110亩</p>
                    <p>流转价格：2100元/亩/年</p>
                    <p>流转期限：2019.07.01-2022.06.30</p>
                    <p>经营用途：乔木</p>
                    <p>是否属于续签：是</p>
                    <p>联系电话：13888777500</p>
                    <p>电子邮箱：ainong@me.com</p>
                </div>
            </div>
            <div class="land-img-info-click2" @click.stop="landInfoClick2">
                <div class="point point-animation"></div>
                <div class="info" v-show="showLandInfo2">
                    <p>流出方名称：{{villageName}}</p>
                    <p>流入方名称：王爱农</p>
                    <p>身份证号：1023198304097717</p>
                    <p>户籍所在地：北京市朝阳区新华大街2号</p>
                    <p>现任职务：总经理</p>
                    <p>流转形式：租赁</p>
                    <p>流转面积：110亩</p>
                    <p>流转价格：2100元/亩/年</p>
                    <p>流转期限：2019.07.01-2022.06.30</p>
                    <p>经营用途：乔木</p>
                    <p>是否属于续签：否</p>
                    <p>联系电话：13888777500</p>
                    <p>电子邮箱：ainong@me.com</p>
                </div>
            </div>
            <div class="land-img-info-click3" @click.stop="landInfoClick3">
                <div class="point1 point-animation"></div>
                <div class="point2 point-animation"></div>
                <div class="info" v-show="showLandInfo3">
                    <p>流出方名称：{{villageName}}</p>
                    <p>流入方名称：长江农业发展有限公司</p>
                    <p>法定代表人：李爱农</p>
                    <p>身份证号：1023198304097717</p>
                    <p>注册资本：200000000.00/RMB</p>
                    <p>组织机构代码：5827219372</p>
                    <p>注册证号：5827219372</p>
                    <p>流转形式：租赁</p>
                    <p>流转面积：110亩</p>
                    <p>流转价格：2100元/亩/年</p>
                    <p>流转期限：2019.07.01-2022.06.30</p>
                    <p>经营用途：蔬菜</p>
                    <p>是否属于续签：是</p>
                    <p>联系电话：13888777500</p>
                    <p>电子邮箱：ainong@me.com</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import json from '../shanghai.json'
    import BaoShan from '../assets/areaJson/baoshan.json';
    import ChangNing from '../assets/areaJson/changning.json';
    import ChongMing from '../assets/areaJson/chongming.json';
    import FengXian from '../assets/areaJson/fengxian.json';
    import HongKou from '../assets/areaJson/hongkou.json';
    import HuangPu from '../assets/areaJson/huangpu.json';
    import JiaDing from '../assets/areaJson/jiading.json';
    import JingAn from '../assets/areaJson/jingan.json';
    import JinShan from '../assets/areaJson/jinshan.json';
    import MinHang from '../assets/areaJson/minhang.json';
    import PuDong from '../assets/areaJson/pudong.json';
    import PuTuo from '../assets/areaJson/putuo.json';
    import QingPu from '../assets/areaJson/qingpu.json';
    import SongJiang from '../assets/areaJson/songjiang.json';
    import XuHui from '../assets/areaJson/xuhui.json';
    import YangPu from '../assets/areaJson/yangpu.json';

    export default {
        name: 'echarts-map',
        data() {
            return {
                mapHeight: 500,
                // 地区经纬度数据
                xyData: {
                    'A': [
                        121.490317,
                        31.222771
                    ],
                    '浦东新区': [
                        121.633930,
                        31.139910
                    ],
                    "C": [
                        121.43752,
                        31.179973
                    ],
                    "D": [
                        121.381070,
                        31.206490
                    ],
                    "B": [
                        121.448224,
                        31.229003
                    ],
                    "G": [
                        121.392499,
                        31.241701
                    ],
                    "E": [
                        121.491832,
                        31.26097
                    ],
                    "F": [
                        121.522797,
                        31.270755
                    ],
                    "闵行区": [
                        121.480600,
                        31.067640
                    ],
                    "宝山区": [
                        121.420900,
                        31.346500
                    ],
                    "嘉定区": [
                        121.250333,
                        31.343524
                    ],
                    "金山区": [
                        121.330736,
                        30.784697
                    ],
                    "松江区": [
                        121.223543,
                        31.00047
                    ],
                    "青浦区": [
                        121.133021,
                        31.181209
                    ],
                    "奉贤区": [
                        121.508472,
                        30.912345
                    ],
                    "崇明区": [
                        121.568465, 31.635918
                    ],
                },
                mapData: [
                    {
                        name: 'A',
                        value: [0, 0, 0]
                    }, {
                        name: 'C',
                        value: [0, 0, 0]
                    }, {
                        name: 'D',
                        value: [0, 0, 0]
                    }, {
                        name: 'B',
                        value: [0, 0, 0]
                    }, {
                        name: 'G',
                        value: [0, 0, 0]
                    }, {
                        name: 'E',
                        value: [0, 0, 0]
                    }, {
                        name: 'F',
                        value: [0, 0, 0]
                    }, {
                        name: '闵行区',
                        value: [1.84, 12096.931, 50]
                    }, {
                        name: '宝山区',
                        value: [0.46, 5398.98, 58]
                    }, {
                        name: '嘉定区',
                        value: [0.03, 2743.92, 4]
                    }, {
                        name: '浦东新区',
                        value: [1.25, 40220, 313]
                    }, {
                        name: '金山区',
                        value: [0.46, 45833.06, 490]
                    }, {
                        name: '松江区',
                        value: [1.07, 4637, 104]
                    }, {
                        name: '青浦区',
                        value: [2.05, 91036.4, 708]
                    }, {
                        name: '奉贤区',
                        value: [1.49, 101361.946, 1011]
                    }, {
                        name: '崇明区',
                        value: [0.65, 22274.347, 268]
                    }
                ],
                areaData: {
                    'fengxian': [
                        {
                            name: '柘林镇',
                            value: [75.45, 452, 217]
                        }, {
                            name: '庄行镇',
                            value: [45.21, 784, 55]
                        }, {
                            name: '南桥镇',
                            value: [15.75, 762, 104]
                        }, {
                            name: '奉浦街道',
                            value: [78.45, 7862, 80]
                        }, {
                            name: '西渡街道',
                            value: [51.40, 784, 60]
                        }, {
                            name: '金汇镇',
                            value: [35.22, 415, 104]
                        }, {
                            name: '青村镇',
                            value: [11.78, 772, 180]
                        }, {
                            name: '奉城镇',
                            value: [45.11, 1277, 107]
                        }, {
                            name: '海湾镇',
                            value: [10.54, 4877, 89]
                        }, {
                            name: '四团镇',
                            value: [3.44, 646, 78]
                        }
                    ],
                    'fengxianScatter': {
                        zhelinzhen: {
                            xyData: {
                                '迎龙村': [121.422171, 30.845174],
                                '新塘村': [121.48318, 30.880302],
                                '立新村': [121.431369, 30.877785],
                                '柘南村': [121.484515, 30.839591],
                                '中心村': [121.494515, 30.845536]
                            },
                            mapData: [
                                {
                                    name: '迎龙村',
                                    value: [55.45, 452, 217]
                                },
                                {
                                    name: '新塘村',
                                    value: [45.45, 452, 217]
                                },
                                {
                                    name: '立新村',
                                    value: [35.45, 452, 217]
                                },
                                {
                                    name: '柘南村',
                                    value: [15.45, 452, 217]
                                },
                                {
                                    name: '中心村',
                                    value: [75.45, 452, 217]
                                },
                            ]
                        },
                        haiwanzhen: {
                            xyData: {
                                '星火社区': [121.572928, 30.870573],
                                '燎原居委会': [121.646796, 30.857117],
                                '洪卫居委会': [121.698014, 30.878084],
                                '五四一兴居委会': [121.744801, 30.871801],
                                '星火第一居委会': [121.575153, 30.86538],
                                '五四中港居委会': [121.741687, 30.871877],
                            },
                            mapData: [
                                {
                                    name: '星火社区',
                                    value: [14, 452, 217]
                                },
                                {
                                    name: '燎原居委会',
                                    value: [15.4, 452, 217]
                                },
                                {
                                    name: '洪卫居委会',
                                    value: [10.5, 452, 217]
                                },
                                {
                                    name: '五四一兴居委会',
                                    value: [15.45, 452, 217]
                                },
                                {
                                    name: '星火第一居委会',
                                    value: [31.4, 452, 217]
                                },
                                {
                                    name: '五四中港居委会',
                                    value: [12.4, 452, 217]
                                },
                            ]
                        },
                        zhuangxingzhen: {
                            xyData: {
                                '穗轮村': [121.415134, 30.901657],
                                '长浜村': [121.372871, 30.914304],
                                '姚泾村': [121.388213, 30.933471],
                                '芦泾村': [121.400715, 30.924711],
                                '潘垫村': [121.404244, 30.881724],
                                '庄北村': [121.400151, 30.916494],
                                '存古村': [121.396661, 30.932471],
                                '渔沥村': [121.402171, 30.972915],
                            },
                            mapData: [
                                {
                                    name: '穗轮村',
                                    value: [7, 452, 217]
                                },
                                {
                                    name: '长浜村',
                                    value: [49.4, 452, 217]
                                },
                                {
                                    name: '姚泾村',
                                    value: [14.5, 452, 217]
                                },
                                {
                                    name: '芦泾村',
                                    value: [16.45, 452, 217]
                                },
                                {
                                    name: '潘垫村',
                                    value: [7, 452, 217]
                                },
                                {
                                    name: '庄北村',
                                    value: [4.4, 452, 217]
                                },
                                {
                                    name: '存古村',
                                    value: [14.5, 452, 217]
                                },
                                {
                                    name: '渔沥村',
                                    value: [16.45, 452, 217]
                                },
                            ]
                        },
                        fengchengzhen: {
                            xyData: {
                                '八字村': [121.647922, 30.942185],
                                '卫季村': [121.612635, 30.909936],
                                '高桥村': [121.638232, 30.920477],
                                '冯家村': [121.647243, 30.961138],
                                '洪庙村': [121.683529, 30.935466],
                                '蔡家桥村': [121.65176, 30.980286],
                                '东新市村': [121.660611, 30.979037],
                                '启民村': [121.65843, 30.884458],
                                '觉民村': [121.658809, 30.906777],
                                '墩外村': [121.606741, 30.89028],
                                '第三社区': [121.651845, 30.91371],
                            },
                            mapData: [
                                {
                                    name: '八字村',
                                    value: [7, 452, 217]
                                },
                                {
                                    name: '卫季村',
                                    value: [49.4, 452, 217]
                                },
                                {
                                    name: '姚泾村',
                                    value: [14.5, 452, 217]
                                },
                                {
                                    name: '冯家村',
                                    value: [156.45, 452, 217]
                                },
                                {
                                    name: '洪庙村',
                                    value: [66.45, 452, 217]
                                },
                                {
                                    name: '蔡家桥村',
                                    value: [7.45, 452, 217]
                                },
                                {
                                    name: '东新市村',
                                    value: [28.45, 452, 217]
                                },
                                {
                                    name: '启民村',
                                    value: [28.45, 452, 217]
                                },
                                {
                                    name: '觉民村',
                                    value: [28.45, 452, 217]
                                },
                                {
                                    name: '墩外村',
                                    value: [28.45, 452, 217]
                                },
                                {
                                    name: '第三社区',
                                    value: [28.45, 452, 217]
                                },
                            ]
                        },
                        situanzhen: {
                            xyData: {
                                '拾村': [121.752496, 30.952119],
                                '五四村': [121.726154, 30.917461],
                                '小荡村': [121.707307, 30.97676],
                                '三港村': [121.727763, 30.893512],
                                '龙尖村': [121.736648, 30.91306],
                                '横桥村': [121.77724, 30.933745],
                                '三坎村': [121.733311, 30.93543],
                                '大桥村': [121.718088, 30.961789],
                                '四团村': [121.718677, 30.947455],
                            },
                            mapData: [
                                {
                                    name: '拾村',
                                    value: [7, 452, 217]
                                },
                                {
                                    name: '五四村',
                                    value: [49.4, 452, 217]
                                },
                                {
                                    name: '小荡村',
                                    value: [14.5, 452, 217]
                                },
                                {
                                    name: '三港村',
                                    value: [96.45, 452, 217]
                                },
                                {
                                    name: '龙尖村',
                                    value: [66.45, 452, 217]
                                },
                                {
                                    name: '横桥村',
                                    value: [7.45, 452, 217]
                                },
                                {
                                    name: '三坎村',
                                    value: [28.45, 452, 217]
                                },
                                {
                                    name: '大桥村',
                                    value: [28.45, 452, 217]
                                },
                                {
                                    name: '四团村',
                                    value: [28.45, 452, 217]
                                },
                            ]
                        },
                        qingcunzhen: {
                            xyData: {
                                '工农村': [121.543057, 30.917961],
                                '元通村': [121.555134, 30.900307],
                                '石海村': [121.535126, 30.871054],
                                '解放村': [121.532049, 30.908695],
                                '金王村': [121.54664, 30.88456],
                                '吴房村': [121.541649, 30.898482],
                                '南星村': [121.550168, 30.872785],
                                '湾张村': [121.536684, 30.926285],
                                '张弄村': [121.528976, 30.913316],
                            },
                            mapData: [
                                {
                                    name: '工农村',
                                    value: [7, 452, 217]
                                },
                                {
                                    name: '元通村',
                                    value: [49.4, 452, 217]
                                },
                                {
                                    name: '石海村',
                                    value: [14.5, 452, 217]
                                },
                                {
                                    name: '解放村',
                                    value: [96.45, 452, 217]
                                },
                                {
                                    name: '金王村',
                                    value: [66.45, 452, 217]
                                },
                                {
                                    name: '吴房村',
                                    value: [7.45, 452, 217]
                                },
                                {
                                    name: '南星村',
                                    value: [28.45, 452, 217]
                                },
                                {
                                    name: '湾张村',
                                    value: [28.45, 452, 217]
                                },
                                {
                                    name: '张弄村',
                                    value: [28.45, 452, 217]
                                },
                            ]
                        },
                        jinhuizhen: {
                            xyData: {
                                '北丁村': [121.575825, 30.96321],
                                '姚堂村': [121.605351, 30.99284],
                                '东星村': [121.511268, 31.005838],
                                '金汇社区': [121.508402, 30.988193],
                                '百曲村': [121.535551, 30.969099],
                                '梁典村': [121.604562, 30.969573],
                                '面丈村': [121.616084, 30.960068],
                                '乐善村': [121.581965, 30.978501],
                                '新强村': [121.517289, 30.98579],
                            },
                            mapData: [
                                {
                                    name: '北丁村',
                                    value: [7, 452, 217]
                                },
                                {
                                    name: '姚堂村',
                                    value: [49.4, 452, 217]
                                },
                                {
                                    name: '东星村',
                                    value: [14.5, 452, 217]
                                },
                                {
                                    name: '金汇社区',
                                    value: [96.45, 452, 217]
                                },
                                {
                                    name: '百曲村',
                                    value: [66.45, 452, 217]
                                },
                                {
                                    name: '梁典村',
                                    value: [7.45, 452, 217]
                                },
                                {
                                    name: '面丈村',
                                    value: [28.45, 452, 217]
                                },
                                {
                                    name: '乐善村',
                                    value: [28.45, 452, 217]
                                },
                                {
                                    name: '新强村',
                                    value: [28.45, 452, 217]
                                },
                            ]
                        },
                        nanqiaozhen: {
                            xyData: {
                                '六墩村': [121.475466, 30.895013],
                                '沈陆村': [121.452785, 30.887356],
                                '军民村': [121.456507, 30.902486],
                                '杨王村': [121.496788, 30.898024],
                                '曙光村': [121.490469, 30.90865],
                            },
                            mapData: [
                                {
                                    name: '六墩村',
                                    value: [7, 452, 217]
                                },
                                {
                                    name: '沈陆村',
                                    value: [49.4, 452, 217]
                                },
                                {
                                    name: '军民村',
                                    value: [14.5, 452, 217]
                                },
                                {
                                    name: '杨王村',
                                    value: [36.45, 452, 217]
                                },
                                {
                                    name: '曙光村',
                                    value: [66.45, 452, 217]
                                },
                            ]
                        },
                        fengpujiedao: {
                            xyData: {
                                '奉浦街道': [121.461589, 30.944536],
                            },
                            mapData: [
                                {
                                    name: '奉浦街道',
                                    value: [7, 452, 217]
                                },
                            ]
                        },
                        xidujiedao: {
                            xyData: {
                                '益民村': [121.488261, 30.983155],
                                '灯塔村': [121.431254, 30.99071],
                                '南渡村': [121.45794, 31.005893],
                                '发展村': [121.438459, 30.971154],
                                '金港村': [121.461662, 30.986048],
                                '北新村': [121.467985, 31.007927],
                            },
                            mapData: [
                                {
                                    name: '益民村',
                                    value: [7, 452, 217]
                                },
                                {
                                    name: '灯塔村',
                                    value: [49.4, 452, 217]
                                },
                                {
                                    name: '南渡村',
                                    value: [14.5, 452, 217]
                                },
                                {
                                    name: '发展村',
                                    value: [36.45, 452, 217]
                                },
                                {
                                    name: '金港村',
                                    value: [26.45, 452, 217]
                                },
                                {
                                    name: '北新村',
                                    value: [10.45, 452, 217]
                                },
                            ]
                        },
                    },
                },
                // 当前注册的地图
                currentMap: '上海',
                // 保存区块参数
                enterParams: {},
                // 当前下钻层级
                enterIndex: 0,
                // 视觉映射组件当前显示最小值
                visualMapMin: 0,
                // 视觉映射组件当前显示最大值
                visualMapMax: 100,
                // 视觉映射组件控制按钮是否显示
                visualMapCtrlShow: false,
                // 视觉映射组件 Max
                visualMapMaxPlusAble: false,
                visualMapMaxReduceAble: true,
                // 视觉映射组件 Min
                visualMapMinPlusAble: true,
                visualMapMinReduceAble: false,
                visualMapFull: true,
                showVillage: false,

                screen34PriceData: 8.9,
                showMapTitle: true,
                showLandInfo: false,
                // 镇名
                townName: '',
                // 乡镇土地流出方名称(村名)
                villageName: '',
                showLandInfo1: false,
                showLandInfo2: false,
                showLandInfo3: false
            }
        },
        mounted() {
            // 省份 geojson 拆分
            // const pro = {};
            // const proArr = [];
            // const towndata = JSON.parse(JSON.stringify(town));
            // console.log('乡镇', JSON.parse(JSON.stringify(town)));
            // for(let i = 0; i < towndata.features.length; i++){
            //     if(towndata.features[i].properties.xianqu == '崇明区'){
            //         proArr.push(towndata.features[i]);
            //     }
            // }
            // pro.type = 'FeatureCollection';
            // pro.features = proArr;
            // console.log(JSON.stringify(pro));

            this.mapHeight = this.$refs.container.clientHeight;
            console.log('容器高度改变', this.mapHeight);
            this.mapScatterChart()
            window.onresize = () => { // 根据窗口大小自适应
                this.map.resize()
            }
            this.concatScatterData(this.areaData.fengxianScatter);
            this.map.on('georoam', params => console.log('地图缩放', params))
        },
        methods: {
            // 散点坐标及数据处理
            convertData(xyData, mapData) {
                let res = [];
                for (let i = 0; i < mapData.length; i++) {
                    let geoCoord = xyData[mapData[i].name];
                    if (geoCoord) {
                        res.push({
                            name: mapData[i].name,
                            value: geoCoord.concat(mapData[i].value)
                        });
                    }
                }
                return res;
            },
            // 散点坐标数据集整理
            concatScatterData(convertData) {
                let resultScatterData = [];
                Object.keys(convertData).forEach(ele => {
                    resultScatterData = resultScatterData.concat(this.convertData(convertData[ele].xyData, convertData[ele].mapData));
                })
                console.log(resultScatterData);
                return resultScatterData;
            },

            // 地图 + 散点图 绘制
            mapScatterChart() {
                console.log('绘制开始');
                this.$echarts.registerMap('上海', json)
                this.map = this.$echarts.init(this.$refs['map-scatter'])
                this.initOption();
                this.map.on('dblclick', this.mapEnter);
            },
            // 地图点击进入对应区块
            mapEnter(params) {
                console.log('dblclick');
                // 分中心等数据信息隐藏
                this.showMapTitle = false;
                // 显示视觉映射组件控制按钮
                this.visualMapCtrlShow = true;
                // 层级索引自增
                this.enterIndex++;

                // 点击地区
                if (this.enterIndex == 1) {
                    // 存储当前地区地图参数用于缩放后刷新
                    this.enterParams = params;
                    // 存储当前地区名称
                    this.currentMap = params.data.name;
                    const name = params.data.name;
                    console.log(name);
                    console.log(this.returnAreaData(name));
                    this.$echarts.registerMap(name, this.returnAreaData(name));
                    this.map.clear();
                    this.enterOption(params);
                }
                // 点击乡镇
                else if (this.enterIndex >= 2) {
                    let showVillage = true;
                    this.areaData.fengxian.forEach(ele => {
                        if (ele.name == params.data.name) {
                            showVillage = false;
                        }
                    });
                    if (showVillage) {
                        this.villageName = params.data.name;
                        console.log(params.data.name);
                        this.showLandInfo = true;
                    } else {
                        this.townName = params.data.name;
                        console.log(params.data.name);
                        this.areaScaleOption(params, this.enterParams.name);
                    }
                }
            },
            // 返回初始上海地图
            initMap() {
                this.enterIndex = 0;
                this.currentMap = '上海';
                this.townName = '';
                this.map.clear();
                this.initOption();
            },
            // 刷新当前地图
            refreshMap(currentMap) {
                this.townName = '';
                if (currentMap == '上海') {
                    this.initMap();
                } else {
                    this.map.clear();
                    this.enterOption(this.enterParams);
                    this.enterIndex = 1;
                }
            },
            // 将配置设置为初始地图
            initOption() {
                this.showMapTitle = true;
                this.visualMapCtrlShow = false;
                this.map.setOption({
                    geo:
                        { // 设置地图的显示信息
                            map: '上海', // 注意  哪个区域的就显示哪个区域的名称
                            label: {
                                normal: { // 设置字体相关信息
                                    show: true,
                                    color: '#ffffff',
                                    fontSize: 14,
                                },
                                emphasis: { // 设置鼠标移上去hover效果
                                    show: true,
                                    color: '#fff'
                                }
                            },
                            top: '15%',
                            roam: true,
                            // 地图块单独设置样式
                            itemStyle: { // 设置整体地图块的相关显示信息
                                normal: {
                                    areaColor: '#2eb4a5',
                                    borderColor: '#ffffff',
                                    borderWidth: 1
                                },
                                emphasis: {
                                    areaColor: '#2289d2' // hover效果
                                }
                            }
                        }
                    ,
                    tooltip: { // 设置鼠标移上去的弹框显示效果
                        trigger: 'item',
                    },
                    series: [
                        { // 地图
                            name: '',
                            type: 'map',
                            mapType: '上海',
                            geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                            data: this.mapData,
                            itemStyle: {
                                normal: {label: {show: true}},
                                emphasis: {label: {show: true}}
                            },
                            tooltip: { // 设置鼠标移上去的弹框显示效果
                                trigger: 'item',
                                // 自定义弹框
                                formatter: function (params) {
                                    let name
                                    // 处理映射过的区名
                                    switch (params.data.name) {
                                        case 'A':
                                            name = '黄浦区'
                                            break
                                        case 'B':
                                            name = '静安区'
                                            break
                                        case 'C':
                                            name = '徐汇区'
                                            break
                                        case 'D':
                                            name = '长宁区'
                                            break
                                        case 'E':
                                            name = '虹口区'
                                            break
                                        case 'F':
                                            name = '杨浦区'
                                            break
                                        case 'G':
                                            name = '普陀区'
                                            break
                                        default:
                                            name = params.data.name
                                            break
                                    }

                                    const data = params.data.value
                                    let list = []
                                    let listItem = ''
                                    list.push(
                                        '<div>' + name + '</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交金额：' + data[0] + '亿元</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交面积：' + data[1] + '亩</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交数量：' + data[2] + '</div>'
                                    )
                                    listItem = list.join('')
                                    return '<div class="showBox">' + listItem + '</div>'
                                }
                            },
                            // 可缩放可平移
                            roam: true,

                        },
                        { // 散点图
                            name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: this.convertData(this.xyData, this.mapData),
                            // 散点大小
                            symbolSize: function (val) {
                                return val[2] * 20;
                            },
                            // 什么时候展示散点涟漪特效
                            showEffectOn: 'emphasis',
                            // 涟漪效果设置
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: false
                                }
                            },
                            roam: true,
                            tooltip: { // 设置鼠标移上去的弹框显示效果
                                trigger: 'item',
                                // 自定义弹框
                                formatter: function (params) {
                                    console.log(params)
                                    let name

                                    // 处理映射过的区名
                                    switch (params.data.name) {
                                        case 'A':
                                            name = '黄浦区'
                                            break
                                        case 'B':
                                            name = '静安区'
                                            break
                                        case 'C':
                                            name = '徐汇区'
                                            break
                                        case 'D':
                                            name = '长宁区'
                                            break
                                        case 'E':
                                            name = '虹口区'
                                            break
                                        case 'F':
                                            name = '杨浦区'
                                            break
                                        case 'G':
                                            name = '普陀区'
                                            break
                                        default:
                                            name = params.data.name
                                            break
                                    }

                                    const data = params.data.value
                                    let list = []
                                    let listItem = ''
                                    list.push(
                                        '<div>' + name + '</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交金额：' + data[2] + '亿元</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交面积：' + data[3] + '</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交数量：' + data[4] + '</div>'
                                    )
                                    listItem = list.join('')
                                    return '<div class="showBox">' + listItem + '</div>'
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#f4e925',
                                    shadowBlur: 10,
                                    shadowColor: '#6f6f6f'
                                }
                            },
                            zlevel: 1
                        }
                    ],
                    // 自定义名称映射(解决区域过小名称不方便显示)
                    nameMap: {
                        '黄浦区': 'A',
                        '静安区': 'B',
                        '徐汇区': 'C',
                        '长宁区': 'D',
                        '虹口区': 'E',
                        '杨浦区': 'F',
                        '普陀区': 'G'
                    }
                })
            },
            // 将配置设置为具体区块
            enterOption(params) {
                const name = params.data.name;
                this.map.setOption({
                    title: { // 设置标题
                        text: this.areaNameInit(name),
                        top: '15%',
                        left: '3%',
                        textVerticalAlign: 'canter',
                        textStyle: {
                            fontSize: 80,
                            fontWeight: 300,
                            color: '#5aecff'
                        }
                    },
                    geo: { // 设置地图的显示信息
                        map: name, // 注意  哪个区域的就显示哪个区域的名称
                        label: {
                            normal: { // 设置字体相关信息
                                show: true,
                                color: 'rgba(226,226,226,0.49)',
                                fontSize: 14,
                            },
                            emphasis: { // 设置鼠标移上去hover效果
                                show: true,
                                color: '#fff'
                            }
                        },
                        top: '15%',
                        roam: true,
                        // 地图块单独设置样式
                        itemStyle: { // 设置整体地图块的相关显示信息
                            normal: {
                                areaColor: 'rgba(20,19,29,0.64)',
                                borderColor: '#464646',
                                borderWidth: 1,
                            },
                            emphasis: {
                                areaColor: 'rgba(28,27,41,0.64)' // hover效果
                            }
                        }
                    },
                    tooltip: { // 设置鼠标移上去的弹框显示效果
                        trigger: 'item',
                    },
                    // 视觉映射组件
                    visualMap: {
                        min: 0,
                        max: 100,
                        range: [this.visualMapMin, this.visualMapMax],
                        right: 150,
                        bottom: 130,
                        itemHeight: 360,
                        itemWidth: 32,
                        color: ['#f9ff3a', '#daa83f', '#ce3e72', '#AD187E', '#460AD6'],
                        text: ['高', '低'],           // 文本，默认为数值文本
                        calculable: true,
                        dimension: 2,
                        seriesIndex: 1,
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 20,
                        }
                    },
                    series: [
                        { // 地图
                            name: '',
                            type: 'map',
                            mapType: name,
                            geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                            data: this.areaData.fengxian,
                            itemStyle: {
                                normal: {label: {show: true}},
                                emphasis: {label: {show: true}}
                            },
                            tooltip: { // 设置鼠标移上去的弹框显示效果
                                trigger: 'item',
                                // 自定义弹框
                                formatter: function (params) {
                                    let name = params.data.name;
                                    const data = params.data.value;
                                    let list = []
                                    let listItem = ''
                                    list.push(
                                        '<div>' + name + '</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交金额：' + data[0] + '亿元</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交面积：' + data[1] + '</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交数量：' + data[2] + '</div>'
                                    )
                                    listItem = list.join('')
                                    return '<div class="showBox">' + listItem + '</div>'
                                }
                            },
                            // 可缩放可平移
                            roam: true,
                        },
                        { // 散点图
                            name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: this.concatScatterData(this.areaData.fengxianScatter),
                            // 散点大小
                            symbolSize: function (val) {
                                return val[2] / 2;
                            },
                            // 什么时候展示散点涟漪特效
                            showEffectOn: 'render',
                            // 涟漪效果设置
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: false
                                }
                            },
                            roam: true,
                            tooltip: { // 设置鼠标移上去的弹框显示效果
                                trigger: 'item',
                                // 自定义弹框
                                formatter: function (params) {
                                    console.log(params)
                                    let townName

                                    // 处理映射过的区名
                                    switch (params.data.name) {
                                        case 'A':
                                            townName = '黄浦区'
                                            break
                                        case 'B':
                                            townName = '静安区'
                                            break
                                        case 'C':
                                            townName = '徐汇区'
                                            break
                                        case 'D':
                                            townName = '长宁区'
                                            break
                                        case 'E':
                                            townName = '虹口区'
                                            break
                                        case 'F':
                                            townName = '杨浦区'
                                            break
                                        case 'G':
                                            townName = '普陀区'
                                            break
                                        default:
                                            townName = params.data.name
                                            break
                                    }

                                    const data = params.data.value
                                    let list = []
                                    let listItem = ''
                                    list.push(
                                        '<div>' + townName + '</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交金额：' + data[2] + '亿元</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交面积：' + data[3] + '</div>' +
                                        '<div style="display: flex">' +
                                        '&nbsp&nbsp成交数量：' + data[4] + '</div>'
                                    )
                                    listItem = list.join('')
                                    return '<div class="showBox">' + listItem + '</div>'
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#f4e925',
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            zlevel: 1
                        }
                    ],
                    // 自定义名称映射(解决区域过小名称不方便显示)
                    nameMap: {
                        '黄浦区': 'A',
                        '静安区': 'B',
                        '徐汇区': 'C',
                        '长宁区': 'D',
                        '虹口区': 'E',
                        '杨浦区': 'F',
                        '普陀区': 'G'
                    }
                })
            },
            // 将配置设置为乡镇点击放大后
            areaScaleOption(params, name) {
                const townName = params.data.name;
                const scaleData = this.areaData.fengxian;
                let options = this.map.getOption();
                console.log(options);
                // 放大倍数
                options.geo[0].zoom = 1.8;
                switch (townName) {
                    case '海湾镇' :
                        options.geo[0].center = [121.631796, 30.877117];
                        break;
                    case '柘林镇' :
                        options.geo[0].center = [121.472171, 30.855174];
                        break;
                    case '南桥镇':
                        options.geo[0].center = [121.490469, 30.90865];
                        break;
                    case '庄行镇':
                        options.geo[0].center = [121.432871, 30.934304];
                        break;
                    case '奉浦街道':
                        options.geo[0].center = [121.461589, 30.944536];
                        break;
                    case '西渡街道':
                        options.geo[0].center = [121.461254, 30.98071];
                        break;
                    case '金汇镇':
                        options.geo[0].center = [121.535551, 30.969099];
                        break;
                    case '青村镇':
                        options.geo[0].center = [121.532049, 30.908695];
                        break;
                    case '奉城镇':
                        options.geo[0].center = [121.651845, 30.93371];
                        break;
                    case '四团镇':
                        options.geo[0].center = [121.733311, 30.93543];
                        break;
                }
                for (let i = 0; i < scaleData.length; i++) {
                    if (scaleData[i].name == townName) {
                        // options.geo.itemStyle.normal.borderWidth = 0;
                        options.geo[0].regions = [{
                            name: townName,
                            selected: true,
                            itemStyle: {
                                emphasis: {
                                    areaColor: 'rgba(28,27,41,0.64)',
                                    borderColor: '#ffffff',
                                    borderWidth: 2
                                }
                            }
                        }]
                    }
                }
                this.map.clear();
                this.map.setOption(options);
            },


            // 返回点击的区块数据
            returnAreaData(name) {
                switch (name) {
                    case 'A':
                        return HuangPu;
                        break;
                    case 'B':
                        return JingAn;
                        break;
                    case 'C':
                        return XuHui;
                        break;
                    case 'D':
                        return ChangNing;
                        break;
                    case 'E':
                        return HongKou;
                        break;
                    case 'F':
                        return YangPu;
                        break;
                    case 'G':
                        return PuTuo;
                        break;
                    case '浦东新区':
                        return PuDong;
                        break;
                    case '奉贤区':
                        return FengXian;
                        break;
                    case '金山区':
                        return JinShan;
                        break;
                    case '闵行区':
                        return MinHang;
                        break;
                    case '松江区':
                        return SongJiang;
                        break;
                    case '青浦区':
                        return QingPu;
                        break;
                    case '宝山区':
                        return BaoShan;
                        break;
                    case '嘉定区':
                        return JiaDing;
                        break;
                    case '崇明区':
                        return ChongMing;
                        break;
                    default:
                        return null;
                        break;
                }
            },
            // 地区名称映射
            areaNameInit(name) {
                switch (name) {
                    case 'A':
                        return '黄浦区';
                        break;
                    case 'B':
                        return '静安区';
                        break;
                    case 'C':
                        return '徐汇区';
                        break;
                    case 'D':
                        return '长宁区';
                        break;
                    case 'E':
                        return '虹口区';
                        break;
                    case 'F':
                        return '杨浦区';
                        break;
                    case 'G':
                        return '普陀区';
                        break;
                    default:
                        return name;
                        break;

                }
            },

            // 视觉映射控制按钮组
            visualMaxPlus() {
                if (this.visualMapMax < 100) {
                    this.visualMapMax += 5;
                    console.log('max', this.visualMapMax);
                    // 最大值上调时，最大值一定不等于最小值，所以开启最大值下调与最小值上调按钮
                    this.visualMapMaxReduceAble = true;
                    this.visualMapMinPlusAble = true;
                    this.refreshMap(this.currentMap);
                    if (this.visualMapMax == 100) {
                        // 最大值等于 100 时阻止继续上调
                        this.visualMapMaxPlusAble = false;
                    }
                }
            },
            visualMaxReduce() {
                if (this.visualMapMax - this.visualMapMin >= 5) {
                    this.visualMapMax -= 5;
                    console.log('max', this.visualMapMax);
                    // 最大值下调时，最大值一定不等于 100， 所以开启最大值上调按钮
                    this.visualMapMaxPlusAble = true;
                    this.refreshMap(this.currentMap);
                    if (this.visualMapMax == this.visualMapMin) {
                        // 最大值等于最小值时，阻止最大值继续下调
                        this.visualMapMinPlusAble = false;
                        this.visualMapMaxReduceAble = false;
                    }
                }
            },
            visualMapShowFull() {
                this.visualMapMax = 100;
                this.visualMapMin = 0;
                this.visualMapMaxPlusAble = false;
                this.visualMapMinReduceAble = false;
                this.refreshMap(this.currentMap);
            },
            visualMinPlus() {
                if (this.visualMapMin + 5 <= this.visualMapMax) {
                    this.visualMapMin += 5;
                    console.log('min', this.visualMapMin);
                    // 最小值上调时，最小值一定不等于 0， 所以开启最小值下调按钮
                    this.visualMapMinReduceAble = true;
                    this.refreshMap(this.currentMap);
                    if (this.visualMapMin == this.visualMapMax) {
                        // 最小值等于最大值时，阻止最小值继续上调
                        this.visualMapMinPlusAble = false;
                        this.visualMapMaxReduceAble = false;
                    }
                }
            },
            visualMinReduce() {
                if (this.visualMapMin != 0) {
                    this.visualMapMin -= 5;
                    console.log('min', this.visualMapMin);
                    // 最小值下调时则一定不等于最大值，所以开启最大值下调和最小值上调按钮
                    this.visualMapMinPlusAble = true;
                    this.visualMapMaxReduceAble = true;
                    this.refreshMap(this.currentMap);
                    if (this.visualMapMin == 0) {
                        // 最小值等于 0 时，阻止最小值继续下调
                        this.visualMapMinReduceAble = false;
                    }
                }
            },

            controlLandInfo(e) {
                this.showLandInfo = false;
            },
            landInfoClick1() {
                this.showLandInfo1 = !this.showLandInfo1;
                this.showLandInfo2 = false;
                this.showLandInfo3 = false;
            },
            landInfoClick2() {
                this.showLandInfo2 = !this.showLandInfo2;
                this.showLandInfo1 = false;
                this.showLandInfo3 = false;
            },
            landInfoClick3() {
                this.showLandInfo3 = !this.showLandInfo3;
                this.showLandInfo1 = false;
                this.showLandInfo2 = false;
            },
            closeAllInfo() {
                this.showLandInfo1 = false;
                this.showLandInfo2 = false;
                this.showLandInfo3 = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .chart {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .charts {
            min-width: 30px;
            min-height: 30px;
            width: 100%;
            height: 100%;
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

        /*地图操作按钮*/
        .map-btn-box {
            position: absolute;
            right: 3%;
            bottom: 2%;
            display: flex;
            font-size: 24px;
            /*地图按钮*/
            .init-map, .refresh-map {
                width: 70px;
                height: 70px;
                z-index: 999;
                cursor: pointer;
            }

            /*初始化地图按钮*/
            .init-map {
                background-image: url("../assets/init.png");
                background-size: 100% 100%;
            }

            /*刷新当前地图按钮*/
            .refresh-map {
                margin-left: 20px;
                background-image: url("../assets/refresh.png");
                background-size: 100% 100%;
            }
        }

        /*视觉映射组件*/
        .visual-btn-box {
            position: absolute;
            right: 110px;
            bottom: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .visualMaxPlus {
                font-size: 35px;
                color: #ffffff;
                user-select: none;

                &.disable {
                    color: #525252;
                }
            }

            .visualMaxReduce {
                font-size: 45px;
                color: #ffffff;
                user-select: none;
                margin-bottom: 100px;

                &.disable {
                    color: #525252;
                }
            }

            .visualFull {
                width: 18px;
                font-size: 18px;
                color: #ffffff;
                user-select: none;
                margin-bottom: 100px;

                &.disable {
                    color: #525252;
                }
            }

            .visualMinPlus {
                font-size: 35px;
                color: #ffffff;
                user-select: none;

                &.disable {
                    color: #525252;
                }
            }

            .visualMinReduce {
                font-size: 45px;
                color: #ffffff;
                user-select: none;

                &.disable {
                    color: #525252;
                }
            }
        }

        /*村土地流转信息*/
        #land-info {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: rgb(12, 44, 107);
            background-image: url("../assets/land-bg.jpg");
            background-size: 100% 100%;
            z-index: 9999;

            img {
                width: 1200px;
                height: 860px;
            }

            .land-box {
                width: 2000px;
                height: 1410px;
                margin: 343px 80px 167px;

                .land-info-title {
                    position: absolute;
                    color: #5aecff;
                    font-size: 60px;
                    margin: 50px 0 0 80px;
                }
            }

            .point-animation {
                @keyframes pointScale {
                    0% {
                        opacity: 0.7;
                        transform: scale(1);
                    }
                    100% {
                        opacity: 0.3;
                        transform: scale(2.5);
                    }
                }
                animation: pointScale 1.5s infinite alternate;
            }

            .land-img-info-click1 {
                position: absolute;
                top: 780px;
                left: 600px;
                width: 350px;
                height: 290px;

                .info {
                    position: absolute;
                    left: -440px;
                    top: 40px;
                    line-height: 40px;
                    color: #ffffff;
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius: 20px;
                    padding: 40px;
                    user-select: none;
                }

                .point {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background-color: #f9ff3a;
                    opacity: 0.7;
                }
            }

            .land-img-info-click2 {
                position: absolute;
                top: 1050px;
                left: 1030px;
                width: 300px;
                height: 350px;

                .info {
                    position: absolute;
                    width: 400px;
                    left: 50px;
                    top: 180px;
                    line-height: 40px;
                    color: #ffffff;
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius: 20px;
                    padding: 40px;
                    user-select: none;
                }

                .point {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    top: 20%;
                    left: 55%;
                    border-radius: 50%;
                    background-color: #f9ff3a;
                    opacity: 0.7;
                }
            }

            .land-img-info-click3 {
                position: absolute;
                top: 720px;
                left: 1200px;
                width: 420px;
                height: 310px;

                .info {
                    position: absolute;
                    width: 400px;
                    left: 350px;
                    top: 80px;
                    line-height: 40px;
                    color: #ffffff;
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius: 20px;
                    padding: 40px;
                    user-select: none;
                }

                .point1 {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    top: 75%;
                    left: 35%;
                    border-radius: 50%;
                    background-color: #f9ff3a;
                    opacity: 0.7;
                }

                .point2 {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    top: 35%;
                    left: 55%;
                    border-radius: 50%;
                    background-color: #f9ff3a;
                    opacity: 0.7;
                }
            }
        }

    }
</style>
