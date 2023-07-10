import Nav from "../components/nav";
import RecipeCard from "../components/recipe-card";
import SearchBar from "../components/search-bar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Results() {
    const [recipeResults, setRecipeResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { search } = router.query;
    console.log(search);

    useEffect(() => {
        if (search) {
            getRecipes();
        }   
    }, [search]);


    const getRecipes = async () => {
        const url = `/api/recipes?prefix=${search}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setRecipeResults(data.results);
            console.log(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    const myLoader = ({src}) => {
        return `${src}}`
    }

    

    return (
        <div>
            <Nav />
            <SearchBar />
            <h1>Results</h1>
            {isLoading ? (
                <p> Loading .....</p> 
            ) : (
                recipeResults.map((recipe) => (
                    <div key={recipe.id}>
                        <h2>{recipe.name}</h2>
                        <p>{recipe.description}</p>
                        <p>{recipe.user_ratings.score}</p>
                        <div>
                        <Image 
                            // loader={myLoader}
                            src={recipe.thumbnail_url}
                            alt={recipe.name}
                            width={200}
                            height={200}
                            priority
                            unoptimized
                        />
                        </div>
                        {/* <RecipeCard /> */}
                        </div>
            ))
            )}
        </div>
    )
}