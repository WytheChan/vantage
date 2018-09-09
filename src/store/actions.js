import axios from "../api/index.js";

const actions = {
  //获取关于页的数据
  getAboutData(context,url) {
    
    axios.post(url)
      .then(res => {
        // console.log(res)
        let caseList = res.case.data,
            dynamicList = res.dynamic.data;


        // context.commit('setCaseList', caseList)  //获取案例列表
        // context.commit('setDynamicList',dynamicList) //获取动态列表
        let data = {};
        let page = {
          page_case : res.case.total,
          page_dynamic : res.dynamic.total
        }
        data['caselist'] = caseList
        data['dynamic'] = dynamicList
        data['page'] = page

        context.commit('setAboutData',data)


      })
  },
}

export default actions;
