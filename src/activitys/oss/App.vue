<template>
    <div id="app">
        <uploadWrap></uploadWrap>
        <fileList></fileList>
    </div>
</template>

<script type="es6">
    import fileList from "./components/file-list";
    import uploadWrap from "./components/upload-wrap";

    export default {
        name: 'app',
        data ()
        {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            fileList,
            uploadWrap
        }
    }


</script>

<style lang="less">

</style>
