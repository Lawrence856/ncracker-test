class Utils {
  static separateStr(array = [], separator = ', ') {
    if (Array.isArray(array) && Array.length) {
      return array.join(separator)
    } else {
      return ''
    }
  }
}

export default Utils