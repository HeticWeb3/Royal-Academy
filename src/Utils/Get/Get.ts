
import { instance } from "../Instance/instance"

export interface PropsGET{
    url: string;
}

export const GET = async ({ url }: PropsGET) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};