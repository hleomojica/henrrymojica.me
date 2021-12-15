import isScreen from "@/core/screenHelper";

export default {
  namespaced: true,
  state: {
    sidebarClose: true,
    sidebarStatic: true,
    sidebarActiveElement: null,
    chatOpen: false,
    chatNotificationIcon: false,
    chatNotificationPopover: false,
    helperOpened: false,
  },
  mutations: {
    toggleSidebar(state) {
      const nextState = !state.sidebarStatic;

      localStorage.sidebarStatic = nextState;
      state.sidebarStatic = nextState;

      if (!nextState && (isScreen("lg") || isScreen("xl"))) {
        state.sidebarClose = true;
      }
    },
    switchSidebar(state, value) {
      if (value) {
        state.sidebarClose = value;
      } else {
        state.sidebarClose = !state.sidebarClose;
      }
    },
    handleSwipe(state, e) {
      if ("ontouchstart" in window) {
        if (e.direction === 4) {
          state.sidebarClose = false;
        }

        if (e.direction === 2 && !state.sidebarClose) {
          state.sidebarClose = true;
        }
      }
    },
    changeSidebarActive(state, index) {
      state.sidebarActiveElement = index;
    },
    toggleHelper(state, payload) {
      state.helperOpened = payload;
    },
  },
  actions: {
    toggleSidebar({ commit }) {
      commit("toggleSidebar");
    },
    switchSidebar({ commit }, value) {
      commit("switchSidebar", value);
    },
    handleSwipe({ commit }, e) {
      commit("handleSwipe", e);
    },
    changeSidebarActive({ commit }, index) {
      commit("changeSidebarActive", index);
    },
    toggleHelper({ commit }, payload) {
      commit("toggleHelper", payload);
    },
  },
};
