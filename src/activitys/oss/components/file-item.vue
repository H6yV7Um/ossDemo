<template>
    <section class="file-item">
        <img class="file-img" :src="cardData.url">
        <div class="file-name">
            {{cardData.name}}
        </div>
        <div class="file-size">
            {{byte2Str(cardData.size)}}
        </div>
    </section>
</template>

<script>

import {byte2Str} from 'assets/js/utils';

export default {
    name: 'file-item',
    data() {
        return {
        };
    },
    props: {
        cardData: {
            type: Object,
            default() {
                return {
                    name: 'aaa.png',
                    url: 'https://zheng-imgupload.oss-cn-beijing.aliyuncs.com/1S4223035-0.jpg?Expires=1522753876&OSSAccessKeyId=TMP.AQFEpmuVKq-rQbtwWyT-BZ0Hk3QSAwdZjpEHST6K3Oh1KNcaP5a7lZ8lyhVzADAtAhQBbJLSonS-5H2eDGyDJPytPd9fjwIVAJzFAweHTQOdQk2YTbOUIZk5j0Lm&Signature=czCS%2BtnMXAu9ji1s7Tk6hjFYcXo%3D',
                    size: '3.2131KB'
                };
            }
        }
    },
    computed: {
    },
    components: {
    },
    methods: {
        byte2Str(size) {
            return byte2Str(size);
        }
    }
};
</script>

<style lang="less" rel="stylesheet/less">
    .file-item{
        display: flex;
        padding: 10px;
        align-items: center;
        &:hover{
            background: #f5f5f6
        }
        &:active{
            background: #f5f5f6
        }
        .file-img{
            width: 60px;
            height: 60px;
        }
        .file-name{
            min-width: 200px;
            padding: 0 20px;
            text-align: center;
        }
    }

</style>
