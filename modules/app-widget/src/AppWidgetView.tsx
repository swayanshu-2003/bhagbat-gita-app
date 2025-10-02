import { requireNativeView } from 'expo';
import * as React from 'react';

import { AppWidgetViewProps } from './AppWidget.types';

const NativeView: React.ComponentType<AppWidgetViewProps> =
  requireNativeView('AppWidget');

export default function AppWidgetView(props: AppWidgetViewProps) {
  return <NativeView {...props} />;
}
