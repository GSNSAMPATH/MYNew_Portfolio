import Image from 'next/image';
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
          <Image
              src="/imgs/Sumal.jpg"
              alt="Al Siam Profile"
              className="Sumalimage"
              width={200}
              height={200}
            />
            <h1>Sumal Nadeera</h1>
            <p>full-stack developer</p>
            <div className="social-links">
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.facebook.com/sumalnadirasampath.geeganage/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/GSNSAMPATH" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/sumalnadira/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/sumal-nadeera-6a2939230/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
