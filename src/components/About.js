import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="/">Web design</a>
                </li>
                <li>
                  <a href="/">Development</a>
                </li>
                <li>
                  <a href="/">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="/">Company</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>NewsMonkey Private Limited</h3>
              <p>
                NewsMonkey is an app that provides daily news on almost all
                topics
              </p>
            </div>
          </div>
          <p className="copyright">NewsMonkey © 2023</p>
        </div>
      </footer>
    </div>
  );
}
