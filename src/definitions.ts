declare module "@capacitor/core" {
  interface PluginRegistry {
    CapMathCalci: CapMathCalciPlugin;
  }
}

export interface CapMathCalciPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
