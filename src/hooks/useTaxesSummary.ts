import { useEffect, useState } from "react";

import { companyService } from "../mocks/services/companyService.mock";
import { countryService } from "../mocks/services/countryService.mock";
import { calculateTax } from "../utils/taxCalculator";

interface TaxesSummary {
  totalCompanies: number;
  totalCountries: number;
  estimatedTaxes: number;
}

export function useTaxesSummary() {
  const [summary, setSummary] = useState<TaxesSummary | null>(null);

  useEffect(() => {
    async function loadSummary() {
      const companies = await companyService.getAll();
      const countries = await countryService.getAll();

      const estimatedTaxes = companies.reduce((total, company) => {
        const country = countries.find(
          (c) => c.id === company.countryId
        );

        if (!country) return total;

        return (
          total +
          calculateTax(company.annualRevenue, country.taxRate)
        );
      }, 0);

      setSummary({
        totalCompanies: companies.length,
        totalCountries: countries.length,
        estimatedTaxes,
      });
    }

    loadSummary();
  }, []);

  return summary;
}
