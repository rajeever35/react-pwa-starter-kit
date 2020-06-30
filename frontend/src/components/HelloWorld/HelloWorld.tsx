import React, {FC, Fragment} from 'react'
import {Link} from 'react-router-dom'
import styles from './HelloWorld.scss'
import {factorial} from 'utils'

const HelloWorld: FC = () => (
  <Fragment>
    <ul className={styles.container}>
      <li className={styles.item}>1! = {factorial(1)}</li>
      <li className={styles.item}>2! = {factorial(2)}</li>
      <li className={styles.item}>3! = {factorial(3)}</li>
      <li className={styles.item}>4! = {factorial(4)}</li>
      <li className={styles.item}>5! = {factorial(5)}</li>
    </ul>
    <Link to="/second">Second page</Link>
  </Fragment>
)

export default HelloWorld
