export default {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    },
    firstIncrement(state) {
        state.firstIncrement = true
    }
}