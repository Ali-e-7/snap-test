import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import "./style.scss";

import { useState, useEffect } from 'react';
export default function SearchInput() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
  return (
    <>
      <header  className={`site-header ${visible ? 'is-visible' : 'is-hidden'} header-search`} >
        <input type="text" className="search__input" placeholder="جستجو   " />
        <Icon path={mdiMagnify} size={1.4} className="search__icon" />
        </header>
        
    </>
  );
}
