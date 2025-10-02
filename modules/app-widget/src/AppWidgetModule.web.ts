import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './AppWidget.types';

type AppWidgetModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class AppWidgetModule extends NativeModule<AppWidgetModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(AppWidgetModule, 'AppWidgetModule');
