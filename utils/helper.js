const formatNumber = (number) => {
  return number < 10 ? '0' + number : number
}
export const relativeTime = (timeStamp) => {
  const time = timeStamp * 1000
  const d = new Date(time)
  const now = Date.now()
  let diff = (now - d) / 1000
  if (diff < 0) {
    const dUtc = new Date(time - 7 * 3600000)
    diff = (now - dUtc) / 1000
  }
  if (diff < 30) {
    return 'Vừa xong'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + ' phút' + ' trước'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + ' giờ' + ' trước'
  } else if (diff < 3600 * 24 * 2) {
    return '1 ngày trước'
  } else {
    return [ formatNumber(d.getHours()), formatNumber(d.getMinutes())].join(':') + ' ' + [formatNumber(d.getDate()), formatNumber((d.getMonth() + 1)), d.getFullYear()].join('/')
  }
}
export const getSubString = (string, number) => {
  let subString = string.substr(0, number)
  if (/\s/.test(subString)) {
    // It has any kind of whitespace
    subString = subString.substr(0, Math.min(subString.length, subString.lastIndexOf(' ')))
  }
  return subString
}

export const replaceCumulative = (str, find, replace) => {
  for (let i = 0; i < find.length; i++) { str = str.replace(find[i], replace[i]) }
  return str
}
export const hightLight = (string, keyword) => {
  if (!keyword) { return string }
  const regex = new RegExp(keyword, 'gi')
  string = string.replace(/(<mark class="highlight">|<\/mark>)/gim, '')
  const newText = string.replace(regex, '<mark class="highlight">$&</mark>')
  return newText
}
export const validEmail = (email) => {
  // var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // return regex.test(email);
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
export const validPhone = (phone) => {
  phone = phone.replace(/[^0-9]/g, '')
  // Viettel: 09, 03
  // MobiFone: 09, 07
  // VinaPhone: 09, 08
  // Vietnamobile và Gmobile: 09, 05
  const vnfRegex = /((849|843|847|848|845|09|03|07|08|05)+([0-9]{8})\b)/g
  return vnfRegex.test(phone)
}
export const emoji = (string, type = 1) => {
  // string = string.replace(/[&#10;&#92;&#39;&#34;]+/g, ". ");
  // string = string.replace(/[&#10;&#92;&#39;&#34;]+/g, "\n");
  if (type === 1) { // check emoji
    string = string.replace(/[0-9a-zA-Z!@#$%^&*()+ -]/g, '')
    // string = string.replace(/[0-9a-zA-Z.@ àáảãạâầấẩẫậăằắẳẵặđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửứựÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶĐÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỨỰ]/g, "");
  } else { // replace emoji
    string = string.replace(/[^\r\n0-9a-zA-Z!@#$%^&*()+ -]+/g, '')
    // string = string.replace(/[^\r\n0-9a-zA-Z.@ _àáảãạâầấẩẫậăằắẳẵặđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửứựÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶĐÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỨỰ]+/g, "");
    string = string.replace(/[\n]+/g, '\n')// mutiple \n to single \n
  }
  string = string.replace(/ +/g, ' ')// mutiple space to single space
  return string
}
export const capitalize = (text) => {
  return text.replace(/[^\s`~!@#$%^&+\-*=_()[\]{};:'"\\|,<.>/?]+/g, (match) => {
    const firstLetter = match.charAt(0).toUpperCase()
    const remainingLetters = match.slice(1).toLowerCase()
    return `${firstLetter}${remainingLetters}`
  })
}
export const removeVietnameseTones = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, ' ')
  str = str.trim()
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\\=|\\<|\\>|\?|\/|,|\.|\\:|\\;|\\'|\\"|\\&|\\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ')
  return str
}
export const specialCharacters = (string) => {
  const regex = /[^\w\s]/gi
  string = this.removeVietnameseTones(string)
  // Regex trong ví dụ này là chữ số, ký tự Word, dấu gạch dưới(\ w) và khoảng trắng(\ s).Dấu mũ(^) chỉ ra rằng chúng ta phải tìm kiếm mọi thứ không có trong regex của chúng ta, vì vậy hãy tìm những thứ không phải là ký tự Word, dấu gạch dưới, chữ số và khoảng trắng.
  return regex.test(string)
}
export const stripHtml = (html) => {
  const tmp = document.createElement('DIV')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}
/**
 * Based on StackOverflow answer: https://stackoverflow.com/a/32490603
 *
 * @param imageFile The image file to inspect
 * @param onRotationFound callback when the rotation is discovered. Will return 0 if if it fails, otherwise 0, 90, 180, or 270
 */
export const getOrientation = (imageFile, onRotationFound) => {
  const reader = new FileReader()
  reader.onload = (event) => {
    if (!event.target) {
      return
    }
    const innerFile = event.target
    const view = new DataView(innerFile.result)
    if (view.getUint16(0, false) !== 0xFFD8) {
      return onRotationFound(-2)
    }
    const length = view.byteLength
    let offset = 2
    while (offset < length) {
      if (view.getUint16(offset + 2, false) <= 8) {
        return onRotationFound(-1)
      }
      const marker = view.getUint16(offset, false)
      offset += 2
      if (marker === 0xFFE1) {
        if (view.getUint32((offset += 2), false) !== 0x45786966) {
          return onRotationFound(-1)
        }
        const little = view.getUint16((offset += 6), false) === 0x4949
        offset += view.getUint32(offset + 4, little)
        const tags = view.getUint16(offset, little)
        offset += 2
        for (let i = 0; i < tags; i++) {
          if (view.getUint16(offset + i * 12, little) === 0x0112) {
            return onRotationFound(view.getUint16(offset + i * 12 + 8, little))
          }
        }
      } else if ((marker & 0xFF00) !== 0xFF00) {
        break
      } else {
        offset += view.getUint16(offset, false)
      }
    }
    return onRotationFound(-1)
  }
  reader.readAsArrayBuffer(imageFile)
}
export const checkUrl = (str = '') => {
  const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\\/]))?/
  const res = str.split(' ')
  let result = ''
  res.forEach((val) => {
    if (pattern.test(val)) {
      result += '<a href="' + val + '" target="_blank" class="text-primary">' + val + '</a>' + ' '
    } else {
      result += val + ' '
    }
  })
  return result
}
export const detectUserAgent = () => {
  const test = function (regexp) { return regexp.test(window.navigator.userAgent) }
  switch (true) {
    case test(/edg/i): return 'Microsoft Edge'
    case test(/trident/i): return 'Microsoft Internet Explorer'
    case test(/firefox|fxios/i): return 'Mozilla Firefox'
    case test(/opr\//i): return 'Opera'
    case test(/ucbrowser/i): return 'UC Browser'
    case test(/samsungbrowser/i): return 'Samsung Browser'
    case test(/chrome|chromium|crios/i): return 'Google Chrome'
    case test(/safari/i): return 'Apple Safari'
    default: return 'Other'
  }
}
export const isViewer = (elem) => {
  const bounding = elem.getBoundingClientRect()
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
  const percentVisible = 10
  return !(
    Math.floor(100 - (((bounding.top >= 0 ? 0 : bounding.top) / +-bounding.height) * 100)) < percentVisible ||
    Math.floor(100 - ((bounding.bottom - windowHeight) / bounding.height) * 100) < percentVisible
  )
}
export const checkUserBuySub = (self, item = null, urlRedirectSuccess = '/', messageError = '') => {
  const isFree = item.is_free || 0
  // isFree: 1-free, 0:sub
  const classId = item.class_id
  const params = { class_id: '' }
  if (classId) {
    params.class_id = classId
  }
  // if (isFree) {
  //   self.$router.push(urlRedirectSuccess)
  // } else {
  //   if (!self.$store.state.user) {
  //     self.$bvModal.show('login')
  //     return
  //   }
  //   const { data } = await checkSubResource.list(params)
  //   if (data.is_expired) { // Hết hạn hoặc chưa mua gói sub
  //     self.$bvModal.show('modal-redirect-sub')
  //     if (messageError) {
  //       self.$notify({
  //         type: 'warning',
  //         message: messageError
  //       })
  //     }
  //     return false
  //   }
  //   self.$router.push(urlRedirectSuccess)
  // }
}
export const lowerFirst = (string) => {
  const arr = string.split(' ')
  arr[0] = arr[0].toLowerCase()
  return arr.join(' ')
}