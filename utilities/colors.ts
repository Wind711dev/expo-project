/**
 * Converts a hex color to an RGBA string with the specified alpha value.
 * @param {string} hex - The hex color (e.g., "#FF5733" or "#F00").
 * @param {number} alpha - The alpha value (0 to 1).
 * @returns {string} The RGBA string.
 */
export const hexToRgba = (hex: string, alpha: string | number) => {
  // Remove the '#' character if present
  hex = hex.replace(/^#/, '');

  let r, g, b;

  // Parse the hex color
  if (hex.length === 3) {
    // If the hex is in the shorthand format (e.g., "#F00")
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    // If the hex is in the full format (e.g., "#FF5733")
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    throw new Error('Invalid HEX color');
  }

  // Return the RGBA string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const lightenColor = (color: string, amount: number) => {
  // Convert HEX to RGB
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);

  // Increase RGB values
  r = Math.min(255, r + amount);
  g = Math.min(255, g + amount);
  b = Math.min(255, b + amount);

  // Convert back to HEX
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

export const darkenColor = (color: string, amount: number) => {
  // Convert HEX to RGB
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);

  // Decrease RGB values
  r = Math.max(0, r - amount);
  g = Math.max(0, g - amount);
  b = Math.max(0, b - amount);

  // Convert back to HEX
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};
