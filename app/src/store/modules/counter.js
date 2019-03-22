const state = {
    count: 0,
}

export const getters = {
    countIsOdd(state) {
        return !(state.count % 2)
    }
}

export const actions = {
    decrement({commit}) {
        commit('decrement')
    },
    increment({commit}) {
        commit('increase')
    },
    incrementDelay({commit}) {
        setTimeout(() => {
            commit('increase')
        }, 500)
    },
    incrementDelayWrong({commit}) {
        commit('increaseDelay')
    }
}

export const mutations = {
    decrement(state) {
        if(state.count>=1)
        state.count--;
    },
    increase(state) {
        state.count++
    },
    increaseDelay(state) {
        setTimeout(() => {
            state.count++
        }, 500)
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
