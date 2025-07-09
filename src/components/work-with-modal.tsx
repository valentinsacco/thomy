'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

import CrossIcon from '../assets/cross.svg'
import IAPOSIcon from '../assets/obrassociales/iapos.svg'
import OSDEIcon from '../assets/obrassociales/osde.svg'

const obrasSociales: string[] = [
    'AAPM',
    'AGUA Y ENERGIA',
    'AMOEIAG',
    'AMUR',
    'ANDAR / VISITAR',
    'ART FEDERACION PATRONAL DE SEGUROS',
    'ASOC. TRAB DE FARMACIA',
    'ASOCIART S.A.',
    'AUTO MUTUAL',
    'AVALIAN (EX ACA SALUD)',
    'CAJA DE INGENIEROS',
    'CAJA FORENSE',
    'CEL SALUD - OSDOP',
    'CENTRO ASIST. RAFAELA',
    'CIENCIAS ECONOMICAS',
    'CONFITEROS, PASTELEROS, Y AFINES',
    'DASUTEN',
    'EN SALUD - AF OSPIM',
    'GALENO ART',
    'GALENO S.A.',
    'GERDANNA S.A.',
    'GLOBAL EMPRESARIA',
    'HEMISFERIO SUR - OSALARA',
    'IAPOS',
    'INTEGRAL PLAN ALAMO Y ALAMO PLUS',
    'INTEGRAL SALUD',
    'ÍNTEGRO A.R.T.',
    'ITER MEDICINA S.A. - AF. OSPLAD',
    'JERARQUICOS SALUD',
    'LA SEGUNDA - ART',
    'LA SEGUNDA PERSONA',
    'LEY 5110',
    'LUIS PASTEUR',
    'LUZ Y FUERZA',
    'MEDIFE Plan Plata/oro/platino/Bronce',
    'MUTUAL DEL CLERO (San Pedro) CONFERENCIA EPISCOPAL ARGENTINA',
    'MUTUAL FEDERADA',
    'NUEVA MEDICINA',
    'OMINT',
    'OMINT ART',
    'OPDEA',
    'OSACRA (Amas de casa)',
    'OSDE',
    'OSMATA',
    'OSPAC',
    'OSPATCA',
    'OSPEDYC',
    'OSPIDA',
    'OSPIL',
    'OSPIA',
    'OSPPRA',
    'OSSEG - SEGUROS',
    'OSSEG PLAN BASICO SALUD Y ESPECIAL',
    'PADRON GENERAL',
    'PAMI',
    'PODER JUDICIAL',
    'PREVENCION - ART',
    'PREVENCION SALUD - Af. Exentos',
    'PREVENCION SALUD - Af. Gravados',
    'PROTECCION FAMILIAR',
    'Quore Salud A.R.T',
    'SADAIC',
    'SANATORIO SANTA FE S.A.',
    'SANCOR',
    'SAT (Televisión)',
    'SUTIAGA',
    'SWISS MEDICAL GROUP',
    'UNL',
    'UOM',
    'UTEPLIM'
]

const WorkWithModal = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className='text-sm underline cursor-pointer'
            >
                Ver más...
            </button>
            <Dialog open={open} onClose={setOpen} className='relative z-20'>
                <DialogBackdrop
                    transition
                    className='fixed inset-0 bg-gray-50/25 backdrop-blur-xs transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in'
                />

                <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                    <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                        <DialogPanel
                            transition
                            className='p-4 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-3xl data-closed:sm:translate-y-0 data-closed:sm:scale-95'
                        >
                            <div className='w-full flex flex-row justify-between'>
                                <span
                                    className='text-lg font-semibold'
                                    style={{ fontFamily: 'Sora' }}
                                >
                                    Obras Sociales
                                </span>
                                <button
                                    onClick={() => setOpen(false)}
                                    className='cursor-pointer p-1 rounded-full hover:bg-gray-50 transition-all'
                                >
                                    <img
                                        src={CrossIcon.src}
                                        height={20}
                                        width={20}
                                        alt='Cerrar'
                                    />
                                </button>
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-5 gap-3 mt-4'>
                                {obrasSociales.map((obra, index) => (
                                    <div
                                        key={index}
                                        className='col-span-1 flex flex-col items-center justify-center text-center py-2'
                                    >
                                        <span className='text-xs font-light leading-tight'>
                                            {obra}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default WorkWithModal
