'use client';

import { ComboboxItem } from '@mantine/core';
import { useState } from 'react';
import SelectBlock from '@/UI/SelectBlock/SelectBlock';
import { useSearchParamValue, useUpdatePageURL } from '@/hooks';

function getOptions() {
    const currYear = (new Date()).getFullYear();
    const res: ComboboxItem[] = [];
    for (let i = currYear; i >= 1920; i--) {
     res.push({ label: i.toString(), value: i.toString() });
    }
    return res;
}
const selectOptions = getOptions();

export default function YearFilter({ className } : { className:string }) {
    const queryParam = 'primary_release_year';
    const currentYear = useSearchParamValue<string>('primary_release_year');
    const { updateURL } = useUpdatePageURL();
	const [releaseYear, setReleaseYear] = useState<ComboboxItem | null | undefined>(
        selectOptions.find(item => item.label === currentYear)
    );
    const changeValue = (value : ComboboxItem) => {
        setReleaseYear(value);
        updateURL(queryParam, value.value);
    };
    return (
        <SelectBlock
            value={releaseYear}
            setValue={changeValue}
            className={className}
            options={selectOptions}
            placeholder="Select release year"
            >
            Release year
        </SelectBlock>
    );
}
