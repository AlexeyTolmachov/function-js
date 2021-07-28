
const isAdult = function (userAge) {
    const nowYear = 2021;
    const age = nowYear - userAge;
    if (isNaN(userAge)){
        return null ;
    }
    return age >= 18;
  };
   
  const checkMultiplicity = function (numb1, numb2) {
    if (isNaN(numb1 - numb2 )){
        return null;
    }
      return numb1 % numb2 === 0;
  };

  const existenceOfaTriangle = function (a, b ,c) {
    if (isNaN(a - b - c)){
        return null ;
    }  
          return a + b >= c && a + c >= b && b + c >= a
  };

  const areaOfaRhombus = function (a, h) {
    if (isNaN(a - h)) {
      return null; 
    }
    return a*h ;  
  };
  
  const cylinderArea = function (r, h) {
   if( isNaN(r -h)) {
     return null; 
   }
    return  6.28 * r *(h + r);
  };

  const areaOfaTriangle = function(b, h) {
    if (isNaN(b - h)){
      return null;
    }
    return 0.5 * b * h ;
  };

  areaOfaRectangle = function (a, b) {
    if(isNaN(a - b)){
      return null;
    }
    return a * b ;  
  };
 


    
  
  
