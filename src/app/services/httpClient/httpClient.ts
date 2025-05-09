import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { environment } from '../../../../env';
import { RequestError } from '../../models/error/request.error';

@Injectable({
    providedIn: 'root'
  })
export class HttpClient {


    public API_URL: string = environment.API_URL;

    private axiosInstance: AxiosInstance;


    constructor() { 
        this.axiosInstance = axios.create({
            baseURL: this.API_URL,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        });
    }

    public async post<T>(path: string, body: string): Promise<AxiosResponse<T>> {
        
        const response = await this.axiosInstance.post<T>(path, body);

        if (response.status !== 200) {
            console.log("response");
            throw new RequestError(`Erro ao enviar dados`);
        }

        return response;
        
    }

    public async get<T>(path: string): Promise<AxiosResponse<T>> {
        try {
            const response = await this.axiosInstance.get<T>(path);

            if (response.status !== 200) {
                console.log(response);
                throw new Error(`Erro ao buscar dados`);
            }

            return response;
        } catch (error: any) {
            throw error.response || error;
        }
    }

    public async put<T>(path: string, body: string): Promise<AxiosResponse<T>> {
        try {
            const response = await this.axiosInstance.put<T>(path, body);

            if (response.status !== 200) {
                console.log(response);
                throw new Error(`Erro ao atualizar dados`);
            }

            return response;
        } catch (error: any) {
            throw error.response || error;
        }
    }

    public async delete<T>(path: string): Promise<AxiosResponse<T>> {
        try {
            const response = await this.axiosInstance.delete<T>(path);

            if (response.status !== 200) {
                console.log(response);
                throw new Error(`Erro ao deletar dados`);
            }

            return response;
        } catch (error: any) {
            throw error.response || error;
        }
    }
    



}