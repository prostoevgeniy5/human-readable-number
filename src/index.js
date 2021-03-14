module.exports = function toReadable (number) {
    const units = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const secondTen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ]
    const dozens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ]
    const hundreds  = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred" ]
    
    let temp = number.toString().split('');
    let length = temp.length;
    let result; 
    if(number >= 10 && number < 20) {
          return secondTen[number -10];
      }
    result = temp.map((el, ind) => {
      let res = +el;
      if(length === 3 && ind === 0) {
          return hundreds[res - 1] + " ";
      }else if(length === 3 && ind === 1) {
          if(dozens[res - 1] === undefined) {
              return
          }
          return dozens[res - 1] + " ";
      }else if(length === 3 && ind === 2) {
          if(units[res - 1] === undefined) {
              return;
          }
          return units[res - 1] + " ";
      } else if (length === 2 && ind === 0 && number >= 20) {
          return dozens[res - 1] + " ";
      }else if(length === 2 && ind === 1 && number >= 20) {
          if(units[res - 1] === undefined) {
              return
          }
          return units[res - 1] + " ";
      }else if(length === 1) {
          if(units[res - 1] === undefined) {
              return "zero"
          } else {
            return units[res - 1];
          }

      }
    })
      result = result.join('');

      return result;
}
