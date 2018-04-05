/**
 * @file search api
 * @author liuyuekeng<liuyuekeng@baidu.com>
 */
import Vue from 'vue';
import axios from 'axios';

const state = () => {
    return {
        fileListRes: {
        }
    };
};

const mutations = {
    SET_FILELIST_RES(state, res) {
        Vue.set(state, 'fileListRes', res);
    }
};
const actions = {
    fetchFileListData({commit, getters, state}) {
        return axios.get('/api/list')
            .then(response => {
                console.log('response:', response);
                commit('SET_FILELIST_RES', response.data);
            });
    }
};

const getters = {
    getFileListRes(state) {
        return state.fileListRes;
    },
    getFileListData(state) {
        const res = state.fileListRes;
        if (res.errorCode === 0) {
            return res.data;
        } else {
            return {};
        }
    }
};

/* eslint-disable */
export default {
    state,
    mutations,
    actions,
    getters
};
/* eslint-enable */
