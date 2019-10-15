import React from 'react';
// import config from '../../config';

export default function Footer() {
  return (
    <footer>
      
      {/* <ul className="icons">
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
      </ul> */}
      <ul className="copyright">
       
        
        <li>
          Images: <a href="http://unsplash.com">Unsplash</a>
        </li>
      </ul>
    </footer>
  );
}
