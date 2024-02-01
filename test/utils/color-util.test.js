import { hexToRgba } from '@src/utils/color-util'
import { describe, test, expect } from 'vitest'
describe('Color Utilities', () => {

  const hexes = {
    hex1: '#fff',
    hex2: '#ffffff',
    hex3: 'fff',
    hex4: 'ffffff',
    hex5: '050505',
    hex6: 121212,
    hex7: 15,
  }

  const opacities = {
    opacity1: '.1',
    opacity2: '.5',
    opacity3: '1',
    opacity4: .5,
    opacity5: 1,
    opacity6: 2,
    opacity7: -1,
  }

  // Test the hexToRgba function
  test('hexToRgba RGB', () => {

    const rgba0_0 = hexToRgba(null);
    const rgba00_0 = hexToRgba(undefined);
    const rgba1_0 = hexToRgba(hexes.hex1);
    const rgba2_0 = hexToRgba(hexes.hex2);
    const rgba3_0 = hexToRgba(hexes.hex3);
    const rgba4_0 = hexToRgba(hexes.hex4);
    const rgba5_0 = hexToRgba(hexes.hex5);
    const rgba6_0 = hexToRgba(hexes.hex6);
    const rgba7_0 = hexToRgba(hexes.hex7);

    expect(rgba0_0).toBe(undefined);
    expect(rgba00_0).toBe(undefined);
    expect(rgba1_0).toStrictEqual('rgb(255, 255, 255)');
    expect(rgba2_0).toStrictEqual('rgb(255, 255, 255)');
    expect(rgba3_0).toStrictEqual('rgb(255, 255, 255)');
    expect(rgba4_0).toStrictEqual('rgb(255, 255, 255)');
    expect(rgba5_0).toStrictEqual('rgb(5, 5, 5)');
    expect(rgba6_0).toStrictEqual('rgb(18, 18, 18)'); // 12 in hex == 18 in decimal
    expect(rgba7_0).toBe(undefined);

  })

  test('hexToRgba RGBA', () => {

    const rgba0_1 = hexToRgba(null, opacities.opacity1);
    const rgba00_1 = hexToRgba(undefined, opacities.opacity1);
    const rgba1_1 = hexToRgba(hexes.hex1, opacities.opacity1);
    const rgba2_2 = hexToRgba(hexes.hex2, opacities.opacity2);
    const rgba3_3 = hexToRgba(hexes.hex3, opacities.opacity3);
    const rgba4_4 = hexToRgba(hexes.hex4, opacities.opacity4);
    const rgba4_5 = hexToRgba(hexes.hex4, opacities.opacity5);
    const rgba4_6 = hexToRgba(hexes.hex4, opacities.opacity6);
    const rgba4_7 = hexToRgba(hexes.hex4, opacities.opacity7);
    const rgba5_7 = hexToRgba(hexes.hex5, opacities.opacity7);
    const rgba6_7 = hexToRgba(hexes.hex6, opacities.opacity7);

    expect(rgba0_1).toStrictEqual(undefined);
    expect(rgba00_1).toStrictEqual(undefined);
    expect(rgba1_1).toStrictEqual('rgba(255, 255, 255, 0.1)');
    expect(rgba2_2).toStrictEqual('rgba(255, 255, 255, 0.5)');
    expect(rgba3_3).toStrictEqual('rgba(255, 255, 255, 1)');
    expect(rgba4_4).toStrictEqual('rgba(255, 255, 255, 0.5)');
    expect(rgba4_5).toStrictEqual('rgba(255, 255, 255, 1)');
    expect(rgba4_6).toStrictEqual('rgba(255, 255, 255, 1)');
    expect(rgba4_7).toStrictEqual('rgba(255, 255, 255, 0)');
    expect(rgba5_7).toStrictEqual('rgba(5, 5, 5, 0)');
    expect(rgba6_7).toStrictEqual('rgba(18, 18, 18, 0)');

  })

})
