export const Button = ({onClick, text, styles}) => {
  return(
    <button style={styles} onClick={onClick}>{text}</button>
  )
}