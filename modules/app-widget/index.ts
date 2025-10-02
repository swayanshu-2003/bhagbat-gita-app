// Reexport the native module. On web, it will be resolved to AppWidgetModule.web.ts
// and on native platforms to AppWidgetModule.ts
export { default } from './src/AppWidgetModule';
export { default as AppWidgetView } from './src/AppWidgetView';
export * from  './src/AppWidget.types';
