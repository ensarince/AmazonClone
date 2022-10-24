import axios from "axios"

const instance = axios.create({
    //baseURL: "http://127.0.0.1:5001/clone-4dd78/us-central1/api" //localhost
    baseURL: "https://us-central1-clone-4dd78.cloudfunctions.net/api" //deployed
});

export default instance; 

