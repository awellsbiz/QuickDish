// Purpose: Create a search bar for recipes that i can reuse on multiple pages
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import styles from '../styles/SearchBar.module.css'


export default function SearchBar() {
    const [search, setSearch] = useState('')
    const [recipes, setRecipes] = useState([])
    const [searched, setSearched] = useState(false)
    const [showRecipe, setShowRecipe] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (searched) {
            getRecipes()
            setShowRecipe(true)
        }
    }, [searched])

    const getRecipes = async () => {
    const url = `#`
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
    const handleSubmit = (e) => {
    e.preventDefault()
    setSearched(true) 
    router.push(`/results?search=${encodeURIComponent(search)}`);
  }
    const handleSearch = (e) => {
    setSearch(e.target.value)
  }


    return (
        <main>
            <form onSubmit={handleSubmit}>
          {/* create a lable for searchbar for Recipes */}
          <label htmlFor="search">Search for Recipes</label>
          {/* Create input for search bar that will search an external api's recipes and display results */}
          <input
          type="text"
          onChange={handleSearch}
          value={search} 
          id="search" 
          name="search" 
          placeholder='Search for Recipes' />
          {/* Create a button to search for recipes in the api */}
          <button>Search</button>
        </form>
        </main>
    )
}