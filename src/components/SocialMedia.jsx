import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';






// social media component

const SocialMedia = () => {
    return (
      <div className="app__social">
        <div>
          <BsTwitter />
        </div>
        <div>
          <BsInstagram />
        </div>
        <div>
          <FaFacebook />
        </div>
      </div>
    );
}

export default SocialMedia
