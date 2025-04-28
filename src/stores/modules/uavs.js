const state = {
  uavs: [
    { id: 1, name: 'UAV5' },
    { id: 2, name: 'UAV6' },
  ], // 无人机数据
};

const mutations = {
  setUAVs(state, uavs) {
    state.uavs = uavs;
  },
};

const actions = {
  fetchUAVs({ commit }) {
    // 模拟异步获取无人机数据
    const uavs = [{ id: 1, name: 'UAV1' }, { id: 2, name: 'UAV2' }];
    commit('setUAVs', uavs);
  },
};

const getters = {
  getUAVs: (state) => state.uavs,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};