module.exports = function toReadable (num) {
 
   num = num.toString()
   let one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

   if (num.length == 1 || num > 9 && num < 20) {
      return one[num]

    } else if (num > 20 && num <= 99 && num[1] != 0) {
      return tens[num[0]] + " " + one[num[1]];

    } else if (num >= 20 && num <= 99 && num[1] == 0) {
      return tens[num[0]]

    } else if (num.length == 3 && Number(num[1]) + Number(num[2]) == 0) {
      return hundreds[num[0]]

    } else if (num > 100 && (num[1] + num[2] > 9 && num[1] + num[2] < 20)) {
      return hundreds[num[0]] + " " + one[num[1] + num[2]]

    } else if (num > 100 && (num - 100 * num[0]) < 20) {
      return hundreds[num[0]] + " " + one[num - 100 * num[0]]

    } else if (num > 100 && num[2]!=0){
      return hundreds[num[0]] + " " + tens[num[1]] + " " + one[num[2]]

    } else {
      return hundreds[num[0]] + " " + tens[num[1]]
    }
}
