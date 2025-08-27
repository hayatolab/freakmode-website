import { config, isServiceEnabled } from "./config";

// Interface para dados do lead
interface LeadData {
  email: string;
  firstName?: string;
  lastName?: string;
  source?: string;
  interest?: string;
  [key: string]: any;
}

// Função para submeter lead ao HubSpot
export const submitToHubSpot = async (leadData: LeadData) => {
  if (!isServiceEnabled("hubspot")) {
    console.warn("HubSpot não configurado. Configure em src/lib/config.ts");
    return { success: false, error: "HubSpot não configurado" };
  }

  try {
    const fields = Object.entries(leadData).map(([name, value]) => ({
      objectTypeId: "0-1",
      name,
      value: String(value),
    }));

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${config.hubspot.portalId}/${config.hubspot.formId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: typeof window !== "undefined" ? window.location.href : "",
            pageName:
              typeof document !== "undefined" ? document.title : "FreakMode",
            hutk:
              typeof document !== "undefined" ? getHubSpotCookie() : undefined,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HubSpot API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error("Erro ao enviar para HubSpot:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro desconhecido",
    };
  }
};

// Função para obter o cookie do HubSpot (se existir)
function getHubSpotCookie(): string | undefined {
  if (typeof document === "undefined") return undefined;

  const name = "hubspotutk=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");

  for (let cookie of cookies) {
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return undefined;
}

// Função simplificada para email apenas
export const submitEmailToHubSpot = async (
  email: string,
  source = "website"
) => {
  return submitToHubSpot({
    email,
    source,
    interest: "early_access",
  });
};
