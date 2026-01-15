import { countriesMock } from "../data/countries.mock";
import type { Country } from "../../types/Country";

export const countryService = {
  getAll(): Promise<Country[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(countriesMock), 500);
    });
  },
};
