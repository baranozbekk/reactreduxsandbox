import React, { useEffect } from 'react'
import axios from 'axios'
import Header from '../layout/Header'

export default function Home() {
  const fetchData = async () => {
    try {
      const res = await axios.get('/items')

      //Check if the data is unique start
      const specificData = res.data.map((e) => e.slug)
      const isUnique = !specificData.some((e, i, arr) => arr.indexOf(e) !== i)
      // console.log('isUnique: ', isUnique)
      //Check if the data is unique end

      //Get item types start
      const onlyItemTypesArray = res.data.map((e) => e.itemType)
      const uniqueItemTypes = [...new Set(onlyItemTypesArray)]
      // console.log('Item types: ', uniqueItemTypes)
      //Get item types end

      //Filter by item type start
      let itemFilter = 'mug'
      const filteredByItemType = res.data.filter(
        (e) => e.itemType === itemFilter,
      )
      // console.log('Filtered items: ', filteredByItemType)
      //Filter by item type end

      //Sort by price start
      const lowestToHighestPrice = [...res.data].sort(
        (a, b) => a.price - b.price,
      )
      const highestToLowestPrice = [...res.data]
        .sort((a, b) => a.price - b.price)
        .reverse()
      // console.log('Price low to high: ', lowestToHighestPrice)
      // console.log('Price high to low: ', highestToLowestPrice)
      //Sort by price end

      //Sort by added start
      const oldestToNewestItem = [...res.data].sort((a, b) => a.added - b.added)
      const newestToOldestItem = [...res.data]
        .sort((a, b) => a.added - b.added)
        .reverse()
      // console.log('Old to new: ', oldestToNewestItem)
      // console.log('New to old: ', newestToOldestItem)
      //Sort by added end

      //Return unique brands start
      const onlyBrandsArray = res.data.map((e) => e.manufacturer)
      const uniqueBrands = [...new Set(onlyBrandsArray)]
      // console.log('Brands: ', uniqueBrands)
      //Return unique brands end

      //Filter by brand start
      let filterKeys = ['Metz---Kautzer', 'Feil-Dooley-and-Reinger']
      const filteredResult = filterKeys.length
        ? filterKeys
            .map((key) => [...res.data.filter((e) => e.manufacturer === key)])
            .flat(1)
        : res.data
      // console.log('Filtered result: ', filteredResult)
      //Filter by brand end

      //Brand search start
      let searchKey = 'Metz---Kautzer'
      const searchResults = uniqueBrands
        .map((e) => e.includes(searchKey) && e)
        .filter((e) => e !== false)
      // console.log('Search results: ', searchResults)
      //Brand search end

      //Return unique tags start
      const onlyTagsArray = res.data.map((e) => e.tags).flat(1)
      const uniqueTags = [...new Set(onlyTagsArray)]
      // console.log('Tags: ', uniqueTags)
      //Return unique tags end

      //Filter by tags start
      let tagFilterKeys = ['Trees', 'Beach', 'Ocean']
      const filteredByTagsResult = tagFilterKeys.length
        ? tagFilterKeys
            .map((key) => [...res.data.filter((e) => e.tags.includes(key))])
            .flat(1)
        : res.data
      // console.log('Filtered by tags result: ', filteredByTagsResult)
      //Filter by tags end

      //Tag search start
      let searchTag = 'am'
      const searchTagsResults = uniqueTags
        .map((e) => e.includes(searchTag) && e)
        .filter((e) => e !== false)
      // console.log('Search tag results: ', searchTagsResults)
      //Tag search end
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="Home">
      <Header />
    </div>
  )
}
