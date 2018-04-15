<template>
    <section class="file-item">
        <img class="file-img" :src="cardData.url">
        <div class="file-name c-ellipsis">
            {{cardData.name}}
        </div>
        <div class="file-size">
            {{byte2Str(cardData.size)}}
        </div>
        <el-button class="btn" @click.stop="handleDelete(cardData.name)">删除</el-button>
        <a download :href="cardData.url" @click.stop="click">
            <el-button class="btn">下载</el-button>
        </a>
    </section>
</template>

<script>

import {byte2Str} from 'assets/js/utils';
import {Button} from 'element-ui';

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
                    // name: 'aaa.png',
                    // url: 'https://zheng-imgupload.oss-cn-beijing.aliyuncs.com/1S4223035-0.jpg?Expires=1522753876&OSSAccessKeyId=TMP.AQFEpmuVKq-rQbtwWyT-BZ0Hk3QSAwdZjpEHST6K3Oh1KNcaP5a7lZ8lyhVzADAtAhQBbJLSonS-5H2eDGyDJPytPd9fjwIVAJzFAweHTQOdQk2YTbOUIZk5j0Lm&Signature=czCS%2BtnMXAu9ji1s7Tk6hjFYcXo%3D',
                    // size: '3.2131KB'
                };
            }
        }
    },
    computed: {
    },
    components: {
        [Button.name]: Button
    },
    methods: {
        byte2Str(size) {
            return byte2Str(size);
        },
        handleDelete(fileName) {
            this.$store.dispatch('deleteFile', fileName);
        },
        click() {

        }
    }
};
</script>

<style lang="less" rel="stylesheet/less">
    .c-ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .file-item{
        display: flex;
        padding: 10px;
        align-items: center;
        font-size: 12px;
        justify-content: space-between;
        &:hover{
            background: #f5f5f6
        }
        &:active{
            background: #f5f5f6
        }
        .file-size{
            color: #7eb631;
        }
        .file-img{
            width: 60px;
            height: 60px;
            flex-shrink: 0;
        }
        .file-name{
            width: 400px;
            text-align: center;
            color: #409EFF;
        }
        .btn{
            margin-left: 20px
        }
    }

</style>
