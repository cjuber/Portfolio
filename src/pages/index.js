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
// const fruitstand = require('../assets/images/fruitstand.png')
const band = require('../assets/images/band.png')
const oc1= require('../assets/images/OC1.png')
const oc2= require('../assets/images/OC2.png')
const l2l= require('../assets/images/l2l.png')
const badge= require('../assets/images/badge.png')
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
            <h2>About Me</h2>
            
          </header>
          <p>
          I’m an Utah native who enjoys everything digital, loves the Utah Jazz and comic books. I have also lived abroad in Belgium and through that experience, 
          I have grown to appreciate the vast diversity in this world. Even though I am certified in full-stack web development, it is only one tool on my utility belt. 
          I am currently enrolled at Utah Valley University, in the digital media program and intend on completing my undergraduate studies there.
          <br/>
          You can see my DevMountain certification here.
           <br/>   
         
          <a href='https://www.youracclaim.com/badges/8fab2baf-0f0a-495a-9a92-8c46944dd185/public_url'>
              <img src={badge}></img>
            </a>
            
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
            <h2>Projects</h2>
            <p>Click on the image to see the Github repository</p>
          </header>
          <h1>Cliqs</h1>
          <a href='https://github.com/cjuber/cliqs'>
          <img src={cliqsPic} height='300' alt=""></img>
          </a>
        
        <p>A social media site based on groups<br/>
        Using Node, React, Redux, Express, Massive, Sockets, SASS</p>
        <h1>To Do List</h1>
        <a href='https://github.com/cjuber/noDB/tree/master/nodb'>
          <img src={toDoPic} height='300' alt=""></img>
          </a>
       
        <p>A to do list <br/>
        Using Node, React </p>
        {/* <a href='https://github.com/cjuber/html-sass'>
        <img src={fruitstand} height='350' alt=""></img>
        </a>
        <p>A simple HTML page for a Fruit Stand <br/>
        using HTML and SASS, mobile responsive</p> */}
        <h1>Band Page</h1>
        <a href='https://github.com/cjuber/html-sass'>
        <img src={band} height='350' alt=""></img>
        </a>
        <p>A simple HTML page for a Rock band <br/>
        using HTML and SASS, mobile responsive</p>

        <h1>Oil-Change</h1>
        <a href='https://github.com/Oil-Change/GroupProject'>
           <img src={oc1} width='400' alt=""></img>
           <br/>
           <br/>
           <img src={oc2} width='400' alt=""></img>
         </a>
         <p>This was a collaborative application for an oil change app to schedule a pick up of your car, get an oil change and drop it off for you   <br/>
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
            <h2>In Progress</h2>
          </header>
          
           <p>
            Projects I'm currently working on
          </p>
         <a href='https://github.com/cjuber/dopu'>
           <img src={l2l} width='400' alt=""></img>
           <br/>
           <br/>
         </a>
         <p>A drop off / pick up app for a preschool to track when children are dropped off and picked up by their parents.  <br/>
           Using Node, React, Redux, Express, Massive, Sockets, SASS
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
