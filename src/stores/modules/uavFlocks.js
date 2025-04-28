const state = {
  uavFlocks: [], // 无人机群数据
};

const mutations = {
  setUAVFlocks(state, uavFlocks) {
    state.uavFlocks = uavFlocks;
  },
};

const actions = {
  fetchUAVFlocks({ commit }) {
    // 模拟异步获取无人机群数据
    const uavFlocks = [{ id: 1, name: 'UAVFlock1' }, { id: 2, name: 'UAVFlock2' }];
    commit('setUAVFlocks', uavFlocks);
  },
};

const getters = {
  getUAVFlocks: (state) => state.uavFlocks,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};