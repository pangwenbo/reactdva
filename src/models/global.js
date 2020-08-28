export default {
  namespace: "global",

  state: {
    userInfo: {
      id: null,
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *setUserInfo({ payload }, { put }) {
      // eslint-disable-line
      yield put({ type: "set_userInfo", payload });
    },
  },

  reducers: {
    set_userInfo(state, { payload }) {
      return { ...state, userInfo: payload };
    },
  },
};
