import React, { useEffect } from 'react'
import styles from './index.module.less'
import Header from './Header'
import Axios from 'axios'
import { connect } from 'react-redux'
import goldAction from '../../reducer/gold'
import { size, map } from 'lodash'
import { List } from 'antd'
import moment from 'moment'
import Item from './Item'
// const axios = Axios.create({
//   baseURL: 'http://localhost:3000'
// })

function GoldList(props) {

  useEffect(() => {
    if (size(props.list) <= 0) {
      loadData()

    }
  }, [])

  const loadData = async () => {
    console.log('客户端获取')
    const para = {
      category: "frontend",
      order: "time",
      offset: 0,
      limit: 30
    }
    const res = await Axios.post('/resources/gold', para)
    // console.log('res:', res)
  }
  console.log('list:', props.list)
  return <div className={styles.gold_list}>
    <Header />
    <List>
      {map(props.list, item => {
        return <Item item={item} key={item.id} />
      })}
    </List>
  </div>
}

const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  return {
    list: state.gold.list
  }
}

const mapDispatchToRrops = dispatch => {
  console.log('tesst:', goldAction)
  return dispatch(goldAction)
}

export default connect(
  mapStateToProps,
)(GoldList)