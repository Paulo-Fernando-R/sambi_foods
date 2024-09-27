import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";
import RecipeType from "../enums/recipeType";


const axiosInstance = (baseUrl:RecipeType) => {
    const url = baseUrl === RecipeType.food ? process.env.EXPO_PUBLIC_FOODS_API : process.env.EXPO_PUBLIC_DRINKS_API;

    const instance = axios.create({
        baseURL: url,
    });

    const reqInterceptor = async (config: InternalAxiosRequestConfig<AxiosResponse>) => {
        config.validateStatus = () => true;
        return config;
    };

    const resInterceptor = (response: AxiosResponse) => {
      
        if (response.status === 401) {
            //todo
        }
        return response;
    };

    const errInterceptor = async (error: AxiosError) => {
        //  const {  } = error;
        //todo
        return Promise.reject(error);
    };
    instance.interceptors.response.use(resInterceptor);
    instance.interceptors.request.use(reqInterceptor, errInterceptor);

    return instance;
};



export default axiosInstance;
