import { writable } from 'svelte/store';
import { type ApplicationDataType } from '../types/ApplicationDataType';
import type { QRCodeToDataURLOptionsOther } from 'qrcode';

const qrcodeOptions: QRCodeToDataURLOptionsOther = {
  type: "image/png",
  color: {
    light: "#ffffffff",
    dark: "#000000ff",
  },
  scale: 10
};

const initialApplicationData = {
  qrOptions: qrcodeOptions,
  text: "",
  dataUrl: "",
}
const formData = writable<ApplicationDataType>(initialApplicationData);

export default formData;

