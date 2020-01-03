import Reach from 'react'
import { Select } from 'antd'
import { map } from 'lodash'
import styles from './Header.module.less'

const Option = Select.Option

const CategoryList = [
  { key: 'trending', name: '热门' },
  { key: 'upcome', name: '新生' },
]

const PeriodList = [
  { key: 'day', name: '今日' },
  { key: 'week', name: '本周' },
  { key: 'month', name: '本月' }
]


function Header({ }) {
  return <div className={styles.gold_header}>
    <div className={styles.title}>
      <img className={styles.title_icon} src="https://e-gold-cdn.xitu.io/static/github.png?9140c37" />
      <p className={styles.title_name}>Github</p>
    </div>
    <Select defaultValue="trending">
      {map(CategoryList, item => <Option key={item.key}>{item.name}</Option>)}
    </Select>
    <Select defaultValue="day">
      {map(PeriodList, item => <Option key={item.key}>{item.name}</Option>)}
    </Select>
  </div>
}

export default Header
