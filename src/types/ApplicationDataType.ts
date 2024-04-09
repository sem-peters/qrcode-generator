import type { QRCodeToDataURLOptions } from "qrcode"

export type QrCodeDataType = {
  qrOptions: QRCodeToDataURLOptions;
  text: string;
  dataUrl: string;
  id: string
}

export type ApplicationDataType = {
  currentlySelectedId: string;
  qrCodeData: QrCodeDataType[]
}
