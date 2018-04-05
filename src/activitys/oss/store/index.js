/**
 * @file create a new store
 * @author zhengjiaqi01<zhengjiaqi01@baidu.com>
 */
import Vue from 'vue';
import Vuex from 'vuex';
import fileList from './modules/file-list';

Vue.use(Vuex);

export default () => {
    return new Vuex.Store({
        modules: {
            fileList
        }
    });
};
