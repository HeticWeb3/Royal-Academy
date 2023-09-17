"use client"
import Image from 'next/image'
import headImage from '/public/images/home/studyfrombest.jpg'
import startFreeImage from '/public/images/home/startfree.svg'
import RCMImage from '/public/images/home/partners/RCM-Primary.svg'
import RIAMImage from '/public/images/home/partners/RIAM.svg'
import ColburnImage from '/public/images/home/partners/Colburn.png'
import AIENImage from '/public/images/home/partners/AIEN.png'
import FacebookImage from '/public/images/home/socialmedia/Facebook.svg'
import InstagramImage from '/public/images/home/socialmedia/Instagram.svg'
import LinkedinImage from '/public/images/home/socialmedia/Linkedin.svg'
import YoutubeImage from '/public/images/home/socialmedia/Youtube.svg'
import {useRouter} from "next/navigation";
import React from "react";
import {Icon} from "@/app/Components/Atoms";



export default function Home() {

    const router = useRouter();
  return (
      <div className={' flex flex-col gap-lg lg:lg:gap-[120px] col-span-full my-lg'}>
        <section id={'homePresentation'} className="flex flex-col gap-lg lg:gap-[120px]">

           <div className={'w-full'}>
               <div className={'relative h-[30vw] w-full '}>
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

               <div className={'p-4 lg:pb-lg flex flex-col gap-3 lg:gap-7'}>
                   <h2 className={'text-base lg:text-subheading lg:text-center lg:mb-lg'}>Study with the world’s best musicians!</h2>
                   <p className={'text-sm lg:text-base lg:text-center'}>New masterclasses added every month.</p>
                   <p className={'text-sm lg:text-base lg:text-center'}>Experience immersive video masterclasses wherever you are.</p>
                   <p className={'text-sm lg:text-base lg:text-center'}>Learn and progress alongside the most accomplished professors.</p>
               </div>
           </div>

                <div className={'text-center lg:w-2/5 self-center leading-9 lg:text-lg flex flex-col lg:gap-7'}>
                    <p>The Saline royale academy aims to participate in the training of the best musicians of tomorrow.</p>
                    <p>We offer online or in-person masterclasses at the Saline royale of Arc et Senans, given by the greatest masters of classical music.</p>
                    <p>The Saline royale Academy is a private higher-education institution authorized to issue ECTS credits.</p>
                </div>
        </section>

        <section id={'homeStartLearning'} className={'flex flex-col gap-lg lg:lg:gap-[120px]'}>
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
                <div className={'text-center py-7 lg:py-[200px] px-lg z-10 relative'}>
                    <h3 className={'mb-5 lg:text-xxl'}>On smartphone, tablet or computer</h3>
                    <p className={'text-sm lg:text-base mb-4 lg:mb-0 lg:mt-lg'}>Watch the 300+ tutorials video on the app available on App Store and Play Store</p>

                    <button
                        onClick={() => router.push('/register')}
                        type="button"
                        className={'button bg-blue-lightbis text-white font-normal text-base antialiased lg:w-1/4 lg:mt-lg '}
                    >
                        Start your free trial
                    </button>
                </div>
            </div>

            <div className={'flex flex-col lg:grid gap-[40px] lg:grid-cols-4'}>

                <div className={'flex flex-col items-center mx-lg lg:mx-0 lg:col-span-1'}>
                    <Icon iconContent={'/icons/book-open.svg'} iconSize={47} iconAlt={''} containerClass={'w-fit border-white border-2 rounded-square p-4'}/>
                    <p className={'text-sm lg:text-base text-center mt-2 lg:mt-5'}>Access to the biggest and richest catalog  of classical music masterclasses</p>
                </div>

                <div className={'flex flex-col items-center mx-lg lg:mx-0 lg:col-span-1'}>
                    <Icon iconContent={'/icons/coupe.svg'} iconSize={47} iconAlt={''} containerClass={'w-fit border-white border-2 rounded-square p-4'}/>
                    <p className={'text-sm lg:text-base text-center mt-2 lg:mt-5'}>Learn from the best professors, competition's winners and jury's members</p>
                </div>

                <div className={'flex flex-col items-center mx-lg lg:mx-0 lg:col-span-1'}>
                    <Icon iconContent={'/icons/video.svg'} iconSize={47} iconAlt={''} containerClass={'w-fit border-white border-2 rounded-square p-4'}/>
                    <p className={'text-sm lg:text-base text-center mt-2 lg:mt-5'}>New videos available every month</p>
                </div>

                <div className={'flex flex-col items-center mx-lg lg:mx-0 lg:col-span-1'}>
                    <Icon iconContent={'/icons/notes.svg'} iconSize={47} iconAlt={''} containerClass={'w-fit border-white border-2 rounded-square p-4'}/>
                    <p className={'text-sm lg:text-base text-center mt-2 lg:mt-5'}>Multi angle videos, annotated sheet with the professors recommendations</p>
                </div>

            </div>
        </section>

          <section id={'homePartners'} className={'flex flex-col gap-6 '}>

                <h2 className={'text-sm lg:text-base lg:py-xl text-center'}>They trust us</h2>

                <div className={'grid grid-cols-4 gap-[30px] mx-xl justify-center lg:items-center'}>
                    <div className={'relative col-span-1'}>
                        <Image
                            src={RCMImage}
                            className={'lg:w-1/3'}
                            alt={'Royal collage of Music of London'}
                            style={{
                                margin:'0 auto',
                                alignSelf:'flex-start'}}
                        />
                    </div>

                    <div className={'relative col-span-1'}>
                        <Image
                            src={RIAMImage}
                            className={'lg:w-1/3'}
                            alt={'Royal Irish Academy of Music'}
                            style={{
                                alignSelf:'flex-start',
                                margin:'0 auto',
                            }}
                        />
                    </div>

                    <div className={'relative col-span-1'}>
                        <Image
                            src={ColburnImage}
                            className={'lg:w-1/3'}
                            alt={'Colburn school'}
                            style={{
                                alignSelf:'flex-start',
                                margin:'0 auto',
                            }}                        />
                    </div>

                    <div className={'relative col-span-1'}>
                        <Image
                            src={AIENImage}
                            className={'lg:w-1/3'}
                            alt={'Académie internationale d\'été de nice'}
                            style={{
                                alignSelf:'flex-start',
                                margin:'0 auto',
                            }}                        />
                    </div>

                </div>
          </section>
    </div>
  )
}
