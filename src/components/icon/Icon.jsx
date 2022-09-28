function Icon ({iconName, sise, link }){
  return (

   <a href={link} target='_blank'>
    <img src = {`/icons/${iconName}.svg`} width={sise}/>
   </a> 
  )
}

Icon.defaultProps = {
  sise : '30px'
}

export default Icon