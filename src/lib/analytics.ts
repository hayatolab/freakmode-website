import { config, isServiceEnabled } from "./config";

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Função para enviar pageview
export const pageview = (url: string) => {
  if (!isServiceEnabled("analytics")) return;

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", config.analytics.trackingId, {
      page_path: url,
    });
  }
};

// Função para enviar eventos
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!isServiceEnabled("analytics")) return;

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos específicos do FreakMode
export const trackLeadSubmission = (source: string) => {
  event({
    action: "lead_submission",
    category: "engagement",
    label: source,
  });
};

export const trackButtonClick = (buttonName: string) => {
  event({
    action: "button_click",
    category: "interaction",
    label: buttonName,
  });
};
