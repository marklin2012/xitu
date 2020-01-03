import React, { useEffect } from 'react'
import styles from './index.module.less'
import Header from './Header'
import Axios from 'axios'
import { connect } from 'react-redux'
import { fetchGoldList } from '../../reducer/gold'
import { size, map } from 'lodash'
import { List } from 'antd'
import Item from './Item'

function GoldList(props) {

  useEffect(() => {
    if (size(props.list) <= 0) {
      loadData()
    }
  }, [])

  const loadData = async () => {
    // 客户端获取
    console.log('客户端获取')
    props.fetchGoldList({
      category: "frontend",
      order: "time",
      offset: 0,
      limit: 30
    })
  }
  return <div className={styles.gold_list}>
    <Header />
    <List className={styles.list_body} dataSource={props.list} renderItem={item => {
      return <Item item={item} key={item.id} />
    }} />
  </div>
}

const mapStateToProps = state => {
  return {
    list: state.gold.list
  }
}

const mapDispatchToRrops = {
  fetchGoldList,
}

export default connect(
  mapStateToProps,
  mapDispatchToRrops
)(GoldList)