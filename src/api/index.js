import axios from "axios";

export const BaseUrl= "https://localhost:44380/api/";

export const EndPoints = {   //controller names
    user:"user",
    student: "student",
    teacher: "teacher",
    course:"course",
    saveUser: "user/saveUser",
}

export const createAPIEndpoint = endpoint => {

    let url = BaseUrl + endpoint + "/";

    return {
        fetch : () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),   // record örnek uygulamayla ilgili olabilir kendine göre uyarla, user,student vs
        put: (id, updateRecord) => axios.put(url + id, updateRecord ),
        delete: id=> axios.delete(url + id)
    }
}

