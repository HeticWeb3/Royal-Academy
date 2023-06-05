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
                    : <span>{iconContent}</span>
                }
            </span>
        )
};
