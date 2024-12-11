import { Crimson_Text, Oxygen } from "next/font/google";

const crimsontext_init = Crimson_Text({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-crimsontext",
  });

  const oxygen_init = Oxygen({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    variable: "--font-oxygen",
  });
  
  export const crimsontext = crimsontext_init.variable;
  export const oxygen = oxygen_init.variable;