import { axiosInstanceDecameron } from "./Instance";

export const getAllHOtels = () => {
    return axiosInstanceDecameron.get(`hotel`);
};

export const addHOtel = (data) => {
    return axiosInstanceDecameron.post(`hotel`, data);
};