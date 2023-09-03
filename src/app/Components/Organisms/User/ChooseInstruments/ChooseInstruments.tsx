import React, {useEffect, useState} from "react";
import {Icon} from "@/app/Components/Atoms";
import {CookieValueTypes, getCookie} from "cookies-next";
import {GET} from "@/Utils/Get/Get";
import {instrumentsDataProps} from "@/app/Components/Types";
import {PATCH} from "@/Utils/Patch/Patch";

interface ChooseInstrumentsProps {
    userInstruments: any;
    onQuitChooseWindow: () => void;
    setUserInstrument : React.Dispatch<React.SetStateAction<any>>;
}

    const ChooseInstruments: React.FC<ChooseInstrumentsProps> = ({
        userInstruments,
        setUserInstrument,
        onQuitChooseWindow,
    }) => {

    const [newUserInstruments, setNewUserInstruments] = useState(userInstruments);
    const initialsInstruments = userInstruments;
    const [allInstruments,setAllInstruments]= useState<instrumentsDataProps | null>(null);

    useEffect(() => {
        const fetchParams = (token: CookieValueTypes) => {
            return {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
        };

        const fetchInstruments = async () => {
            try {
                const instruments = await GET({url:`instrument/all`, params:fetchParams(getCookie('accesstoken'))});
                const data: instrumentsDataProps = await instruments;
                setAllInstruments(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données des instruments :', error);
            }
        };
            fetchInstruments();

    }, []);


    const checkInstrumentSelected = (id: number) => {
        let isHere;
        newUserInstruments?.forEach((item: any, index: number) => {
            if (item.id == id) {
                isHere = index;
            }
        });
        return isHere
    }


    const validateInstrumentsForm = async () => {

        const newUserInstrumentsById = newUserInstruments.map(item => ({ id: item.id }));


        const instrumentJSON : any = {
            addInstrument: newUserInstrumentsById,
        };
        try {
            const response = await fetch('http://localhost:3000/api/user/me', {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer `+getCookie('accesstoken'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(instrumentJSON),
            });
            if (response.ok) {
                setUserInstrument(newUserInstruments);
                console.log('Success')
            }
            if (!response.ok) {
                console.error(response);
            }
        } finally {
            onQuitChooseWindow()
        }
    };

    const handleClick = (event: any) => {
        if (event.currentTarget.value) {
            if (checkInstrumentSelected(event?.currentTarget.value) !== undefined) {
                setNewUserInstruments(newUserInstruments.filter((el:any) => el.id != event?.currentTarget.value));
            } else {
                const foundInstrument = allInstruments.find(e => e.id == event?.currentTarget?.value)
                setNewUserInstruments((prev:Array<any>) => [...prev, foundInstrument])
            }
        }
    }


    return (
        <div className={'flex flex-col items-center'}>
            <div className={'flex flex-row flex-wrap gap-7 no-scrollbar mx-[-15px] px-[15px]'}>
                {allInstruments?.map((instrument) => {
                    return !initialsInstruments.find((el:any) => el.id == instrument.id) ? (
                        <button key={instrument.id} value={instrument.id} onClick={handleClick}>
                            <Icon iconContent={`/icons/${instrument.name.toLowerCase()}.svg`} iconSize={50}
                                  iconAlt={instrument.name}
                                  containerClass={`w-[85px] ${checkInstrumentSelected(instrument.id) == undefined ? '' : 'border-green border-2 bg-white'} transition bg-blue-extralight rounded-square p-2 flex items-center justify-center`}/>
                        </button>
                    ): null
                } )}
            </div>
            <button
                onClick={validateInstrumentsForm}
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