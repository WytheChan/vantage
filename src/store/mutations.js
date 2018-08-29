const mutations = {
    inShouye(state){  //进入首页
        state.isShouye = true
    },
    outShouye(state){ //离开首页
        state.isShouye = false
    },
}

export default mutations;