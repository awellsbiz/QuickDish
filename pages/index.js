import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signOut, signIn, signUp } from 'next-auth/react';
import Link from 'next/link';
import Nav from '../components/nav';
import { useState, useEffect } from 'react';
import RecipeCard from '../components/recipe-card';
import { useRouter } from 'next/router';
import SearchBar from '../components/search-bar';
import Carousel from '../components/carousel';


export default function Home() {
  const router = useRouter()
  const { data: session } = useSession()
  const [search, setSearch] = useState('')
  const [recipes, setRecipes] = useState([])
  const [searched, setSearched] = useState(false)
  const [showRecipe, setShowRecipe] = useState(false)

  return (
    <div>
      <Head>
        <title>Quick Dish</title>
      </Head>

      <main>
        <Nav />
        <div className={styles.searchBar}>
        <SearchBar />
        </div>
        <section className={styles.recipeContainer}>
          {/* Create a container for the recipes that will be displayed */}
          {/* Create a card for each recipe that will display the recipe's name, image, and link to the recipe */}
          <Carousel />
        </section>
      </main>
    </div>
  )
}
