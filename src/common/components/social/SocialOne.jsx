import SocialData from '../../../data/social/SocialData.json';

const SocialOne = () => {
  return (
    <div className="bg-color-grey axil-section-gapTop">
      <div className="container">
        <div className="axil-social-wrapper bg-color-white radius">
          <ul className="social-with-text">
            <li className="twitter">
              <span href={SocialData.twitter.url}>
                <i className={SocialData.twitter.icon} />
                <span>Twitter</span>
              </span>
            </li>
            <li className="facebook">
              <span href={SocialData.fb.url}>
                <i className={SocialData.fb.icon} />
                <span>Facebook</span>
              </span>
            </li>
            <li className="instagram">
              <span href={SocialData.instagram.url}>
                <i className={SocialData.instagram.icon} />
                <span>Instagram</span>
              </span>
            </li>
            <li className="youtube">
              <span href={SocialData.yt.url}>
                <i className={SocialData.yt.icon} />
                <span>Youtube</span>
              </span>
            </li>
            <li className="pinterest">
              <span href={SocialData.pinterest.url}>
                <i className={SocialData.pinterest.icon} />
                <span>Pinterest</span>
              </span>
            </li>
            <li className="discord">
              <span href={SocialData.discord.url}>
                <i className={SocialData.discord.icon} />
                <span>Discord</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialOne;
