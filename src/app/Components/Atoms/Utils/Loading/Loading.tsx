import Image from 'next/image';
import load from '/public/icons/load.svg'

export const Loading  : React.FC = () => {
        return (
            <div className={'w-full flex justify-center items-center lg:col-span-full'}>
              <Image src={load} alt={'Loading'}/>
            </div>
        )
};

