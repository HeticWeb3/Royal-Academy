
import { instance } from "../Instance/instance"
import {PropsPOST} from "@/Utils/Post/post";

export interface PropsGET{
    url: string;
    params: object;
}

export const GET = async ({ url, params }: PropsGET) => {
  try {
    const response = await instance.get(url, params);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};