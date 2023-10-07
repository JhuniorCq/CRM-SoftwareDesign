import axios from "axios";


const campanasAPI = axios.create({
    baseURL : 'http://localhost:3000'
})

export const getCampanas = async() => {
    const data = await (await campanasAPI.get('/campanas')).data;
    return data;
}


export const crearCampanas = (campana) => {
    campanasAPI.post('/campanas', campana)
}

