import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ProductItem from './ProductItem'

import { changeSelectedItemType } from '../../state/actions/userPreferencesActions'

const Products = ({ dbData, changeSelectedItemType }) => {
  const onClickHandler = (e) => {
    setSelected(e)
    changeSelectedItemType(e)
  }
  const [itemTypes, setItemTypes] = useState([])
  const [selected, setSelected] = useState('mug')
  const [items, setItems] = useState([])
  useEffect(() => {
    if (dbData.items) {
      const onlyItemTypesArray = dbData.items.map((e) => e.itemType)
      const uniqueItemTypes = [...new Set(onlyItemTypesArray)]
      setItemTypes(uniqueItemTypes)
      setItems(dbData.items)
    }
  }, [dbData.items])
  return (
    <div id="products">
      <div className="products-container">
        <div className="products-title">Products</div>
        <div className="product-type-selector">
          <div className="product-type-selector-container">
            {itemTypes &&
              itemTypes.map((e) => (
                <div
                  key={e}
                  className={
                    'product-type' +
                    (selected === e ? ' selected-product-type' : '')
                  }
                  onClick={(e) => onClickHandler(e.target.innerHTML)}
                >
                  {e}
                </div>
              ))}
          </div>
        </div>
        <div className="product-items">
          <div className="product-items-container">
            {items &&
              items
                .filter((e) => e.itemType === selected)
                .map((item) => (
                  <ProductItem
                    key={item.slug}
                    price={item.price}
                    name={item.name}
                    itemType={item.itemType}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}

Products.propTypes = {
  dbData: PropTypes.object.isRequired,
  userPreferences: PropTypes.object.isRequired,
  changeSelectedItemType: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  dbData: state.dbData,
  userPreferences: state.userPreferences,
})

export default connect(mapStateToProps, { changeSelectedItemType })(Products)
