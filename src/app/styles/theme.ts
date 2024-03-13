import "@emotion/react";

const color = {
  main: "#3484DB",
  sub: "#45DFDA",
  error: "#DF454A",

  gray: {
    "100": "#1A1A1A",
    "200": "#333333",
    "300": "#4D4D4D",
    "400": "#6B6B6B",
    "500": "#808080",
    "600": "#999999",
    "700": "#BFBFBF",
    "800": "#CCCCCC",
    "900": "#E6E6E6",
  },
  green: {
    "100": "#1A1A1A",
    "200": "#12643C",
    "300": "#1A8F56",
    "400": "#21BA70",
    "500": "#25D07D",
    "600": "#5FE2A2",
    "700": "#8AEABB",
    "800": "#B5F2D4",
    "900": "#E1FAED",
  },
  blue: {
    "100": "#0A2038",
    "200": "#123964",
    "300": "#1A528F",
    "400": "#216BBA",
    "500": "#3484DB",
    "600": "#5F9EE2",
    "700": "#8AB9EA",
    "800": "#B5D3F2",
    "900": "#E1EDFA",
  },
  red: {
    "100": "#380B0A",
    "200": "#641312",
    "300": "#8F1B1A",
    "400": "#BA2421",
    "500": "#DB3634",
    "600": "#E2615F",
    "700": "#EA8C8A",
    "800": "#F2B6B5",
    "900": "#FAE1E1",
  },
  white: "#FFFFFF",
  black: "#000000",
} as const;

const typo = {
  title_lg: {
    semibold: {
      fontSize: "2.875rem",
      lineHeight: "140%",
      fontWeight: "600",
    },
    medium: {
      fontSize: "2.875rem",
      lineHeight: "140%",
      fontWeight: "500",
    },
    regular: {
      fontSize: "2.875rem",
      lineHeight: "140%",
      fontWeight: "400",
    },
  },
  title_md: {
    extrabold: {
      fontSize: "2.25rem",
      lineHeight: "150%",
      fontWeight: "800",
    },
    semibold: {
      fontSize: "2.25rem",
      lineHeight: "150%",
      fontWeight: "600",
    },
    regular: {
      fontSize: "2.25rem",
      lineHeight: "150%",
      fontWeight: "400",
    },
  },
  title_sm: {
    extrabold: {
      fontSize: "2rem",
      lineHeight: "150%",
      fontWeight: "800",
    },
    semibold: {
      fontSize: "2rem",
      lineHeight: "150%",
      fontWeight: "600",
    },
    regular: {
      fontSize: "2rem",
      lineHeight: "150%",
      fontWeight: "400",
    },
  },
  text_lg: {
    extrabold: {
      fontSize: "1.5rem",
      lineHeight: "160%",
      fontWeight: "800",
    },
    semibold: {
      fontSize: "1.5rem",
      lineHeight: "160%",
      fontWeight: "600",
    },
    regular: {
      fontSize: "1.5rem",
      lineHeight: "160%",
      fontWeight: "400",
    },
  },
  text_md: {
    extrabold: {
      fontSize: "1.25rem",
      lineHeight: "160%",
      fontWeight: "800",
    },
    semibold: {
      fontSize: "1.25rem",
      lineHeight: "160%",
      fontWeight: "600",
    },
    regular: {
      fontSize: "1.25rem",
      lineHeight: "160%",
      fontWeight: "400",
    },
  },
  text_sm: {
    extrabold: {
      fontSize: "0.875rem",
      lineHeight: "160%",
      fontWeight: "800",
    },
    semibold: {
      fontSize: "0.875rem",
      lineHeight: "160%",
      fontWeight: "600",
    },
    regular: {
      fontSize: "0.875rem",
      lineHeight: "160%",
      fontWeight: "400",
    },
  },
  caption: {
    extrabold: {
      fontSize: "0.625rem",
      lineHeight: "160%",
      fontWeight: "800",
    },
    semibold: {
      fontSize: "0.625rem",
      lineHeight: "160%",
      fontWeight: "600",
    },
    regular: {
      fontSize: "0.625rem",
      lineHeight: "160%",
      fontWeight: "400",
    },
    text_lg: {
      extrabold: {
        fontSize: "1.5rem",
        lineHeight: "160%",
        fontWeight: "800",
      },
      semibold: {
        fontSize: "1.5rem",
        lineHeight: "160%",
        fontWeight: "600",
      },
      regular: {
        fontSize: "1.5rem",
        lineHeight: "160%",
        fontWeight: "400",
      },
    },
    text_md: {
      extrabold: {
        fontSize: "1.25rem",
        lineHeight: "160%",
        fontWeight: "800",
      },
      semibold: {
        fontSize: "1.25rem",
        lineHeight: "160%",
        fontWeight: "600",
      },
      regular: {
        fontSize: "1.25rem",
        lineHeight: "160%",
        fontWeight: "400",
      },
    },
    text_sm: {
      extrabold: {
        fontSize: "0.875rem",
        lineHeight: "160%",
        fontWeight: "800",
      },
      semibold: {
        fontSize: "0.875rem",
        lineHeight: "160%",
        fontWeight: "600",
      },
      regular: {
        fontSize: "0.875rem",
        lineHeight: "160%",
        fontWeight: "400",
      },
    },
  },
  btn_lg: {
    extrabold: {
      fontSize: "1rem",
      lineHeight: "250%",
      fontWeight: "800",
    },
    semibold: {
      fontSize: "1rem",
      lineHeight: "250%",
      fontWeight: "600",
    },
    regular: {
      fontSize: "1rem",
      lineHeight: "250%",
      fontWeight: "400",
    },
  },
  btn_md: {
    extrabold: {
      fontSize: "1rem",
      lineHeight: "200%",
      fontWeight: "800",
    },
    semibold: {
      fontSize: "1em",
      lineHeight: "200%",
      fontWeight: "600",
    },
    regular: {
      fontSize: "1rem",
      lineHeight: "200%",
      fontWeight: "400",
    },
  },
  btn_sm: {
    extrabold: {
      fontSize: "1rem",
      lineHeight: "250%",
      fontWeight: "800",
    },
    semibold: {
      fontSize: "1rem",
      lineHeight: "250%",
      fontWeight: "600",
    },
    regular: {
      fontSize: "1rem",
      lineHeight: "250%",
      fontWeight: "400",
    },
  },
} as const;

const breakPoint = {
  360: "(max-width: 22.5rem)",
  600: "(max-width: 37.5rem)",
  1024: "(max-width: 64rem)",
  1280: "(max-width: 80rem)",
  1440: "(max-width: 90rem)",
  1728: "(max-width: 108rem)",
  1920: "(max-width: 120rem)",
} as const;

export const theme = {
  color,
  typo,
  breakPoint,
};

type ExtendedTheme = typeof theme;

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ExtendedTheme {}
}
