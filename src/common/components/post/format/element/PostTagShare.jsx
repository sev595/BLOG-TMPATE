import Link from "next/link";
import { slugify } from "../../../../utils";

const PostTagShare = ({postTags}) => {
  return (
    <>
      <div className="tagcloud">
        {postTags.tags.map((data, index) => (
          <Link href={`/tag/${slugify(data)}`} key={index}>
            <span>{data}</span>
          </Link>
        ))}
      </div>
      <div className="social-share-block">
        <div className="post-like">
          <link href="#" />
          <span>
            <i className="fal fa-thumbs-up" />
            <span>2.2k Like</span>
          </span>
        </div>
        <ul className="social-icon icon-rounded-transparent md-size">
          <li>
            <span href="https://facebook.com/">
              <i className="fab fa-facebook-f" />
            </span>
          </li>
          <li>
            <span href="https://instagram.com">
              <i className="fab fa-instagram" />
            </span>
          </li>
          <li>
            <span href="https://twitter.com">
              <i className="fab fa-twitter" />
            </span>
          </li>
          <li>
            <span href="https://linkedin.com">
              <i className="fab fa-linkedin-in" />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PostTagShare;
