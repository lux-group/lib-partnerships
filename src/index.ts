import { KrisFlyer, Partnership, Qantas, Velocity } from "./partnerships";
export { KrisFlyer, Partnership, Qantas, Velocity };
const list = [
  Qantas,
  KrisFlyer,
  Velocity,
];

function findPartnershipByCode(partnershipCode: string) {
  const partnership = list.find(({ code }) => code === partnershipCode);

  if (!partnership) {
    throw new Error(`partnership with code ${partnershipCode} does not exist`);
  }

  return partnership;
}

export function isPartnership(partnershipCode: string) {
  const partnership = findPartnershipByCode(partnershipCode);
  return {
    earnableIn: (currencyCode: string): boolean => {
      return partnership.currencyCodes.includes(currencyCode);
    },
    supportedIn: (regionCode: string): boolean => {
      return partnership.regionCodes.includes(regionCode);
    },
  };
}

export function getPartnershipsByRegionCode(regionCode: string) {
  return list.reduce((acc: Partnership[], partnership: Partnership) => {
    if (partnership.regionCodes.includes(regionCode)) {
      acc.push({ ...partnership });
    }

    return acc;
  }, []);
}

export function getPartnershipByCode(partnershipCode: string) {
  return findPartnershipByCode(partnershipCode);
}

export function getPartnerships() {
  return list.map((partnership) => ({ ...partnership }));
}
