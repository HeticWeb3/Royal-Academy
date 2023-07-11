import React, {useEffect, useState } from "react";
import {Icon} from "@/app/Components/Atoms";

interface ChooseInstrumentsProps {
    UserInstruments: any;
    onQuitChooseWindow: () => void;
}

const ChooseInstruments: React.FC<ChooseInstrumentsProps> = ({
    UserInstruments,
    onQuitChooseWindow,
}) => {

    const [userInstruments, setUserInstruments] = useState(UserInstruments);
    const initialsInstruments = UserInstruments;
    const AllInstruments = [
        {
            id: 1,
            name: 'Violin',
            description: 'The Violin'
        },
        {
            id: 2,
            name: 'Voice',
            description: 'The Voice'
        },
        {
            id: 5,
            name: 'piano',
            description: 'blablabla'
        },
        {
            id: 12,
            name: 'flute',
            description: 'The Violin'
        },
        {
            id: 14,
            name: 'viola',
            description: 'The Voice'
        },
        {
            id: 20,
            name: 'oboe',
            description: 'blablabla'
        },
        {
            id: 25,
            name: 'Jembé',
            description: 'blablabla'
        }
    ]


    const checkInstrumentSelected = (id: number) => {
        let isHere;
        console.log(userInstruments)
        userInstruments?.forEach((item: object, index: number) => {
            if (item.id == id) {
                isHere = index;
            }
        });
        return isHere
    }

    useEffect(() => {
        console.log("Update")
        console.log(userInstruments)
    }, [userInstruments]);

    const handleClick = (event: any) => {
        if (event.currentTarget.value) {
            if (checkInstrumentSelected(event?.currentTarget.value) !== undefined) {
                setUserInstruments(userInstruments.filter(el => el.id != event?.currentTarget.value));
            } else {
                const foundInstrument = AllInstruments.find(e => e.id == event?.currentTarget?.value)
                setUserInstruments((prev) => [...prev, foundInstrument])
            }
        }
    }


    return (
        <div className={'flex flex-col items-center'}>
            <div className={'flex flex-row flex-wrap gap-7 no-scrollbar mx-[-15px] px-[15px]'}>
                {AllInstruments?.map((instrument) => {
                    return !initialsInstruments.find(e => e.id == instrument.id) ? (
                        <button key={instrument.id} value={instrument.id} onClick={handleClick}>
                            <Icon iconContent={`/icons/${instrument.name.toLowerCase()}.svg`} iconSize={50}
                                  iconAlt={instrument.name}
                                  containerClass={`w-[85px] ${checkInstrumentSelected(instrument.id) == undefined ? '' : 'border-green border-2 bg-white'} transition bg-blue-extralight rounded-square p-2 flex items-center justify-center`}/>
                        </button>
                    ): null
                } )}
            </div>
            <button
                onClick={onQuitChooseWindow}
                type="button"
                form={'chooseInstruments'}
                className={'button bg-blue-lightbis text-white font-normal text-base antialiased col-span-full mt-xl py-6 px-lg'}
            >
                Validate
            </button>
        </div>

    )
}


export default ChooseInstruments;