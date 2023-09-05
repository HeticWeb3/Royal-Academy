import {instrumentsDataProps} from "@/app/Components/Types";

const Instrument = (data: { data: instrumentsDataProps }) => {
    const singleInstrument = data

    return (
        <div className={' flex flex-col gap-lg lg:lg:gap-[120px] col-span-full my-lg'}>
            <h1 className={'text-base lg:text-subheading lg:text-center lg:mb-lg'}>{singleInstrument.data.name}</h1>
            <p className={'text-sm lg:text-base'}>{singleInstrument.data.description}</p>
        </div>
    )
}
export default Instrument;