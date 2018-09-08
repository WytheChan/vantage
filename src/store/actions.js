import axios from "../api/index.js";

const actions = {
  //获取关于页的数据
  getAboutData(context,url) {
    
    axios.post(url)
      .then(res => {
        // console.log(res)
        let caseList = res.case.data,
            dynamicList = res.dynamic.data,
            page = res.page_case;


        context.commit('setCaseList', caseList)  //获取案例列表
        context.commit('setDynamicList',dynamicList) //获取动态列表


      })
  },
}

export default actions;
