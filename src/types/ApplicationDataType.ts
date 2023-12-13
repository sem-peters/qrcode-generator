import type { QRCodeToDataURLOptions } from "qrcode"

export type ApplicationDataType = {
  qrOptions: QRCodeToDataURLOptions;
  text: string;
  dataUrl: string;
}

