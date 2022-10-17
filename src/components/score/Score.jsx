import styles from './Score.module.css'

import Icon from '../icon/Icon'

function Score({scoreX, scoreCircle}) {
  return (
    <>
      <h4>Placar:</h4>
      <div className={styles.score}>
        <div className={styles.scoreContent}>
          <Icon iconName='circle' />
          <h4>{scoreCircle}</h4>
        </div>
        <div className={styles.scoreContent}>
          <Icon iconName='x' />
          <h4> {scoreX}</h4>
        </div>
      </div>
    </>
  )
}

export default Score