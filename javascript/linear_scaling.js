function linearScaling(value, domainMin, domainMax, rangeMin, rangeMax) {
  const stepMultiplier = (domainMax - domainMin) / (rangeMax - rangeMin);
  return rangeMin + stepMultiplier * (value - domainMin); 
}
