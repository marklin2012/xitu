import React from 'react'
import PropType from 'prop-types'
import moment from 'moment'
import Link from 'next/link'
import styles from './Item.module.less'

const Item = ({ item }) => {
  return <Link href={item.url} prefetch={false}>
    <a className={styles.gold_item}>
      <div className={styles.countLabel}>{item.collectionCount}</div>
      <div>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.subTetle}>
          <div className={styles.time}>{moment(item.date).fromNow()}</div>
          <div className={styles.username}>{item.user.username}</div>
        </div>
      </div>

    </a>
  </Link>
}

Item.propType = {
  item: PropType.object,
}


export default Item