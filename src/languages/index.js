import hu from './hu.json';
import en from './en.json';
import sr from './sr.json';

export const dictionaryList = { en, hu, sr };

export const languageOptions = {
  en: 'English',
  hu: 'Magyar',
  sr: 'Srpski'
};

export const options = [
  { value: "en", label: "England", icon: "en.png" },
  { value: "hu", label: "Hungary", icon: "hu.png" },
  { value: "sr", label: "Serbia", icon: "sr.png" }
];