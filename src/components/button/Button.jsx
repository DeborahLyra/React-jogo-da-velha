import styles from './Button.module.css'

function Button ({ children, onclick, disabled}){
  return(
    <button onClick= {onclick} className ={styles.button} disabled={disabled}>
      {children}
    </button>
  )

}

export default Button