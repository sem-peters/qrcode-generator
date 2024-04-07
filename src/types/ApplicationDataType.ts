import type { QRCodeToDataURLOptions } from "qrcode"

export type QrCodeDataType = {
  qrOptions: QRCodeToDataURLOptions;
  text: string;
  dataUrl: string;
  id: number
}

export type ApplicationDataType = {
  currentlySelectedId: number;
  qrCodeData: QrCodeDataType[]
}
