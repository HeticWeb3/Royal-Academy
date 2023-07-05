"use client"
import Image from 'next/image'
import headImage from '/public/images/home/studyfrombest.png'
import startFreeImage from '/public/images/home/startfree.svg'
import RCMImage from '/public/images/home/partners/RCM-Primary.png'
import RIAMImage from '/public/images/home/partners/RIAM.png'
import ColburnImage from '/public/images/home/partners/Colburn.png'
import AIENImage from '/public/images/home/partners/AIEN.png'
import {useRouter} from "next/navigation";
import React from "react";
import {Icon} from "@/app/Components/Atoms";



export default function Home() {

    const router = useRouter();
  return (
      <div className={' flex flex-col gap-lg col-span-full my-lg'}>
        <section id={'homePresentation'} className="flex flex-col gap-lg">

           <div className={'bg-grey-darker rounded-base w-full'}>
               <div className={'relative h-[30vw] w-full'}>
                   <Image
                       src={headImage}
                       alt={'Study with the world’s best musicians!'}
                       fill={true}
                       style={{
                           borderRadius:'13px',
                           objectFit: 'cover',
                           objectPosition:'center',
                       }}
                   />
               </div>

               <div className={'p-4'}>
                   <h2 className={'text-lg'}>Study with the world’s best musicians!</h2>
                   <p className={'text-sm'}>🧭  New masterclasses added every month.</p>
                   <p className={'text-sm'}>🎥  Experience immersive video masterclasses wherever you are.</p>
                   <p className={'text-sm'}>👨‍  Learn and progress alongside the most accomplished professors.</p>
               </div>
           </div>

            <div>
                <div className={'text-center'}>
                    <p>The Saline royale academy aims to participate in the training of the best musicians of tomorrow.</p>
                    <p>We offer online or in-person masterclasses at the Saline royale of Arc et Senans, given by the greatest masters of classical music.</p>
                    <p>The Saline royale Academy is a private higher-education institution authorized to issue ECTS credits.</p>
                </div>
            </div>
        </section>

        <section id={'homeStartLearning'} className={'flex flex-col gap-lg'}>
            <div className={'relative'}>
                <Image
                    alt={''}
                    src={startFreeImage}
                    fill={true}
                    style={{
                        zIndex:0,
                        objectFit: 'cover',
                        objectPosition:'center',
                    }}
                />
                <div className={'text-center py-7 px-lg z-10 relative'}>
                    <h3 className={'mb-5'}>On smartphone, tablet or computer</h3>
                    <p className={'text-sm mb-4'}>Watch the 300+ tutorials video on the app available on App Store and Play Store</p>

                    <button
                        onClick={() => router.push('/register')}
                        type="button"
                        className={'button bg-blue-lightbis text-white font-normal antialiased col-span-full'}
                    >
                        Start your free trial
                    </button>
                </div>
            </div>

            <div className={'flex flex-col gap-[66px]'}>
                <div className={'flex flex-col justify-center items-center mx-lg'}>
                    <Icon iconContent={'/icons/book-open.svg'} iconSize={47} iconAlt={''} containerClass={'w-fit border-white border-2 rounded-square p-4'}/>
                    <p className={'text-sm text-center mt-2'}>Access to the biggest and richest catalog  of classical music masterclasses</p>
                </div>

                <div className={'flex flex-col justify-center items-center mx-lg'}>
                    <Icon iconContent={'/icons/coupe.svg'} iconSize={47} iconAlt={''} containerClass={'w-fit border-white border-2 rounded-square p-4'}/>
                    <p className={'text-sm text-center mt-2'}>Learn from the best professors, competition's winners and jury's members</p>
                </div>

                <div className={'flex flex-col justify-center items-center mx-lg'}>
                    <Icon iconContent={'/icons/video.svg'} iconSize={47} iconAlt={''} containerClass={'w-fit border-white border-2 rounded-square p-4'}/>
                    <p className={'text-sm text-center mt-2'}>New videos available every month</p>
                </div>

                <div className={'flex flex-col justify-center items-center mx-lg'}>
                    <Icon iconContent={'/icons/notes.svg'} iconSize={47} iconAlt={''} containerClass={'w-fit border-white border-2 rounded-square p-4'}/>
                    <p className={'text-sm text-center mt-2'}>Multi angle videos, annotated sheet with the professors recommendations</p>
                </div>

            </div>
        </section>

          <section id={'homePartners'} className={'flex flex-col gap-6 '}>

              <h2 className={'text-sm text-center'}>They trust us</h2>

                <div className={'flex flex-nowrap gap-[30px] justify-center '}>
                    <Image
                        width={32}
                        height={72}
                        src={RCMImage}
                        alt={'Royal collage of Music of London'}
                        style={{alignSelf:'flex-start'}}/>

                    <Image
                        width={82}
                        height={51}
                        src={RIAMImage}
                        alt={'Royal Irish Academy of Music'}
                        style={{alignSelf:'flex-start'}}/>

                    <Image
                        width={51}
                        height={20}
                        src={ColburnImage}
                        alt={'Colburn school'}
                        style={{alignSelf:'center'}}/>
                    <Image
                        width={35}
                        height={49}
                        src={AIENImage}
                        alt={'Académie internationale d\'été de nice'}
                        style={{alignSelf:'flex-start'}}/>

                </div>
          </section>
    </div>
  )
}
