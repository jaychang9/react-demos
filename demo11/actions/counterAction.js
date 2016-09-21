/**
 * Created by haibao on 2016/9/8.
 */
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
//导出加一的方法
export function increase() {
    console.log("execute action=>increase");
    return {
        type: INCREMENT_COUNTER
    }
}
//导出减一的方法
export function decrease() {
    console.log("execute action=>decrease");
    return {
        type: DECREMENT_COUNTER
    }
}
//导出奇数加一的方法，该方法返回一个方法，包含dispatch和getState两个参数，dispatch用于执行action的方法，getState返回state
export function increaseIfOdd() {
    console.log("execute action=>increaseIfOdd");
    return (dispatch, getState) => {
        //获取state对象中的counter属性值
        const { counter } = getState();
        console.log("current count = "+counter);

        //偶数则返回
        if (counter % 2 === 0) {
            return;
        }
        //没有返回就执行加一
        dispatch(increase());
    }
}
//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后加一
export function increaseAsync(delay = 1000) {
    console.log("execute action=>increaseAsync");
    return dispatch => {
        setTimeout(() => {
            dispatch(increase());
        }, delay);
    };
}

//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export