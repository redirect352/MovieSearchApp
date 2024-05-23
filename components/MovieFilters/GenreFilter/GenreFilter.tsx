import { ComboboxItem } from '@mantine/core';
import { useState } from 'react';
import SelectBlock from '@/UI/SelectBlock/SelectBlock';
import { useSearchParamValue, useUpdatePageURL } from '@/hooks';

export default function GenreFilter(
    { className, selectOptions } :
    { className:string, selectOptions: ComboboxItem[] }) {
    const queryParam = 'with_genres';
    const currentGenre = useSearchParamValue<string>(queryParam);
	const [genre, setGenre] = useState<ComboboxItem | null | undefined>(
        selectOptions.find(item => item.value === currentGenre)
    );
    const { updateURL } = useUpdatePageURL();
    const changeValue = (value : ComboboxItem) => {
        setGenre(value);
        updateURL(queryParam, value.value);
    };
    return (
        <SelectBlock
            value={genre}
            setValue={changeValue}
            className={className}
            options={selectOptions}
            placeholder="Select genre"
            >
            Genres
        </SelectBlock>
    );
}
