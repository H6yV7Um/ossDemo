<template>
    <section class="file-list">
        <section class="header">
            <div class="holder"></div>
            <div class="herader-name">文件名</div>
            <div>文件大小</div>
            <div class="holder2"></div>
            <div class="holder2"></div>
        </section>
        <fileItem @click.native="handleClick(item)" :cardData="item" :key="index" v-for="(item, index) in getFileListData.objects"></fileItem>
        <modal v-model="modalShow" class="img-preview">
            <img :src='img.url'>
            <h3 class="img-name">文件名: {{img.name}}</h3>
            <p class="img-url">
                <span class="bold">URL: </span><a :href="img.url" target="_blank">{{img.url}}</a>
            </p>
        </modal>
    </section>
</template>

<script>
import fileItem from './file-item';
import modal from 'components/modal.vue';
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'file-item',
    mounted() {
        this.fetchFileListData();
    },
    data() {
        return {
            modalShow: false,
            img: {}
        };
    },
    props: {

    },
    computed: {
        ...mapGetters(['getFileListData'])
    },
    components: {
        fileItem,
        modal
    },
    methods: {
        handleClick(img) {
            console.log('img:', img);
            this.img = img;
            this.modalShow = true;
        },
        ...mapActions(['fetchFileListData'])
    }
};
</script>

<style lang="less" rel="stylesheet/less">
    .c-ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .file-list{
        padding: 0 20px;
        .header{
            display: flex;
            justify-content: space-between;
            text-align: center;
            padding: 10px;
            .holder{
                width: 60px;
            }
            .holder2{
                width: 90px;
            }
            .herader-name{
                width: 400px;
            }
        }
        .img-preview{
            .modal-wrapper{
                max-width: 400px;
            }
            img{
                width: 100%;
            }
            .img-name{
                font-size: 14px;
                word-break:break-all;
            }
            .img-url{
                font-size: 12px;
                word-break:break-all;
                a{
                    color: #000;
                }
                .bold{
                    font-size: 14px;
                }
            }
        }

    }

</style>
