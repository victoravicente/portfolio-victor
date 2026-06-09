export const useAnalytics = () => {
  const trackEvent = (eventName, eventParams = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventParams);
    }
  };

  return { trackEvent };
};
