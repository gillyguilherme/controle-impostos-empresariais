import { taxesMock } from "../data/taxes.mock";
import type { Tax } from "../../types/Tax";

export const taxService = {
  getAll(): Promise<Tax[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(taxesMock), 500);
    });
  },
};
