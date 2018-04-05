<template>
    <section class="file-list">
        <fileItem :cardData="item" :key="index" v-for="(item, index) in getFileListData.objects"></fileItem>
    </section>
</template>

<script>
import fileItem from './file-item';
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'file-item',
    mounted() {
        this.fetchFileListData();
    },
    data() {
        return {
        };
    },
    props: {

    },
    computed: {
        ...mapGetters(['getFileListData'])
    },
    components: {
        fileItem
    },
    methods: {
        ...mapActions(['fetchFileListData'])
    }
};
</script>

<style lang="less" rel="stylesheet/less">
    .file-list{

    }

</style>
