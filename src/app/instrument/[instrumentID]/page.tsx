'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {GET} from "@/Utils/Get/Get";
import {CookieValueTypes, getCookie} from 'cookies-next';
import {BiographyProps} from "@/app/Components/Types";
import Biography from "@/app/Components/Organisms/Biography/Biography";

const IntrumentPage = () => {
    const params = useParams();
    const { instrumentID } = params;
    const [instrumentData, setInstrumentData] = useState<BiographyProps | null>(null);

    const fetchParams = (token: CookieValueTypes) => {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };
    };

    const instrument = {
        id:instrumentID,
        name:'Piano',
        description: 'The piano, a masterpiece of craftsmanship and musicality, holds an ethereal beauty that captivates hearts and souls. Its keys, like a pristine canvas, invite fingers to dance upon them, conjuring melodies that resonate with the deepest parts of our being.',
        styles:[{
            id:1,
            name:'Baroque',
            courses :[
                {
                id:1,
                name:'mozart',
                teachers: [
                    {id: 1, firstName: 'Meryl', lastName: 'Eprez'},
                    {id: 2, firstName: 'Denis', lastName: 'Chevrette'}
                ],
                description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper",
                lessons: [
                    {id:1,name:'Mozart Part 1',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                    },
                    {id:2,name:'Mozart Part 2',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                    },
                    {id:3,name:'Mozart Part 3',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                    },
                    {id:4,name:'Mozart Part 4',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                    }
                ]
                },
                {
                    id:2,
                    name:'Beethoven',
                    teachers: [
                        {id: 1, firstName: 'Meryl', lastName: 'Eprez'},
                        {id: 2, firstName: 'Denis', lastName: 'Chevrette'}
                    ],
                    description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper",
                    lessons: [
                        {id:1,name:'Mozart Part 1',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:2,name:'Mozart Part 2',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:3,name:'Mozart Part 3',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:4,name:'Mozart Part 4',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        }
                    ]
                },
                {
                    id:3,
                    name:'Haendel',
                    teachers: [
                        {id: 1, firstName: 'Meryl', lastName: 'Eprez'},
                        {id: 2, firstName: 'Denis', lastName: 'Chevrette'}
                    ],
                    description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper",
                    lessons: [
                        {id:1,name:'Mozart Part 1',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:2,name:'Mozart Part 2',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:3,name:'Mozart Part 3',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:4,name:'Mozart Part 4',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        }
                    ]
                }]
            },
            {id:2,
            name:'Pas Baroque',
            courses :[
                {
                    id:1,
                    name:'mozart',
                    teachers: [
                        {id: 1, firstName: 'Meryl', lastName: 'Eprez'},
                        {id: 2, firstName: 'Denis', lastName: 'Chevrette'}
                    ],
                    description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper",
                    lessons: [
                        {id:1,name:'Mozart Part 1',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:2,name:'Mozart Part 2',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:3,name:'Mozart Part 3',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:4,name:'Mozart Part 4',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        }
                    ]
                },
                {
                    id:2,
                    name:'Beethoven',
                    teachers: [
                        {id: 1, firstName: 'Meryl', lastName: 'Eprez'},
                        {id: 2, firstName: 'Denis', lastName: 'Chevrette'}
                    ],
                    description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper",
                    lessons: [
                        {id:1,name:'Mozart Part 1',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:2,name:'Mozart Part 2',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:3,name:'Mozart Part 3',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:4,name:'Mozart Part 4',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        }
                    ]
                },
                {
                    id:3,
                    name:'Haendel',
                    teachers: [
                        {id: 1, firstName: 'Meryl', lastName: 'Eprez'},
                        {id: 2, firstName: 'Denis', lastName: 'Chevrette'}
                    ],
                    description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper",
                    lessons: [
                        {id:1,name:'Mozart Part 1',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:2,name:'Mozart Part 2',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:3,name:'Mozart Part 3',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        },
                        {id:4,name:'Mozart Part 4',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel.'
                        }
                    ]
                }]
            }]
    }

    console.log(instrument)

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const data: BiographyProps = await GET({url:`teacher/${professorID}`, params:fetchParams(getCookie('accesstoken'))});
    //             setInstrumentData(data);
    //         } catch (error) {
    //             console.error('Erreur lors de la récupération des données du professor:', error);
    //         }
    //     };
    //
    //     if (professorID) {
    //         fetchUserData();
    //     }
    // }, [professorID]);

    if (!instrumentID || !instrumentData) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className={'col-span-full mt-lg'}>
                <Biography data={instrumentData}/>
            </div>
        </>
    );
};

export default IntrumentPage;
