import {Instrument, Level, Style} from ".prisma/client";

export interface competitionsDataProps {
    name: string;
    description: string;
    level: Level;
    style: Style;
    instrument: Instrument;
    date: Date;
    localisation: string;
    priceEnter: number;
    priceWin: number;
}

export interface competitionDataJSON {
    competition: competitionsDataProps[]
}