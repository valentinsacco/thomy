import ScrollFloat from './scroll-float-text'

import IAPOSIcon from '../assets/obrassociales/iapos.svg'
import OSDEIcon from '../assets/obrassociales/osde.svg'
import WhatsappIcon from '../assets/whatsapp.svg'
import InstagramIcon from '../assets/instagram.svg'
import LocationIcon from '../assets/location.svg'
import WorkWithModal from './work-with-modal'

const InfoSection = () => {
    return (
        <section
            style={{ fontFamily: 'Sora' }}
            className='pb-10 text-gray-100 flex flex-col md:grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 px-5 md:px-20 gap-10'
        >
            <div className='h-fit col-span-1 w-full'>
                <ScrollFloat
                    animationDuration={0.5}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=10%'
                    scrollEnd='bottom bottom-=15%'
                    stagger={0.03}
                    textClassName='font-bold font-sora'
                    containerClassName='text-3xl hidden md:block'
                >
                    CONTACTO
                </ScrollFloat>
                <span className='font-bold font-sora text-3xl md:hidden'>
                    CONTACTO
                </span>
                <div className='flex flex-col gap-0.5'>
                    <a
                        href='https://wa.me/message/T7BBDQVGT624I1'
                        className='flex flex-row items-center text-lg pl-6 font-light mt-4'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Enviar mensaje por WhatsApp'
                    >
                        <img
                            src={WhatsappIcon.src}
                            className='inline-block h-6 mr-2'
                            alt='WhatsApp Icon'
                        />
                        +54 342 569-2483
                    </a>
                    <a
                        href='https://www.instagram.com/drthomasalvarado/'
                        className='flex flex-row items-center text-lg pl-6 font-light mt-4'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Enviar mensaje por WhatsApp'
                    >
                        <img
                            src={InstagramIcon.src}
                            className='inline-block h-6 mr-2'
                            alt='Instagram Icon'
                        />
                        @drthomasalvarado
                    </a>
                </div>
            </div>
            <div className='h-fit col-span-1 w-full text-gray-100'>
                <ScrollFloat
                    animationDuration={0.5}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=10%'
                    scrollEnd='bottom bottom-=15%'
                    stagger={0.03}
                    textClassName='font-bold font-sora'
                    containerClassName='text-3xl hidden md:block'
                >
                    UBICACIÓN
                </ScrollFloat>
                <span className='font-bold font-sora text-3xl md:hidden'>
                    UBICACIÓN
                </span>
                <div className='pt-4'>
                    <a
                        href='https://maps.app.goo.gl/5KxdbcQrmB8eEosy8'
                        className='flex flex-row items-center text-lg pl-6 font-light'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Ver en Google Maps'
                    >
                        <img
                            src={LocationIcon.src}
                            className='inline-block h-6 mr-2'
                            alt='Location Icon'
                        />
                        Salta 2538, Santa Fe, Argentina.
                    </a>
                </div>
            </div>
            <div className='h-fit col-span-1 row-span-1 w-full flex flex-col'>
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=10%'
                    scrollEnd='bottom bottom-=15%'
                    stagger={0.03}
                    textClassName='font-bold font-sora'
                    containerClassName='text-3xl hidden md:block'
                >
                    OBRAS SOCIALES
                </ScrollFloat>
                <span className='font-bold font-sora text-3xl md:hidden'>
                    OBRAS SOCIALES
                </span>
                <ul className='list-none pl-6 text-left mt-4 gap-2.5 flex flex-col'>
                    <li className='text-md font-light'>
                        <img
                            src={IAPOSIcon.src}
                            className='inline-block h-10 mr-2 rounded-full bg-white p-1'
                            alt='IAPOS Icon'
                        />
                        <span className='text-lg font-light'>IAPOS</span>
                    </li>
                    <li className='text-md font-light'>
                        <img
                            src={OSDEIcon.src}
                            className='inline-block h-10 mr-2 rounded-full bg-white p-1'
                            alt='OSDE Icon'
                        />
                        <span className='text-lg font-light'>OSDE</span>
                    </li>
                    <li className='text-md font-light'>
                        <WorkWithModal />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default InfoSection
