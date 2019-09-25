import axios from "axios";


const instance = axios.create({
    baseURL: 'https://accountservicereact.herokuapp.com/account'
  });

//how to set a common header on request
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN from instance';

//how to set a common header on request on specefic method
instance.defaults.headers.post['Content-Type'] =  'application/json';


instance.interceptors.request.use(requestConfg=>{
    console.log("request : ",requestConfg);
    //requestConfg.timeout=5000000;
    //Edit request config
    return requestConfg;
},error=>{
    console.log("axios request intercetor error :"+error);
    return Promise.reject();
});

instance.interceptors.response.use(responsetConfg=>{
    console.log("response : ",responsetConfg);
    return responsetConfg;
},error=>{
    console.log("axios response intercetor error :"+error);
    return Promise.reject();
});

export default instance;