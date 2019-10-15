import React from 'react';
import Scrollspy from 'react-scrollspy';
import config from '../../config';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
// import { Link } from 'gatsby';

const sections = [
  { id: 'one', bg: require('../assets/images/pic01.jpg') },
  { id: 'two', bg: require('../assets/images/pic02.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
];
const cliqsPic = require('../assets/images/Cliqs.png')
const toDoPic = require('../assets/images/Todo.png')
const fruitStand = require('../assets/images/fruitStand.png')
const band = require('../assets/images/band.png')
const oc1= require('../assets/images/OC1.png')
const oc2= require('../assets/images/OC2.png')
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Projects</h2>
          </header>
          <a href='https://github.com/cjuber/cliqs'>
          <img src={cliqsPic} height='300' alt=""></img>
          </a>
        <h3>Cliqs</h3>
        <p>A social media site based on groups<br/>
        Using Node, React, Redux, Express, Massive, Sockets, SASS</p>
        <a href='https://github.com/cjuber/noDB/tree/master/nodb'>
          <img src={toDoPic} height='300' alt=""></img>
          </a>
        <h3>To Do List</h3>
        <p>A to do list <br/>
        Using Node, React </p>
        <a href='https://github.com/cjuber/html-sass'>
        <img src={fruitStand} height='350' alt=""></img>
        </a>
        <p>A simple HTML page for a Fruit Stand <br/>
        using HTML and SASS, mobile responsive</p>
        <a href='https://github.com/cjuber/html-sass'>
        <img src={band} height='350' alt=""></img>
        </a>
        <p>A simple HTML page for a Rock band <br/>
        using HTML and SASS, mobile responsive</p>


        
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>In Progress</h2>
          </header>
          <p>
            Projects I'm currently working on
          </p>
         <a href='https://github.com/Oil-Change/GroupProject'>
           <img src={oc1} width='400' alt=""></img>
           <br/>
           <br/>
           <img src={oc2} width='400' alt=""></img>
         </a>
         <p>An oil change app to schedule a pick up of your car, get an oil change and drop it off for you   <br/>
           Using Node, React, Redux, Express, Sockets, Stripe, Twillio, Material-ui
           </p>
        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>About me</h2>
          </header>
          
          <p>
            I'm a full stack web developer. Besides coding I enjoy movies, comics (mainly Batman), and the Utah Jazz. 
            I grew up in Utah and spent some time in Holland and Belgium. I studied digital media at Utah Valley University 
            and am currently enrolled in their web development program. I've also received my web developers certificate from DevMountain.
            I'm currently living in Utah County with my wife and three children.  
            <br/><br/>My skills include
            <ul className='skills'>
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Vue</li>
              <li>Express</li>
              <li>Axios</li>
              <li>Postgresql</li>
              <li>Redux</li>
              <li>Jest</li>
              <li>Sockets</li>
              
            </ul>
          </p>
          <p>
            Software Skills
            <ul className='skills'>
            <li>Postman API</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Premiere Pro</li>
            <li>After Effects</li>
            </ul>
          </p>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <header className="icons">
          <h2>Get in touch</h2>
        </header>
        {/* <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="4"
              />
            </div>
            <div className="col-12">
              <ul className="actions special">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
        </form> */}
        <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon alt ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      </div>
      <Footer />
    </section>

    <Scrollspy
      items={sections.map(s => s.id)}
      currentClassName="active"
      offset={50}
      componentTag={'div'}
    >
      {sections.map(s => {
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
