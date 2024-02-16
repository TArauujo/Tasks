import classNames from 'classnames'
import styles from './task.module.css'

function Task (props) {

  return (
    <div className={classNames(
      styles.task
    )}>
      {props.text}
    </div>
  )
}

export default Task