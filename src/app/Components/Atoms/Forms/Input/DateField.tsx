"use client"; // This is a client component 👈🏽

import { useField, useFormikContext } from "formik";
import React from "react";
import {IDateInput} from "@/app/Components/Types";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";


export const FormikDatePicker = <TInputDate, TDate = TInputDate>(
    props: IDateInput<TInputDate, TDate>
) => {
    const { name, ...restProps } = props;
    const [field] = useField(name);
    const { setFieldValue } = useFormikContext();
    return (
        <DatePicker
            {...restProps}
            value={dayjs(field.value ?? null)}
            onChange={(val) => setFieldValue(name, val)}
        />
    );
};