import axios from 'axios';
import Configs from "../core/Configs";

export default class Api {
    http;
    constructor() {
        axios.defaults.headers.common['Authorization'] = Configs.HEADER_TOKEN;
        this.http = axios;
    }

    getTasks = (params)=> this.http.get(Configs.BASE_URL, {
        params:{
            account:Configs.ACCOUNT_ID,
            category:Configs.CATEGORY,
            ...params
        }
    }).then(res => res);

    addTask = (address)=> {
        let cfg = {
            account:Configs.ACCOUNT,
            category:Configs.CATEGORY,
            address:{
                raw_address:address
            }
        };
        return this.http.post(Configs.BASE_URL, cfg,{}).then(res => res);

    };
}
