

export interface instrumentsDataProps {
    id: number;
    description: string;
    name: string;
    teacherId:object | number | null;
}

export interface instrumentDataJSON{
    instrument : instrumentsDataProps[]
}

