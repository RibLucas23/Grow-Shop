import { kit1, carpa, extractor, panelLed, poleas, timer, sustrato, packEden } from './imgs/productos/indexImagenes'
export const productos = [
    {
        "id": 1,
        "nombre": "Kit Indoor",
        "titulo": "KIT INDOOR LED MX 50 BLACK CARPA CULTIVO SUSTRATOS MACETAS NEGRO",
        "url": `${kit1}`,
        "descripcion": "Combo indoor completo incluye: carpa de cultivo con iluminación, ventilación, macetas, poleas, timer, fertilizantes y sustrato premium.",
        "precio": "47.000",
        "stock": "10",
        "category": "carpas",
        "productosImgs": {
            img1: `${carpa}`,
            img2: `${extractor}`
        },

    },
    {
        "id": 2,
        "nombre": "carpa",
        "titulo": "CARPA CULTIVO INDOOR PROBOX BASIC VERSION 60 GARDEN HIGHPRO",
        "url": `${carpa}`,
        "descripcion": "Carpa Cultivo Indoor ProBox Basic Version 60 Garden HighPro",
        "descripcionLarga": `Carpa de cultivo
        • Dimensiones: 60 x 60 x 140 cm.
        • Material: Tela Mylar + Tela 600D.
        • Ventilación: 2 mangas de ventilación de 4 pulgadas.
        • Estructura: metal y conectores de plástico reforzado.
        • Controla con eficacia los parámetros de tu cultivo: temperatura, humedad, iluminación y ventilación.
        • Utiliza sus múltiples mangas de ventilación y ventanas, aprovecha su tela 100% reflectiva.
        • Arma tu carpa sin herramientas ni conocimientos técnicos, se ensambla en menos de 5 minutos.
        • Durabilidad de por vida, con cierres de alta calidad y materiales importados.`,
        "precio": "27.000",
        "category": "carpas",
        "stock": "13"

    },
    {
        "id": 3,
        "nombre": "extractor",
        "titulo": "EXTRACTOR DE AIRE HYDRA 4 PULGADAS CON ADAPTADOR",
        "url": `${extractor}`,
        "descripcion": "Extractor con gran potencia, silencioso, de fácil instalación, muy resistente, y de bajo consumo.",
        "precio": "17.000",
        "stock": "14",
        "category": "otros",

    },
    {
        "id": 4,
        "nombre": "Panel Led",
        "titulo": "PANEL LED MX 50 BLACK CULTIVO INDOOR LED CREE",
        "url": `${panelLed}`,
        "descripcion": "Remplaza un sodio de 200Watt con 1/3 del consumo , ideal para espacios de hasta 60x60cm. • Un equipo profesional para cultivo, con el que obtendrás resultados inigualables. • Este producto cuenta con características superiores, fabricados con LED CREE de la linea MHB y XPE.",
        "precio": "23.960",
        "stock": "2",
        "category": "luces",

    },
    {
        "id": 5,
        "nombre": "Poleas",
        "titulo": "POLEAS CULTIVARG IMPORTADAS CULTIVO INDOOR 5KGS",
        "url": `${poleas}`,
        "descripcion": "Poleas de Cultivarg, con todo lo necesario para colgar y regular tus equipos de iluminación y ventilación.",
        "precio": "715",
        "stock": "7",
        "category": "otros",

    },
    {
        "id": 6,
        "nombre": "Timer",
        "titulo": "TIMER ANALOGICO ZURICH AKAI VARIAS MARCAS",
        "url": `${timer}`,
        "descripcion": "Timer programable mecánico Zurich.",
        "precio": "930",
        "stock": "24",
        "category": "otros",

    },
    {
        "id": 7,
        "nombre": "sustrato EDEN 25 litros profesional",
        "titulo": "SUSTRATO PROFESIONAL LIVIANO EDEN PERLITA TURBA HUMUS VERMI 25 LTS",
        "url": `${sustrato}`,
        "descripcion": "  EDEN - Queen´s paradise es un sustrato de uso profesional, que ofrece óptimas condiciones de siembra y/o trasplante, por su excelente aireación, retención de agua, reacción (pH) y Ce.",
        "precio": "980",
        "stock": "24",
        "category": "sustratos",

    },
    {
        "id": 8,
        "nombre": "fertilizantes 4 pack eden",
        "titulo": "COMBO EDEN 4PACK PARA TODAS LAS ETAPAS 125 CC",
        "url": `${packEden}`,
        "descripcion": "EDEN garantiza un óptimo desarrollo en cada etapa de la planta, maximizando el resultado mediante una manera de utilización sencilla. Son productos premium y casi obligatorios para fortalecer la planta en todas sus etapas, logrando resultados increíbles. Cont: 125cc",
        "precio": "1000",
        "stock": "24",
        "category": "fertilizantes",

    },
]
