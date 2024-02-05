import { Listbox } from "@headlessui/react";
import { CaretDown, CheckSquare, Square, FunnelSimple } from "phosphor-react";
import { FilterInputContainer } from "./style";

const SEARCH_OTIONS = [
    { key: 'name', name: 'Name' },
    { key: 'type', name: 'Type' },
]

export function FilterInput(): JSX.Element {

    return (
        <FilterInputContainer>
            <Listbox value="name" onChange={() => { }}>
                <Listbox.Button className="filterButton">
                    Type
                    <CaretDown />
                </Listbox.Button>
                <Listbox.Options className='filterOptions'>
                    {SEARCH_OTIONS.map(option => (
                        <Listbox.Option
                            key={option.key}
                            value={option.key}
                        >
                            {({ selected }) => (
                                selected
                                    ? (<span className="option">
                                        <CheckSquare />
                                        {option.name}
                                    </span>
                                    )
                                    : (<span className="option">
                                        <Square />
                                        {option.name}
                                    </span>
                                    )
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>

            <label htmlFor="searchBar"></label>
            <input type="text" id='searchBar' onChange={() => { }} />

            <FunnelSimple className='filterIcon' />

        </FilterInputContainer>
    )
}