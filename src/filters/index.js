"use strict"

// import utils from  './utils'

/**格式化时间
 *  @param {string} time 需要格式化的时间
 *  @param {bool} friendly 是否是fromNow
 */
// exports.getLastTimeStr = (time, friendly) => {
//     if (friendly) {
//         return utils.MillisecondToDate(new Date() - new Date(time));
//     } else {
//         return utils.fmtDate(new Date(time),'yyyy-MM-dd hh:mm');
//     }
// }
// 
export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}