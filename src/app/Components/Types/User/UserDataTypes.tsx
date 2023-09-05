 export interface UserDataProps {
    user?: any;
    id: number;
    firstName: string;
    email: string;
    avatar: string | null;
    bio: string | null;
    birthDate: Date;
    dateCreation: Date;
    instrumentId:object | number | null;
    lastName:string;
    lessonId:number | null;
    phoneNumber:string;
    rankId:number | null;
    schoolId:number | null;
    styleId:number | null;
    instrument: any[]
}

