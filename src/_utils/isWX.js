export default function isWeixinBrowser(){
  return /micromessenger/.test(navigator.userAgent.toLowerCase())
}