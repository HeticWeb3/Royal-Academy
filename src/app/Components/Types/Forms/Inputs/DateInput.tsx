import {DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import {Dayjs} from "dayjs";


export interface IDateInput<TInputDate, TDate> extends Omit<DatePickerProps<TInputDate>, "onChange" | "value"> {
    name: string;
    value: Date;
    onChange: (value: TInputDate)   => void;
    onBlur: (value: TInputDate) => void;
}