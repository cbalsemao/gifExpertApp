import { GifItem } from "./GifItem";
import { userFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = userFetchGifs( category );
    
    return (
        <>
            <h3 className="titleGifs">{ category }</h3>
            
            {
                isLoading && ( <h2 className="loading">Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( ( image )  => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
