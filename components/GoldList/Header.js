import Reach from 'react'
import { Select } from 'antd'
import { map } from 'lodash'

const Option = Select.Option

const CategoryList = [
  { key: 'all', name: '首页' },
  { key: 'frontend', name: '前端' },
  { key: 'backend', name: '后端' }
]

function Header({ }) {
  return <div>
    <div>header-gold</div>
    <Select>
      {map(CategoryList, item => <Option key={item.key}>{item.name}</Option>)}
    </Select>
  </div>
}

export default Header
