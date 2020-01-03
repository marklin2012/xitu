import React, { useEffect } from 'react'
import Header from './Header'
import { List } from 'antd'
import { size } from 'lodash'
import { connect } from 'react-redux'
import Item from './Item'
import styles from './index.module.less'
import { fetchGithubList } from '../../reducer/github'

function Github({ githubList, fetchGithubList }) {
  useEffect(() => {
    if (size(githubList) <= 0) {
      loadData()
    }
  }, [])

  const loadData = async () => {
    // 客户端获取
    console.log('客户端获取')
    fetchGithubList({
      category: "trending",
      period: "day",
      lang: "javascript",
      offset: 0,
      limit: 30
    })
  }
  return <div className={styles.github_list}>
    <Header />
    <List
      className={styles.list_body}
      grid={{
        gutter: 0,
        xs: 1,
        md: 2,
      }}
      dataSource={githubList} renderItem={item => {
        return <Item item={item} key={item.id} />
      }}
    />
  </div>
}
const mapStateToProps = state => {
  return {
    githubList: state.github.list,
  }
}

const mapDispatchToProps = {
  fetchGithubList,
}
export default connect(mapStateToProps, mapDispatchToProps)(Github)