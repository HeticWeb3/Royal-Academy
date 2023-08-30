
interface ChooseInstrumentsProps {
    userInfo: any;
    onQuitChooseWindow: () => void;
}

const ModifyUser: React.FC<ChooseInstrumentsProps> = ({
                                                          userInfo,
 onQuitChooseWindow,
}) => {

    return (
        <div className={'flex flex-col items-center'}>

            <button
                type="button"
                form={'chooseInstruments'}
                className={'button bg-blue-lightbis text-white font-normal text-base antialiased col-span-full mt-xl py-6 px-lg'}
            >
                Validate
            </button>
        </div>

    )
}


export default ModifyUser;