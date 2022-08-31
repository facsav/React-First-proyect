import imagenes from "../assets/imagenes"

const arrayItems = [
    {
        id: 1 ,
        titulo: 'Proteina',
        descripcion: '2 kg de proteina BSN',
        foto: imagenes.proteinBSN,
        stock:6     
    },
    {
        id: 2 ,
        titulo: 'True Mass',
        descripcion: '2 kg de proteina gainner BSN',
        foto: imagenes.trueMassBSN,
        stock:5     
    },
    {
        id: 3 ,
        titulo: 'Creatina',
        descripcion: '300 gramos de creatina BSN',
        foto: imagenes.creatinaBsn,
        stock:5      
    },
    {
        id: 4 ,
        titulo: 'Pre Work',
        descripcion: '600 gramos de Pre entreno BSN',
        foto: imagenes.preworkBsn,
        stock:5     
    },
    {
        id: 5 ,
        titulo: 'Aminoacidos',
        descripcion: '100 comprimidos de aminoacidos BSN',
        foto: imagenes.aminoBsn,
        stock:5     
    },
    {
        id: 6 ,
        titulo: 'Shaker',
        descripcion: 'Vaso shaker para tus suplementos BSN',
        foto: imagenes.shakerBsn,
        stock:5     
    },
    {
        id: 7 ,
        titulo: 'Proteina',
        descripcion: '2 kg de proteina StarNutricion',
        foto: imagenes.proteinStar,
        stock:6     
    },
    {
        id: 8 ,
        titulo: 'Mutant Mass',
        descripcion: '2 kg de proteina gainner StarNutricion',
        foto: imagenes.mutantMass,
        stock:5     
    },
    {
        id: 9 ,
        titulo: 'Creatina',
        descripcion: '300 gramos de creatina StarNutricion',
        foto: imagenes.creatinaStar,
        stock:5      
    },
    {
        id: 10 ,
        titulo: 'Pre Work',
        descripcion: '600 gramos de Pre entreno StarNutricion',
        foto: imagenes.creatinaStar,
        stock:5     
    },
    


]

export const obtenerLista = () =>{
    return new Promise ((resolve, reject)=>{

        setTimeout(() => {
            resolve( arrayItems )
            reject(err => console.log (err))
        }, 2000);


    })
}