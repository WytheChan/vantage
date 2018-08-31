const mutations = {
    inShouye(state){  //进入首页
        state.isShouye = true
    },
    outShouye(state){ //离开首页
        state.isShouye = false
    },
    changeLang(state,lang){ //切换语言
        state.lang = lang

    }
}

export default mutations;