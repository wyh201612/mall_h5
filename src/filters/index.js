// import parseTime, formatTime and set to filter
export { parseTime, formatTime } from '@/utils'

/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

/**
 * @param {number} time
 */
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function changePhone(value) {
  var len = value.length;
  var x = value.substring(3, len - 4);
  var values = value.replace(x, "****");
  return values;
}
// 克
export function filterGoldGram(value) {
  var values = '';
  if(value<1000) {
    values = (value).toFixed(2) + '克'
  } else if(value>=1000&&value<10000) {
    values = (value / 1000) + '千克'
  } else if(value>=10000) {
    values =(value / 10000) + '万克'
  }
  return values;
}
// 人数
export function filterServeUser(value) {
  var values = '';
  if(value<1000) {
    values = (value).toFixed(2) + '人'
  } else if(value>=1000&&value<10000) {
    values = (value / 1000) + '千人'
  } else if(value>=10000) {
    values = (value / 10000) + '万人'
  }
  return values;
}
