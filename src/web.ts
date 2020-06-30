import { WebPlugin } from '@capacitor/core';
import { CapMathCalciPlugin } from './definitions';

export class CapMathCalciWeb extends WebPlugin implements CapMathCalciPlugin {
  constructor() {
    super({
      name: 'CapMathCalci',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CapMathCalci = new CapMathCalciWeb();

export { CapMathCalci };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapMathCalci);
