/**
 * Created by Administrator on 2016/12/30.
 */
export const increment = state => {
    state.count++
    state.history.push('increment')
}

export const decrement = state => {
    state.count--
    state.history.push('decrement')
}
