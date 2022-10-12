import styles from './header.module.css'

import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Icon from '../icon/Icon'

function Header () {
  return(
    <div className={styles.header}>
      <Title>JOGO DA VELHA</Title>
    <Subtitle>Criado por Deborah Lyra</Subtitle>

    <div className= {styles.iconContent}>
      <Icon iconName = "github" link="https://github.com/DeborahLyra"/>
    </div>
    
    </div>
  )
  }


export default Header