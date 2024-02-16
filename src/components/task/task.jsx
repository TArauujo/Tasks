import classNames from 'classnames'
import styles from './task.module.css'
import { useState } from 'react'

function Task (props) {
  const [isCompleted, setIsCompleted] = useState(props.completed);
  return (
    <div onClick = {() => setIsCompleted(!isCompleted)}className={classNames(
      styles.task, {
        [styles.completed]: isCompleted
      }
    )}>
      {props.text}
    </div>
  )
}

export default Task