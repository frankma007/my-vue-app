import { createStore } from 'vuex';
import uavs from './modules/uavs';
import uavFlocks from './modules/uavFlocks';
import birdFlocks from './modules/birdFlocks';

const store = createStore({
  modules: {
    uavs,
    uavFlocks,
    birdFlocks,
  },
});

export default store;