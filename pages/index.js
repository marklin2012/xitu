import React from 'react'
import Home from '../components/Home'
import Page from './_app'
import { fetchGoldList } from '../reducer/gold'
import { connect } from 'react-redux'

const Index = () => (
  <Home />
)

Index.getInitialProps = async (ctx) => {
  return ctx.store.dispatch(fetchGoldList({
    category: "frontend",
    order: "time",
    offset: 0,
    limit: 30
  }))
}

export default connect(null, { fetchGoldList })(Index) 