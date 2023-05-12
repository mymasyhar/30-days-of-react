import images from "./images/images";
const mainStyles = {
  padding: 20,
  display: 'flex',
  gap: 10,
  justifyContent: 'center'
}
const Image = (props) => {
  return (
    <main style={mainStyles}>
      {images.map(image => (<img width={props.width} height={props.height} src={image.source} alt={image.alt} key={image.id} />))}
      {/* <img width={props.width} height={props.height} src={props.source} alt={props.alt} key={props.id} /> */}
    </main>
  );
}
export default Image;