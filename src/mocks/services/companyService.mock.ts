import { companiesMock } from "../data/companies.mock";
import type { Company } from "../../types/Company";

export const companyService = {
  getAll(): Promise<Company[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(companiesMock), 500);
    });
  },
};
