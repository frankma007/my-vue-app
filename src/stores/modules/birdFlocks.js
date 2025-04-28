const state = {
  birdFlocks: [], // 鸟群数据
};

const mutations = {
  setBirdFlocks(state, birdFlocks) {
    state.birdFlocks = birdFlocks;
  },
};

const actions = {
  fetchBirdFlocks({ commit }) {
    // 模拟异步获取鸟群数据
    const birdFlocks = [{ id: 1, name: 'BirdFlock1' }, { id: 2, name: 'BirdFlock2' }];
    commit('setBirdFlocks', birdFlocks);
  },
};

const getters = {
  getBirdFlocks: (state) => state.birdFlocks,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};