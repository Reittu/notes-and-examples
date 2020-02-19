function translatePigLatin(str) {
  if(/^[aeiou]/.test(str)){
    return str += "way";
  }
  else {
    return str.replace(/(^[^aeiou]+)(.*)/, '$2$1ay');
  }
}

translatePigLatin("consonant");