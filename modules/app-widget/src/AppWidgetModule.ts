import { NativeModule, requireNativeModule } from 'expo';

import { AppWidgetModuleEvents } from './AppWidget.types';

declare class AppWidgetModule extends NativeModule<AppWidgetModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
  saveValue():string;
  getValue():string;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AppWidgetModule>('AppWidget');
