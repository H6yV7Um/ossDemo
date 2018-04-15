<template>
    <section class="upload-wrap">
        <Upload
            class="upload-demo"
            drag
            action="/api/upload"
            :on-success="success"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </Upload>

    </section>
</template>

<script>
import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex';
import {Upload} from 'element-ui';

export default {
    name: 'upload-wrap',
    mounted() {
    },
    data() {
        return {
        };
    },
    props: {

    },
    computed: {
    },
    components: {
        Upload
    },
    methods: {
        success(response, file, fileList) {
            console.log('response:', response, 'file:', file, 'fileList:', fileList);
            this.fetchFileListData();
        },
        ...mapActions(['fetchFileListData'])

    }
};
</script>

<style lang="less" rel="stylesheet/less">
    .upload-wrap{
        padding: 20px;
        text-align: center;
    }
</style>
