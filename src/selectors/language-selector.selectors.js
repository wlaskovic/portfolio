import React, { useContext, useEffect } from 'react';
import RegionSelect from 'react-region-flag-select';

import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/Language';

import './language-selector.styles.scss';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = e => userLanguageChange(e.target.value);

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem('rcml-lang');
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (

    <RegionSelect
    isPhoneCode={false}
    customCountryOnly={true}
    customCountryCode={['AS','AS','AU']}/> 
    // <select
    //   onChange={handleLanguageChange}
    //   value={userLanguage}
    //   className="browser-default right" 
    // >

    //   {Object.entries(languageOptions).map(([id, name]) => (
    //     <option key={id} value={id} className={`${id}`} style={{backgroundImage:`url('/assets/flags/en.png')`}}>
    //     {name}
    //     </option>
    //   ))}
    // </select>
    
  );
};