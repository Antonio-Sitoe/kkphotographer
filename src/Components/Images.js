import Image from 'next/image';
import { ImagesStyle } from '../Styles/Styles';

const Images = ({ src, titles }) => {
  return (
    <ImagesStyle>
      <Image src={src} alt='profile pic' width={500} height={400} />
      <span>{titles}</span>
    </ImagesStyle>
  );
};

export default Images;
