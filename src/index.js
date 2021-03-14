module.exports = function toReadable (number) {
  var units = [" one", " two", " three", " four", " five", " six", " seven", " eight", " nine"]
  var secondTen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ]
  var dozens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ]
  var hundreds  = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred" ]
  
  var temp = number.toString().split('');
  var length = temp.length;
  var result; 
  if(number >= 10 && number < 20) {
    return secondTen[number -10];
  }
  result = temp.map((el, ind) => {
  var res = Number(el);
  if(length === 3 && ind === 0) {
    return hundreds[res - 1] + " ";
  }else if(length === 3 && ind === 1) {
    if(dozens[res - 1] === undefined) {
    return
    } else if(dozens[res - 1] === "ten") {
      return secondTen[(number % 100) - 10]
    }
    return dozens[res - 1] + " ";
  }else if(length === 3 && ind === 2) {
    if(units[res - 1] === undefined) {
    return;
    } else if(+temp[ind - 1] !== 1) {
    return units[res - 1].trim();
    } else {
      return
    }
  } else if (length === 2 && ind === 0 && number >= 20) {
    return dozenll
    lls[res - 1];
  }else if(length === 2 && ind === 1 && number >= 20) {
    if(units[res - 1] === undefined) {
    return
    }
    return units[res - 1];
  }else if(length === 1) {
    if(units[res - 1] === undefined) {
    return "zero"
    } else {
    return (units[res - 1].trim());
    }

  }
  })
  result = result.join('').trim();

  return result;
}
