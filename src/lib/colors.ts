/**
 * FreakMode Brand Colors
 * Cores oficiais da marca FreakMode para uso consistente em todo o projeto
 */

export const freakModeColors = {
  // Primary Brand Colors
  red: "#FF0004",
  redHover: "#E60003",
  navy: "#13143C",

  // Gray Scale
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
} as const;

/**
 * CSS Custom Properties para uso com Tailwind
 */
export const cssVariables = {
  "--freakmode-red": freakModeColors.red,
  "--freakmode-red-hover": freakModeColors.redHover,
  "--freakmode-navy": freakModeColors.navy,
  "--freakmode-gray-50": freakModeColors.gray[50],
  "--freakmode-gray-100": freakModeColors.gray[100],
  "--freakmode-gray-200": freakModeColors.gray[200],
  "--freakmode-gray-300": freakModeColors.gray[300],
  "--freakmode-gray-400": freakModeColors.gray[400],
  "--freakmode-gray-500": freakModeColors.gray[500],
  "--freakmode-gray-600": freakModeColors.gray[600],
  "--freakmode-gray-700": freakModeColors.gray[700],
  "--freakmode-gray-800": freakModeColors.gray[800],
  "--freakmode-gray-900": freakModeColors.gray[900],
} as const;

/**
 * Tailwind Color Classes
 * Para uso direto nas classes CSS
 */
export const tailwindClasses = {
  // Background Colors
  bg: {
    red: "bg-freakmode-red",
    redHover: "bg-freakmode-red-hover",
    navy: "bg-freakmode-navy",
    gray50: "bg-freakmode-gray-50",
    gray100: "bg-freakmode-gray-100",
    gray200: "bg-freakmode-gray-200",
    gray300: "bg-freakmode-gray-300",
    gray500: "bg-freakmode-gray-500",
    gray600: "bg-freakmode-gray-600",
    gray700: "bg-freakmode-gray-700",
  },

  // Text Colors
  text: {
    red: "text-freakmode-red",
    navy: "text-freakmode-navy",
    gray500: "text-freakmode-gray-500",
    gray600: "text-freakmode-gray-600",
    gray700: "text-freakmode-gray-700",
  },

  // Border Colors
  border: {
    red: "border-freakmode-red",
    gray200: "border-freakmode-gray-200",
    gray300: "border-freakmode-gray-300",
  },

  // Ring Colors (focus states)
  ring: {
    red: "ring-freakmode-red",
  },
} as const;
