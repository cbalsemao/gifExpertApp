import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ ]);
    
    const onAddCategory = ( newCategory ) => {

        if (!categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
       };

    return (
        <>  
            <h1 className='titleGifExpApp'>GifExpertApp</h1>

            <AddCategory 
               onNewCategory={ onAddCategory }
            />

                {   
                    categories.map( ( category ) => (
                        <GifGrid 
                            key={ category } 
                            category={ category } />
                    ))
                }

        </>
    )
}

