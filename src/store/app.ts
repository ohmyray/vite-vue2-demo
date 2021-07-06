const state = {
  mapInstance: null,
  mapZoomLevel: 0,
  widgetArea: null,
};
const mutations = {
  setMap(state, instance) {
    state.mapInstance = instance;
    console.warn("地图初始化完成");
  },
  setZoom(state, level) {
    state.mapZoomLevel = level;
    console.log(level);
  },
  setWidgetArea(state, node) {
    state.widgetArea = node;
  },
};
const actions = {};
const getters = {
  getMap(state) {
    return state.mapInstance;
  },
  getWidgetArea(state) {
    return state.widgetArea;
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
