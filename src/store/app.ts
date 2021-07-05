const state = {
  mapInstance: null,
  mapZoomLevel: 0,
};
const mutations = {
    setMap( state,instance) {
        state.mapInstance = instance
        console.warn('地图初始化完成')
    },
    setZoom( state, level) {
        state.mapZoomLevel = level
        console.log(level)
    }
};
const actions = {
    
};
const getters = {
  getMap(state) {
    return state.mapInstance;
  },
};

// 不要忘记把state, mutations等暴露出去。
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
