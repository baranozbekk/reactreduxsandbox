import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../layout/Header'
import Products from '../layout/Products'

import {
  fetchItemsData,
  fetchCompaniesData,
} from '../../state/actions/dbDataActions'

const Home = ({ fetchItemsData, fetchCompaniesData, dbData }) => {
  useEffect(() => {
    fetchItemsData()
    fetchCompaniesData()
    // eslint-disable-next-line
  }, [])

  // These comments below are the sorting, and filtering methods. Sinec I ran out of time I commented them down.

  // //Check if the data is unique start
  // const specificData = dbData.items.map((e) => e.slug)
  // const isUnique = !specificData.some((e, i, arr) => arr.indexOf(e) !== i)
  // //Check if the data is unique end

  // //Get item types start
  // const onlyItemTypesArray = dbData.items.map((e) => e.itemType)
  // const uniqueItemTypes = [...new Set(onlyItemTypesArray)]
  // //Get item types end

  // //Filter by item type start
  // let itemFilter = 'mug'
  // const filteredByItemType = dbData.items.filter(
  //   (e) => e.itemType === itemFilter,
  // )
  // //Filter by item type end

  // //Sort by price start
  // const lowestToHighestPrice = [...dbData.items].sort(
  //   (a, b) => a.price - b.price,
  // )
  // const highestToLowestPrice = [...dbData.items]
  //   .sort((a, b) => a.price - b.price)
  //   .reverse()
  // //Sort by price end

  // //Sort by added start
  // const oldestToNewestItem = [...dbData.items].sort((a, b) => a.added - b.added)
  // const newestToOldestItem = [...dbData.items]
  //   .sort((a, b) => a.added - b.added)
  //   .reverse()
  // //Sort by added end

  // //Return unique brands start
  // const onlyBrandsArray = dbData.items.map((e) => e.manufacturer)
  // const uniqueBrands = [...new Set(onlyBrandsArray)]
  // //Return unique brands end

  // //Filter by brand start
  // let filterKeys = ['Metz---Kautzer', 'Feil-Dooley-and-Reinger']
  // const filteredResult = filterKeys.length
  //   ? filterKeys
  //       .map((key) => [...dbData.items.filter((e) => e.manufacturer === key)])
  //       .flat(1)
  //   : dbData.items
  // //Filter by brand end

  // //Brand search start
  // let searchKey = 'Metz---Kautzer'
  // const searchResults = uniqueBrands
  //   .map((e) => e.includes(searchKey) && e)
  //   .filter((e) => e !== false)
  // //Brand search end

  // //Return unique tags start
  // const onlyTagsArray = dbData.items.map((e) => e.tags).flat(1)
  // const uniqueTags = [...new Set(onlyTagsArray)]
  // //Return unique tags end

  // //Filter by tags start
  // let tagFilterKeys = ['Trees', 'Beach', 'Ocean']
  // const filteredByTagsResult = tagFilterKeys.length
  //   ? tagFilterKeys
  //       .map((key) => [...dbData.items.filter((e) => e.tags.includes(key))])
  //       .flat(1)
  //   : dbData.items
  // //Filter by tags end

  // //Tag search start
  // let searchTag = 'Beach'
  // const searchTagsResults = uniqueTags
  //   .map((e) => e.includes(searchTag) && e)
  //   .filter((e) => e !== false)
  // //Tag search end
  
  return (
    <div className="Home">
      <Header />
      <Products />
    </div>
  )
}

Home.propTypes = {
  dbData: PropTypes.object.isRequired,
  fetchItemsData: PropTypes.func.isRequired,
  fetchCompaniesData: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  dbData: state.dbData,
})

export default connect(mapStateToProps, { fetchItemsData, fetchCompaniesData })(
  Home,
)
