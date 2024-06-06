import { get, writable } from "svelte/store";
import {
  type ApplicationDataType,
  type QrCodeDataType,
} from "../types/ApplicationDataType";
import localStorageSettings from "./LocalStorageSettings";

export const getDefaultQr = (): QrCodeDataType => {
  return {
    id: "id-0",
    qrOptions: {
      type: "image/png",
      color: {
        light: "#ffffffff",
        dark: "#000000ff",
      },
      scale: 10,
      margin: 0,
    },
    text: "",
    dataUrl: "",
  };
};

const determineInitialApplicationData = (): ApplicationDataType => {
  console.log("Determining appData");
  const localStorageData = localStorage.getItem("saved_codes");
  if (localStorageData) {
    console.log(`Local storage available, loading data: ${localStorageData}`);
    try {
      const data = JSON.parse(localStorageData);
      if (typeof data === "object" && data.qrCodeData?.length) {
        return data;
      } else {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error();
      }
    } catch (err) {
      console.error("Failed to get the data from local storage");
      localStorage.removeItem("saved_codes");
    }
  }

  console.log("Local storage not available, using default data");
  return {
    currentlySelectedId: "id-0",
    qrCodeData: [getDefaultQr()],
  };
};

const applicationData = writable<ApplicationDataType>(
  determineInitialApplicationData(),
);

export const saveToLocalStorage = () => {
  if (!get(localStorageSettings)) {
    // Local storage saving is disabled by the user
    return;
  }

  const dataToSave = structuredClone(get(applicationData));
  dataToSave.qrCodeData.forEach((qrCode) => {
    // We don't want to save the entire data url for every qr code,
    // because they take up a lot of space on the user's localstorage
    // These are regenerated once the qrcode component for these selected items mounts
    qrCode.dataUrl = "";
  });

  localStorage.setItem("saved_codes", JSON.stringify(dataToSave));
};

export default applicationData;
