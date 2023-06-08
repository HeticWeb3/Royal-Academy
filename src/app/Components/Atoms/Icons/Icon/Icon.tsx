import Image from 'next/image';
import {iconProps} from "@/app/Components/Types";

export const Icon  : React.FC<iconProps> = ({ iconContent, iconSize,iconAlt,containerClass }) => {
        return (
            <span className={containerClass +' aspect-square'}>
                {iconContent.substr(-4) ==='.svg'
                    ? <Image
                        priority
                        src={iconContent}
                        height={iconSize}
                        width={iconSize}
                        alt={iconAlt}
                        />
                    :   <div className={'flex h-full'}>
                        <span className={'m-auto text-center'}>{iconContent}</span>
                        </div>
                }
            </span>
        )
};

