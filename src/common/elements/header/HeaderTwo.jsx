import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Nav from "./Nav";
import MobileMenu from './MobileMenu';
import SocialData from "../../../data/social/SocialData.json";

const HeaderTwo = ({darkLogo, lightLogo, postData }) => {

  if (typeof window !== "undefined") {
    var colorMode = window.localStorage.getItem('color-mode');
  }

    const dateFormate = () => {
        var day = new Date().getDate();
        var month = new Date().toLocaleString("en-US", { month: "long" });
        var year = new Date().getFullYear();
        
        var todayDate = (day + " " + month + "," + " " + year);
        
        return todayDate;
    }

	const [showMMenu, SetShowMMenu] = useState(false);
    
    const MobileShowHandler = () => SetShowMMenu(true);  
    const MobileHideHandler = () => SetShowMMenu(false); 

	const [togglaClass, setTogglaClass] = useState(false);

	const toggleHandler = () => {
        setTogglaClass(active => !active);
   }

  return (
    <>
      <header className="header axil-header header-style-6 header-light">
        <div className="header-top">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xl-4">
              <ul className="social-icon color-white md-size justify-content-center justify-content-sm-start">
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
                  <span href={SocialData.linked.url}>
                    <i className={SocialData.linked.icon} />
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-xl-4">
              <div className="logo text-center">
                  <Link href="/">
                      <span>
                          <Image
                          className="dark-logo"
                          width={141}
                          height={37}
                          src={(colorMode === "Dark" ? lightLogo || "/images/logo/logo-white2.webp" : darkLogo || "/images/logo/logo-black.webp") || "/images/logo/logo-black.webp" }
                          alt="Blogar logo"
                          />
                      </span>
                  </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-xl-4">
              <div className="header-top-bar d-flex justify-content-center justify-content-lg-end flex-wrap align-items-center">
                <ul className="header-top-date liststyle d-flex flrx-wrap align-items-center mr--20">
                  <li>
                  <Link href="#">
                      <span>{dateFormate()}</span>
                  </Link>
                  </li>
                </ul>
                <ul className="header-top-nav liststyle d-flex flrx-wrap align-items-center">
                  <li>
                  <Link href="#">
                    <span>Advertisement</span>
                  </Link>
                  </li>
                  <li>
                      <Link href="#">
                          <span href="#">About</span>
                      </Link>
                  </li>
                  <li>
                      <Link href="#">
                    <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-7 col-12">
              <div className="mainmenu-wrapper d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <Nav posts={postData}/>
                </nav>
              </div>
            </div>
            <div className="col-xl-5 col-12">
              <div className="header-search d-flex flex-wrap align-items-center justify-content-center justify-content-xl-end">
                <form className="header-search-form d-sm-block d-none">
                  <div className="axil-search form-group">
                    <button type="submit" className="search-button">
                      <i className="fal fa-search" />
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </form>
                <div className="mobile-search-wrapper d-sm-none d-block">
                  <button className="search-button-toggle" onClick={toggleHandler}>
                    <i className="fal fa-search" />
                  </button>
                  <form className={`header-search-form ${togglaClass ? "open": ""}`}>
                    <div className="axil-search form-group">
                      <button type="submit" className="search-button">
                        <i className="fal fa-search" />
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </div>
                <ul className="metabar-block">
                  <li className="icon">
                      <Link href="#">
                      <span>
                          <i className="fas fa-bookmark" />
                      </span>
                    </Link>
                  </li>
                  <li className="icon">
                      <Link href="#">
                      <span>
                          <i className="fas fa-bell" />
                      </span>
                    </Link>
                  </li>
                  <li>
                      <Link href="#">
                      <span>
                      <Image
                      width={40}
                      height={40}
                      src="/images/others/author.webp"
                      alt="Author Images"
                      />
                      </span>
                    </Link>
                  </li>
                </ul>
                {/* Start Hamburger Menu  */}
                <div className="hamburger-menu d-block d-xl-none">
                  <div className="hamburger-inner">
                    <div className="icon" onClick={MobileShowHandler}>
                      <i className="fal fa-bars" />
                    </div>
                  </div>
                </div>
                {/* End Hamburger Menu  */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu menuShow={showMMenu} menuHide={MobileHideHandler}/>
    </>
  );
};

export default HeaderTwo;
