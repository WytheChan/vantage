import axios from 'axios';

//基本配置
const baseUrl = "/hy/public/index.php/index/Index/";
//ajax通用配置
let ajax=axios.create({
    baseURL:baseUrl
})
//添加响应拦截器
ajax.interceptors.response.use(res=>{
    return res.data
})


export default ajax