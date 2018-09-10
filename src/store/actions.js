import axios from "../api/index.js";

const actions = {
  //获取关于页的数据
  getAboutData(context,url) {
    
    axios.post(url)
      .then(res => {
        // console.log(res)
        let caseList = res.case.data,
            dynamicList = res.dynamic.data;

        let data = {};
        let page = {
          page_case : res.case.total,
          page_dynamic : res.dynamic.total
        };
        data['caselist'] = caseList
        data['dynamic'] = dynamicList
        data['page'] = page

        context.commit('setAboutData',data)


      })
  },
  //获取行业数据
  //获取行业大类
  getClassifyList(context){
    axios.post("classification").then(res => {
      // console.log(res);
      if(res.success == 1){
        context.commit('setClassifyList',res.classification)
      }
    });
  },
  //获取招聘列表
  getJobList(context,{url,cid,tid}){
    axios.post(url,{
      cid:cid,
      tid:tid
    }).then(res => {
      // console.log(res);
      if(res.success == 1){
        context.commit('setJobList',res.recruit.data)
        context.commit('setJobPage',res.recruit.total)
      }
    });
  },
}

export default actions;
