import axios, { Axios } from "axios";
import { useEffect } from "react";

export default function Admin() {
    const api = axios.create({
        baseURL: ,
      });
      
    function checkLogin() {
        try{
            const response = await api.post("auth/signIn");
        }
    }
}