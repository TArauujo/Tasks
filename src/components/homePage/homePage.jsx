import { useState } from 'react'

import styles from './homePage.module.css'

import Input from '../input/input'
import Task from '../task/task'

export default function HomePageComponent () {
  return (
    <div className={styles.container}>
      <div className={styles.containerList}>
        <h2>Lista de tarefas</h2>
        <Input type="text" placeholder="Digite uma tarefa" />
        <div className={styles.taskList}>
          <Task text="Nossaa veeelhoo!!" completed/>
          <Task text="Caraca hahahaha!!"/>
          <Task text="Puuuuts!!" completed/>
          <Task text="Beleza, tá sabendo legal!" />
        </div>
      </div>
    </div>
  )
}