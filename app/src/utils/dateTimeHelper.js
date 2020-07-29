import moment from 'moment'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function getTimeFromTimestamp (timestamp, format = null) {
  return moment.unix(timestamp).format(format || DATE_TIME_FORMAT)
}
