const mutations = {
    inShouye(state){  //进入首页
        state.isShouye = true
    },
    outShouye(state){ //离开首页
        state.isShouye = false
    },
    changeLang(state,lang){ //切换语言
        state.lang = lang

    },
    // setCaseList(state,data){   //设置案例列表
    //     state.caseList = data
    // },
    // setDynamicList(state,data){   //设置动态列表
    //     state.dynamicList = data
    // },
    // setAboutPage(state,page){    //设置 关于页面 的页码
    //     state.aboutPage = page
    // }
    setAboutData(state,{caselist,dynamic,page}){
        state.caseList = caselist
        state.dynamicList = dynamic
        state.aboutPage = page
    }
}

export default mutations;