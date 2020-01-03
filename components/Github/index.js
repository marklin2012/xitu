import React from 'react'
import Header from './Header'
import { List } from 'antd'
import { connect } from 'react-redux'
import Item from './Item'
import styles from './index.module.less'

function Github({ githubList }) {
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
export default connect(mapStateToProps)(Github)