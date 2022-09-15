import imagenes from "../assets/imagenes"

export const arrayItems = [
    {
        id: 1 ,
        titulo: 'Proteina',
        descripcion: '2 kg de proteina BSN',
        descLarga:'La mejor proteina importada de USA. Contiene proteinas de varios tipos y de facil absorción',
        precio:'25.000$',
        foto: imagenes.proteinBSN,
        stock:6,
        tipo:'proteina'     
    },
    {
        id: 2 ,
        titulo: 'True Mass',
        descripcion: '2 kg de proteina gainner BSN',
        descLarga:'Gainer importado de USA. Contiene proteinas de varios tipos para facil absorcion y carbohidratos',
        precio:'27.000$',
        foto: imagenes.trueMassBSN,
        stock:5,
        tipo:'gainer'    
    },
    {
        id: 3 ,
        titulo: 'Creatina',
        descripcion: '300 gramos de creatina BSN',
        descLarga:'Producto a base de creatina monohidrato, un ingrediente que incrementa los niveles celulares de fosfocreatina aumentando los niveles de energía y retrasando el momento en el que aparece la fatiga muscular',
        precio:'13500$',
        foto: imagenes.creatinaBsn,
        stock:5,
        tipo:'creatina'      
    },
    {
        id: 4 ,
        titulo: 'Pre Work',
        descripcion: '600 gramos de Pre entreno BSN',
        descLarga:'Es un pre entreno con una mezcla única de vitaminas, minerales y electrolitos, con adición de cafeína. Diseñado para entrenar con mayor intensidad y de manera más efectiva. El efecto estimulante se encuentra dado por la Cafeína + Glucoronolactona + Taurina, lo que aumenta el vigor y reduce la sensación de fatiga.',
        precio:'2700$',
        foto: imagenes.preworkBsn,
        stock:5,
        tipo:'pre'     
    },
    {
        id: 5 ,
        titulo: 'Aminoacidos',
        descripcion: '100 comprimidos de aminoacidos BSN',
        descLarga:'Amino X es el primer suplemento con BCAA’s y aminoácidos de cadena ramificada de la marca BSN, que ayuda a la recuperación del músculo, repara los tejidos y retrasa la fatiga muscular.',
        precio:'27300$',
        foto: imagenes.aminoBsn,
        stock:5,
        tipo:'otros'    
    },
    {
        id: 6 ,
        titulo: 'Shaker',
        descripcion: 'Vaso shaker para tus suplementos BSN',
        descLarga:'Tapa a rosca, rejilla anti grumos. Ideal para preparar tus licuados de proteínas, creatinas, aminoácidos y bcaa en polvo. Originales y coleccionables.',
        precio:'1700$',
        foto: imagenes.shakerBsn,
        stock:5,
        tipo:'otros'     
    },
    {
        id: 7 ,
        titulo: 'Proteina',
        descripcion: '2 kg de proteina StarNutricion',
        descLarga:'PREMIUM WHEY PROTEIN STAR NUTRITION fue desarrollada por nuestros investigadores para satisfacer las necesidades de los atletas, contiene todos los aminoacidos esenciales y no esenciales necesarios para construir la masa muscular luego del entrenamiento intenso de corta y larga duracion.',
        precio:'16000$',
        foto: imagenes.proteinStar,
        stock:6,
        tipo:'proteina'     
    },
    {
        id: 8 ,
        titulo: 'Mutant Mass',
        descripcion: '2 kg de proteina gainner StarNutricion',
        descLarga:'Mutant Mass de Star Nutrition te aporta todo lo que necesitas para aumentar tu masa muscular, tonificar y mejorar tu rendimiento.',
        precio:'11600$',
        foto: imagenes.mutantMass,
        stock:5,
        tipo:'gainer'     
    },
    {
        id: 9 ,
        titulo: 'Creatina',
        descripcion: '300 gramos de creatina StarNutricion',
        descLarga:'La creatina monohidrato ayuda a fabricar más combustible para el músculo en forma de ATP, esto asegura que los músculos trabajen más rápido durante más tiempo, y también que se recuperen más rápido luego del entrenamiento intenso.',
        precio:'8900$',
        foto: imagenes.creatinaStar,
        stock:5,
        tipo:'creatina'      
    },
    {
        id: 10 ,
        titulo: 'Pre Work',
        descripcion: '600 gramos de Pre entreno StarNutricion',
        descLarga:'Es el nuevo pre-entreno de Star Nutrition con formula 100% renovada. Contiene los 8 ingredientes activos que necesitas para entrenar intensamente, por mas tiempo, con mayor volumen de sangre en los músculos y super motivado. Ademas es muy bajo en calorías y tiene un sabor delicioso y refrescante.',
        precio:'3700$',
        foto: imagenes.preworkStar,
        stock:5,
        tipo:'pre'     
    },
    


]

export const obtenerLista = () =>{
    return new Promise ((resolve, reject)=>{

        setTimeout(() => {
            resolve( arrayItems )
            reject(err => console.log (err))
        }, 1000);


    })
}