import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import reducer from '../reducer'

const makeStore = (initialState, options) => {
  console.log('init', initialState)
  return createStore(reducer, initialState, applyMiddleware(thunk))
}

class Page extends App {
  static async getInitialProps({ Component, ctx }) {
    // ctx.store.dispatch()
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps }
  }
  render() {
    const { Component, pageProps, store } = this.props
    return <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  }
}
export default withRedux(makeStore)(Page)