import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../utils";
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import AddBanner from "../ad-banner/AddBanner";

const PostSectionThree = ({ postData, adBanner, bgColor, heading }) => {

  const firstPost = postData[0];

  return (
    <div className={`axil-video-post-area axil-section-gap ${bgColor || "bg-color-black"}`}>
      <div className="container">
      {adBanner === true ?  
			<div className="row">
            <div className="col-lg-12">
              <spanddBanner
                img="/images/add-banner/banner-03.webp"
                pClass="mb--30"
              />
            </div>
          </div> : ""}
        {heading ? <SectionTitleOne title={heading} /> : ""}
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
            <div className="content-block post-default image-rounded mt--30">
            {firstPost.featureImg ? 
              <div className="post-thumbnail">
                <Link href={`/post/${firstPost.slug}`}>
                  <span>
                    <Image
                      src={firstPost.featureImg}
                      alt={firstPost.title}
                      height={500}
                      width={600}
                      priority={true}
                    />
                  </span>
                </Link>
                {firstPost.postFormat === 'video' ? <Link href={`/post/${firstPost.slug}`}>
                  <span className="video-popup position-top-center">
                    <span className="play-icon" />
                  </span>
                </Link> : ""}
               
              </div>:""}
              <div className="post-content">
                <div className="post-cat">
                  <div className="post-cat-list">
                    <Link href={`/category/${slugify(firstPost.cate)}`}>
                      <span className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text={firstPost.cate}>
                            {firstPost.cate}
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
                <h3 className="title">
                  <Link href={`/post/${firstPost.slug}`}>
                    <span>{firstPost.title}</span>
                  </Link>
                </h3>
                <div className="post-meta-wrapper">
                  <div className="post-meta">
                    <div className="content">
                      <h6 className="post-author-name">
                        <Link href={`/author/${slugify(firstPost.author_name)}`}>
                          <span className="hover-flip-item-wrapper">
                            <span className="hover-flip-item">
                              <span data-text={firstPost.author_name}>
                                {firstPost.author_name}
                              </span>
                            </span>
                          </span>
                        </Link>
                      </h6>
                      <ul className="post-meta-list">
                        <li>{firstPost.date}</li>
                        <li>{firstPost.read_time}</li>
                      </ul>
                    </div>
                  </div>
                  <ul className="social-share-transparent justify-content-end">
                    {firstPost.author_social.map((social) =>(
                      <li key={social.url}>
                        <span href={social.url}>
                          <i className={social.icon} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
            <div className="row">
              {postData.slice(1, 5).map((data) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={data.slug}>
                  <div className="content-block post-default image-rounded mt--30">
                  {data.featureImg ? 
                    <div className="post-thumbnail">
                      <Link href={`/post/${data.slug}`}>
                      <span>
                        <Image
                          src={data.featureImg}
                          alt={data.title}
                          height={190}
                          width={285}
                          priority={true}
                        />
                      </span>
                    </Link>
                    {data.postFormat === 'video' ? <Link href={`/post/${data.slug}`}>
                      <span className="video-popup size-medium position-top-center">
                        <span className="play-icon" />
                      </span>
                    </Link> : ""}
                    
                    </div>
                    :""}
                    <div className="post-content">
                      <div className="post-cat">
                        <div className="post-cat-list">
                        <Link href={`/category/${slugify(data.cate)}`}>
                          <span className="hover-flip-item-wrapper">
                            <span className="hover-flip-item">
                              <span data-text={data.cate}>
                                {data.cate}
                              </span>
                            </span>
                          </span>
                        </Link>
                        </div>
                      </div>
                      <h5 className="title">
                      <Link href={`/post/${data.slug}`}>
                        <span>{data.title}</span>
                      </Link>
                      </h5>
                    </div>
                  </div>
                </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionThree;
