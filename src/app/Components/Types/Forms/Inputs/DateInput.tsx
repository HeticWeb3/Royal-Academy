import {DatePickerProps } from "@mui/x-date-pickers/DatePicker";


export interface IDateInput<TInputDate, TDate> extends Omit<DatePickerProps<TInputDate, TDate>, "onChange" | "value"> {
    name: string;
}