import { instance } from "../Instance/instance"

export interface PropsPOST{
    url: string;
    params: object;
}

export const POST = async ({ url, params }: PropsPOST) => {
  try {
    const response = await instance.post(url, params);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};