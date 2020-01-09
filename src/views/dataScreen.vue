<template>
    <div id="data-screen" @contextmenu.prevent="callback('contextmenu')">
        <screen1></screen1>
        <screen2></screen2>
        <screen34></screen34>
        <screen5></screen5>
        <screen6></screen6>
    </div>
</template>

<script>
    import screen1 from './screen1';
    import screen2 from './screen2';
    import screen34 from './screen34';
    import screen5 from './screen5';
    import screen6 from './screen6';
    export default {
        name: "data-screen",
        components: {
            screen1,
            screen2,
            screen34,
            screen5,
            screen6,
        },
        methods:{
            callback(eventName){
                console.log('有反应了！', eventName);
            }
        },
    }
</script>

<style scoped lang="scss">
    #data-screen {
        display: flex;
        width: 6480px;
        height: 1920px;
        background-image: url(../assets/bg.png);
        background-size: 100% 100%;
    }
</style>