import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        title: "Faizan",

    },
    mutations: {
        updateMessage(state, title) {
            state.title = title
        }
    }
    // actions: {
    //     newTitle(context, payload) {
    //         return new Promise((resolve) => {
    //             setTimeout(() => {
    //                 context.commit("setTitle", payload);
    //                 resolve("ok")
    //             });
    //         })
    //     }

    // },

});

export default function () {
    return store;
}
