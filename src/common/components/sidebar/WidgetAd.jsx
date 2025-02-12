import Image from "next/image";

const WidgetAd = ({url, image, height, width}) => {
  return (
    <div className="axil-single-widget widget widget_ads mb--30">
      <div className="thumbnail">
        <span href={url}>
            <Image
            src={image}
            alt="Ads Image"
            height={height}
            width={width}
            priority={true}
            />
        </span>
      </div>
    </div>
  );
};

export default WidgetAd;
