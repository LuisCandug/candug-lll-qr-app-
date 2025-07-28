import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode'

export default (context, inject) => {
  inject('Html5Qrcode', Html5Qrcode)
  inject('Html5QrcodeScanner', Html5QrcodeScanner)
}
