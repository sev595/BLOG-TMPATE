import Image from 'next/image';
import Link from "next/link";

const FooterOne = () => {
  if (typeof window !== "undefined") {
    var colorMode = window.localStorage.getItem('color-mode');
  }

  return (
    <div className="axil-footer-area axil-footer-style-1 footer-variation-2">
      <div className="footer-mainmenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">World</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <span href="#">U.N.</span>
                    </li>
                    <li>
                      <span href="#">Conflicts</span>
                    </li>
                    <li>
                      <span href="#">Terrorism</span>
                    </li>
                    <li>
                      <span href="#">Disasters</span>
                    </li>
                    <li>
                      <span href="#">Global Economy</span>
                    </li>
                    <li>
                      <span href="#">Environment</span>
                    </li>
                    <li>
                      <span href="#">Religion</span>
                    </li>
                    <li>
                      <span href="#">Scandals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Politics</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <span href="#">Executive</span>
                    </li>
                    <li>
                      <span href="#">Senate</span>
                    </li>
                    <li>
                      <span href="#">House</span>
                    </li>
                    <li>
                      <span href="#">Judiciary</span>
                    </li>
                    <li>
                      <span href="#">Global Economy</span>
                    </li>
                    <li>
                      <span href="#">Foreign policy</span>
                    </li>
                    <li>
                      <span href="#">Polls</span>
                    </li>
                    <li>
                      <span href="#">Elections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Entertainment</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <span href="#">Celebrity News</span>
                    </li>
                    <li>
                      <span href="#">Movies</span>
                    </li>
                    <li>
                      <span href="#">TV News</span>
                    </li>
                    <li>
                      <span href="#">Disasters</span>
                    </li>
                    <li>
                      <span href="#">Music News</span>
                    </li>
                    <li>
                      <span href="#">Environment</span>
                    </li>
                    <li>
                      <span href="#">Style News</span>
                    </li>
                    <li>
                      <span href="#">Entertainment Video</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Business</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <span href="#">Environment</span>
                    </li>
                    <li>
                      <span href="#">Conflicts</span>
                    </li>
                    <li>
                      <span href="#">Terrorism</span>
                    </li>
                    <li>
                      <span href="#">Disasters</span>
                    </li>
                    <li>
                      <span href="#">Global Economy</span>
                    </li>
                    <li>
                      <span href="#">Environment</span>
                    </li>
                    <li>
                      <span href="#">Religion</span>
                    </li>
                    <li>
                      <span href="#">Scandals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Health</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <span href="#">Movies</span>
                    </li>
                    <li>
                      <span href="#">Conflicts</span>
                    </li>
                    <li>
                      <span href="#">Terrorism</span>
                    </li>
                    <li>
                      <span href="#">Disasters</span>
                    </li>
                    <li>
                      <span href="#">Global Economy</span>
                    </li>
                    <li>
                      <span href="#">Environment</span>
                    </li>
                    <li>
                      <span href="#">Religion</span>
                    </li>
                    <li>
                      <span href="#">Scandals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">About</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <span href="#">U.N.</span>
                    </li>
                    <li>
                      <span href="#">Conflicts</span>
                    </li>
                    <li>
                      <span href="#">Terrorism</span>
                    </li>
                    <li>
                      <span href="#">Disasters</span>
                    </li>
                    <li>
                      <span href="#">Global Economy</span>
                    </li>
                    <li>
                      <span href="#">Environment</span>
                    </li>
                    <li>
                      <span href="#">Religion</span>
                    </li>
                    <li>
                      <span href="#">Scandals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Footer Top Area  */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="logo">
              <Link href="/">
                <span>
                  <Image
                    className="dark-logo"
                    src={colorMode === "Dark" ? "/images/logo/logo-white2.webp" : "/images/logo/logo-black.webp"}
                    alt="Logo Images"
                    height={37}
                    width={141}
                  />
                </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              {/* Start Post List  */}
              <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                <ul className="social-icon color-tertiary md-size justify-content-start">
                  <li>
                    <span href="https://www.facebook.com/" rel="noopener" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </span>
                  </li>
                  <li>
                    <span href="https://www.instagram.com/">
                      <i className="fab fa-instagram" />
                    </span>
                  </li>
                  <li>
                    <span href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </span>
                  </li>
                  <li>
                    <span href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </span>
                  </li>
                </ul>
              </div>
              {/* End Post List  */}
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top Area  */}
      {/* Start Copyright Area  */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-8">
              <div className="copyright-left">
                <ul className="mainmenu justify-content-start">
                  <li>
                    <Link href="/about">
                      <span className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Contact Us">Contact Us</span>
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <span className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Privacy Policy">Privacy Policy</span>
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="AdChoices">AdChoices</span>
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Advertise with Us">
                            Advertise with Us
                          </span>
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Blogar Store">Blogar Store</span>
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="copyright-right text-start text-md-end mt_sm--20">
                <p className="b3">
                  All Rights Reserved © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Copyright Area  */}
    </div>
  );
};

export default FooterOne;
