export {};

declare global {
  interface Window {
    dataLayer: Gtag.DataLayer;
  }

  namespace Gtag {
    type DataLayer = Array<(...args: any[]) => void>;

    interface Event {
      event: string;
      [key: string]: any;
    }
  }
}
