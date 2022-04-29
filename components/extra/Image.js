import Image from 'next/image'
function CustomImage({ alt, ...props }) {
  const [src, setSrc] = React.useState(props.src);

  return (
    <Image {...props} src={src} alt={alt} onError={() => setSrc('/assets/image-error.png')} placeholder="blur" blurDataURL="/assets/image-placeholder.png"
    />
  );
}
export default CustomImage