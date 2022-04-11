import { kit1, carpa, extractor, panelLed, poleas, timer } from './imgs/productos/indexImagenes'
export const productos = [
    {
        "id": 1,
        "nombre": "Kit Indoor",
        "titulo": "KIT INDOOR LED MX 50 BLACK CARPA CULTIVO SUSTRATOS MACETAS NEGRO",
        "url": `${kit1}`,
        "descripcion": "Combo indoor completo incluye: carpa de cultivo con iluminación, ventilación, macetas, poleas, timer, fertilizantes y sustrato premium.",
        "precio": "47.000",

        "stock": "10",

        "productosImgs": {
            carpa: { carpa },
            extractor: { extractor }
        }
    },
    {
        "id": 2,
        "nombre": "carpa",
        "titulo": "CARPA CULTIVO INDOOR PROBOX BASIC VERSION 60 GARDEN HIGHPRO",
        "url": `${carpa}`,
        "descripcion": "Carpa Cultivo Indoor ProBox Basic Version 60 Garden HighPro",
        "precio": "47.000",

        "stock": "13"

    },
    {
        "id": 3,
        "nombre": "extractor",
        "titulo": "EXTRACTOR DE AIRE HYDRA 4 PULGADAS CON ADAPTADOR",
        "url": `${extractor}`,
        "descripcion": "Extractor con gran potencia, silencioso, de fácil instalación, muy resistente, y de bajo consumo.",
        "precio": "47.000",

        "stock": "14"
    },
    {
        "id": 4,
        "nombre": "Panel Led",
        "titulo": "PANEL LED MX 50 BLACK CULTIVO INDOOR LED CREE",
        "url": `${panelLed}`,
        "descripcion": "Remplaza un sodio de 200Watt con 1/3 del consumo , ideal para espacios de hasta 60x60cm. • Un equipo profesional para cultivo, con el que obtendrás resultados inigualables. • Este producto cuenta con características superiores, fabricados con LED CREE de la linea MHB y XPE.",
        "precio": "23.960",

        "stock": "2"
    },
    {
        "id": 5,
        "nombre": "Poleas",
        "titulo": "POLEAS CULTIVARG IMPORTADAS CULTIVO INDOOR 5KGS",
        "url": `${poleas}`,
        "descripcion": "Poleas de Cultivarg, con todo lo necesario para colgar y regular tus equipos de iluminación y ventilación.",
        "precio": "715",

        "stock": "7"
    },
    {
        "id": 6,
        "nombre": "Timer",
        "titulo": "TIMER ANALOGICO ZURICH AKAI VARIAS MARCAS",
        "url": `${timer}`,
        "descripcion": "Timer programable mecánico Zurich.",
        "precio": "930",

        "stock": "24"
    },
]
export const productoUnico = {
    "id": 1,
    "nombre": "Kit Indoor",
    "titulo": "KIT INDOOR LED MX 50 BLACK CARPA CULTIVO SUSTRATOS MACETAS NEGRO",
    "url": `${kit1}`,
    "descripcion": "Combo indoor completo incluye: carpa de cultivo con iluminación, ventilación, macetas, poleas, timer, fertilizantes y sustrato premium.",
    "precio": "47.000",

    "stock": "10",
    "productosImgs": {
        carpa: `${carpa}`,
        extractor: `${extractor}`
    }
}