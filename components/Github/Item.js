import React from 'react'
import { Card, Icon } from 'antd'
import PropType from 'prop-types'
import styles from './Item.module.less'
import Link from 'next/link'
const Item = ({ item }) => {
  return <Link href={item.url}>
    <a className={styles.github_item}>
      <div className={styles.item_box}>
        <div className={styles.item}>
          <div className={styles.item_content}>
            <div className={styles.repo_header}>
              <span>{item.username}</span> / <span>{item.reponame}</span>
            </div>
            <div className={styles.repo_desc}>
              {item.description}
            </div>
            <div className={styles.repo_meta}>
              <span className={styles.meta_item}> <Icon className={styles.meta_item_icon} type="star" theme="filled" />{item.starCount}</span>
              <span className={styles.meta_item}><Icon className={styles.meta_item_icon} type="fork" />{item.forkCount}</span>
              <span className={styles.meta_item}><span className={styles.lang_icon} />{item.lang}</span>
            </div>
          </div>
        </div>

      </div>

    </a>
  </Link>
}

Item.propType = {
  item: PropType.object,
}

export default Item