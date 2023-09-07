
import { instance } from "../Instance/instance"

export interface PropsPATCH{
    url: string;
    params: object;
}

export const PATCH = async ({ url, params }: PropsPATCH) => {
  try {
    const response = await instance.get(url, params);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};