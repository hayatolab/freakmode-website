// 🚀 FreakMode - Configurações Centralizadas
// Todas as configurações de serviços externos ficam aqui

export const config = {
  // Google Analytics 4
  analytics: {
    trackingId: "G-JW95GGP5BP",
    enabled: true,
  },

  // HubSpot
  hubspot: {
    portalId: "50419815",
    formId: "9101b4ac-4456-43b7-837c-e80d002acefe",
    enabled: true,
  },

  // Configurações do App
  app: {
    name: "FreakMode",
    description:
      "Transforme treinos em desafios épicos. Compete com amigos, mantém streaks e evolui junto com sua crew.",
    url: "https://freakmode.app",
  },

  // Features toggles
  features: {
    leadCollection: true,
    socialSharing: true,
    analytics: true,
  },
} as const;

// Função para verificar se um serviço está configurado
export const isServiceEnabled = (service: keyof typeof config) => {
  if (service === "analytics") {
    return config.analytics.enabled && config.analytics.trackingId;
  }

  if (service === "hubspot") {
    return (
      config.hubspot.enabled && config.hubspot.portalId && config.hubspot.formId
    );
  }

  return false;
};
