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
    setAboutData(state,{caselist,dynamic,page}){   //设置关于页的数据
        state.caseList = caselist
        state.dynamicList = dynamic
        state.aboutPage = page
    },
    setClassifyList(state,data){     //设置行业大类
        state.classifyList = data 
    },
    setJobList(state,data){  //设置招聘列表
        state.jobList = data
    },
    setJobPage(state,data){  //设置招聘列表分页
        state.jobPage = data
    }
}

export default mutations;