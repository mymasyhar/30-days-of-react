export const Button = ({style, text, onClick, disabled}) => {
  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}