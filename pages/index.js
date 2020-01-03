import React from 'react'
import Home from '../components/Home'
import Page from './_app'
import { fetchGoldList } from '../reducer/gold'

import { connect } from 'react-redux'
import { fetchGithubList } from '../reducer/github'

const Index = () => (
  <Home />
)

Index.getInitialProps = async (ctx) => {
  await ctx.store.dispatch(fetchGoldList({
    category: "frontend",
    order: "time",
    offset: 0,
    limit: 30
  }))
  await ctx.store.dispatch(fetchGithubList({
    category: "trending",
    period: "day",
    lang: "javascript",
    offset: 0,
    limit: 30
  }))
  return
}

export default connect(null, { fetchGoldList })(Index) 