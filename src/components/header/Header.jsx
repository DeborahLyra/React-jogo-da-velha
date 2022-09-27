import styles from './Header.module.css'

import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"

function Header () {
  return(
    <div className={styles.header}>
      <Title>JOGO DA VELHA</Title>
    <Subtitle>Criado por Deborah Lyra</Subtitle>
    </div>
  )
  }


export default Header