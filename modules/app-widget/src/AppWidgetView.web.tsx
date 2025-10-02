import * as React from 'react';

import { AppWidgetViewProps } from './AppWidget.types';

export default function AppWidgetView(props: AppWidgetViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
