import Image from 'next/image';
import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="wordpress">
                Wordpress
              </button>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <Image src="./imgs/portfolio/YDF.jpg" alt="portfolio"  
                    width={300}
                    height={200}/>
                </div>
                <div className="portfolio-info">
                  <h4>Mobile App</h4>
      <div className="icon">
        {/* Optional: View Project Icon */}
        <a
          href="https://github.com/GSNSAMPATH/YFD"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-link"
        >
          <i className="fa fa-github" style={{ fontSize: '24px', color: '#000' }} />
        </a>
      </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
           {/* Portfolio Item */}
<div className="portfolio-item padd-15" data-category="web-design">
  <div className="portfolio-item-inner shadow-dark">
    <div className="portfolio-img">
      <Image
        src="./imgs/portfolio/pita web.png"
        alt="portfolio"
        width={300}
        height={200}
      />
    </div>
    <div className="portfolio-info">
      <h4>Web</h4>
      <div className="icon">
        {/* Optional: View Project Icon */}
        <a
          href="https://github.com/GSNSAMPATH/FHSSAsosiationNews"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-link"
        >
          <i className="fa fa-github" style={{ fontSize: '24px', color: '#000' }} />
        </a>
      </div>
    </div>
  </div>
</div>

            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
<div className="portfolio-item padd-15" data-category="web-design">
  <div className="portfolio-item-inner shadow-dark">
    <div className="portfolio-img">
      <Image
        src="./imgs/portfolio/Screenshot (101).png"
        alt="portfolio"
        width={300}
        height={200}
      />
    </div>
    <div className="portfolio-info">
      <h4>Web</h4>
      <div className="icon">
        <a
          href="https://github.com/Kisara2001/WAD_final_project/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-link"
        >
          <i className="fa fa-github"style={{ fontSize: '24px', color: '#000' }} />
        </a>
      </div>
    </div>
  </div>
</div>

            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            {/* <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                <Image src="./imgs/portfolio/4.jpg" alt="portfolio" 
                    width={300}
                    height={200} />
                </div>
                <div className="portfolio-info">
                  <h4>Banner Design</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div> */}
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            {/* <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                <Image src="./imgs/portfolio/5.jpg" alt="portfolio" 
                    width={300}
                    height={200} />
                </div>
                <div className="portfolio-info">
                  <h4>Wordpress</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div> */}
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                <Image src="./imgs/portfolio/Screenshot (103).png" alt="portfolio" 
                    width={300}
                    height={200} />
                </div>
                <div className="portfolio-info">
                  <h4>Web Design</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
