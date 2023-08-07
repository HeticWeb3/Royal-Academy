
import { instance } from "../Instance/instance"
import {Props} from "next/script";

export interface PropsGET{
    url: string;
    params: object
}

export const GET = async ({ url }: PropsGET) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};