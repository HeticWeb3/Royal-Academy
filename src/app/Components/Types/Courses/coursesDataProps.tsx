import {Badge, Instrument, Lesson, Level, Style, Teacher} from ".prisma/client";

export interface coursesDataProps {
    name: string;
    description: string;
    level: Level;
    style: Style;
    instrument: Instrument;
    teacher: Teacher;
    lesson: Lesson[];
    badge: Badge[]
    imageUrl: string;
}

export interface courseDataJSON {
    course: coursesDataProps[]
}