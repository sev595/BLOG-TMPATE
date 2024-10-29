import SocialData from '../../../data/social/SocialData.json';

const WidgetSocialShare = () => {

  return (
    <div className="axil-single-widget widget widget_social mb--30">
      <h5 className="widget-title">Stay In Touch</h5>
      <ul className="social-icon md-size justify-content-center">
        <li>
          <span href={SocialData.fb.url}>
            <i className={SocialData.fb.icon} />
          </span>
        </li>
        <li>
          <span href={SocialData.instagram.url}>
            <i className={SocialData.instagram.icon} />
          </span>
        </li>
        <li>
          <span href={SocialData.twitter.url}>
            <i className={SocialData.twitter.icon} />
          </span>
        </li>
        <li>
          <span href={SocialData.slack.url}>
            <i className={SocialData.slack.icon} />
          </span>
        </li>
        <li>
          <span href={SocialData.linked.url}>
            <i className={SocialData.linked.icon} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSocialShare;
