import { sendGTMEvent } from "@next/third-parties/google";

export const trackEvent = (eventName: string, label: string) => {
  sendGTMEvent({
    event: eventName,
    label: label,
  });
};
