import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* <div className="container-fluid"> */}
        <div className="row justify-content-between ">
          <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6">
            <div className="main-wrapper container-fluid">
              <div className="footer-element">
                <div className="detail">
                  <div className="company-detail">
                    <h4>Company</h4>
                    <p>
                      <span>{`-`}</span> About Us
                    </p>
                    <p>
                      <span>{`-`}</span> Policy
                    </p>
                  </div>
                  <div className="contact-us">
                    <h4>Contact</h4>
                    <div className="gmail-wrapper common-wrapper">
                      <img src="/icons/gmail.png" alt="" />
                      <p>service@gmail.com</p>
                    </div>
                    <div className="phone-wrapper common-wrapper">
                      <img src="/icons/phone.png" alt="" />
                      <p>9062698763</p>
                    </div>
                  </div>
                </div>
                <div className="social-media">
                  <h4>Follow Us</h4>
                  <div className="icon-wrapper">
                    <img src="/icons/fb.png" alt="" />
                    <img src="/icons/twitter.png" alt="" />
                    <img src="/icons/insta.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="copy-right">
                <p>© 2022 Developed by Ramailo Technology</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6">
            <div className="footer-image">
              {/* <img src="images/footer-bg.webp" alt="footer-bg" /> */}

              <div className="comp-desc">
                <h4>Ramailo Technology</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
