export const hexToRgba = (hex: string, opacity?: string | number) => {
  if (!hex) return undefined;

  // Convert to string
  hex = String(hex);

  // Remove the hash symbol if it exists
  hex = hex.replace("#", "");

  // Invalid length
  if (hex.length !== 3 && hex.length !== 6) return undefined; 

  // Convert a 3-length hexcode to a 6-length hexcode
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (opacity !== undefined && opacity !== null) {
    opacity = Number(opacity);
    if (opacity > 1) opacity = 1;
    if (opacity < 0) opacity = 0;
  }

  // Convert the hex code to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB value in the format rgb(x, y, z) or rgba(x,y,z,a)
  if (opacity !== undefined && opacity !== null) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
}
