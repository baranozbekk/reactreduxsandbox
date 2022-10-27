import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  fetchItemsData,
  fetchCompaniesData,
} from '../../state/actions/dbDataActions'

import Cart from './Cart'

import logo from './Logo.svg'

const Header = ({ fetchItemsData, fetchCompaniesData, dbData }) => {
  useEffect(() => {
    console.log('db is: ', dbData)
    fetchItemsData()
    fetchCompaniesData()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <div id="header">
        <div className="header-container">
          <div className="logo-container">
            <img className="img-itself" src={logo} alt="Brand Logo" />
          </div>
          <Cart />
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  dbData: PropTypes.object.isRequired,
  fetchItemsData: PropTypes.func.isRequired,
  fetchCompaniesData: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  dbData: state.dbData,
})

export default connect(mapStateToProps, { fetchItemsData, fetchCompaniesData })(
  Header,
)
