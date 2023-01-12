import { useState } from "react"
import { AddCategory, GifGrid } from './components/'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (NewCategory) => {
        if ( categories.includes(NewCategory)) return;
        setCategories([NewCategory, ...categories])
    }
    return (
        <>
            <h1>gifExpert</h1>
            <hr />
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)} 
            />

                {
                    categories.map((category) => (
                        <GifGrid 
                        key={ category }
                        category={ category} />
                    ) )
                }
        </>
    )
}
