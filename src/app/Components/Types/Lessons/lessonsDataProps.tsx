export interface lessonsDataProps {
    id : number;
    nom: string;
    description: string;
    video: string;
    courseId: number;
}
export interface lessonDataJSON {
    lesson: lessonsDataProps[]
}