export interface AccountFieldsLabels {
  [key: string]: string;
}

export interface Partnership {
  accountFields: string[];
  accountFieldsLabels: AccountFieldsLabels;
  bonusPointCost: number;
  bonusUnit: string;
  brandName: string;
  code: string;
  color: string;
  confirmationText: string;
  currencyCodes: string[];
  hasBurn: boolean;
  hasEarn: boolean;
  icon: string;
  iconReversed: string;
  joinUrl: string;
  landingPage: string;
  numberMaxLength: number;
  prefix: string;
  programLogo: string;
  programName: string;
  regionCodes: string[];
  reverseLogo: string;
  landingPageLogo: string;
  rewardConversion: number;
  rewardCurrency: string;
  rewardEarn: number;
  rewardName: string;
  rewardPer: string;
  rewardProgramName: string;
}

export const Qantas: Partnership = {
  accountFields: [
    "account_id",
    "last_name",
  ],
  accountFieldsLabels: {
    account_id: "Qantas Number",
    last_name: "Qantas Last Name",
  },
  bonusPointCost: 1,
  bonusUnit: "point",
  brandName: "Qantas",
  code: "qantas",
  color: "#E5242A",
  confirmationText: "Your Qantas Points will land in your Frequent Flyer account in 30 days.",
  currencyCodes: [
    "AUD",
  ],
  hasBurn: true,
  hasEarn: true,
  icon: "Qantas_2x_f6vhzx",
  iconReversed: "qantas_logo_reversed",
  joinUrl: "https://www.qantaspoints.com/join-now?code=LUXURYESCAPES",
  landingPage: "qantas-frequent-flyer",
  landingPageLogo: "Qantas-Luxury-Escapes_z3mtse",
  numberMaxLength: 14,
  prefix: "qff",
  programLogo: "QffLogo_2x_i99mv5",
  programName: "Qantas frequent flyer",
  regionCodes: [
    "AU",
  ],
  reverseLogo: "QffLogoReverse_2x_sxllsy",
  rewardConversion: 1,
  rewardCurrency: "AUD",
  rewardEarn: 1,
  rewardName: "Qantas Points",
  rewardPer: "$1",
  rewardProgramName: "Qantas",
};

export const KrisFlyer: Partnership = {
  accountFields: [
    "account_id",
    "first_name",
    "last_name",
  ],
  accountFieldsLabels: {
    account_id: "KrisFlyer Number",
    first_name: "KrisFlyer First Name",
    last_name: "KrisFlyer Last Name",
  },
  bonusPointCost: 1,
  bonusUnit: "mile",
  brandName: "Singapore Airlines",
  code: "krisFlyer",
  color: "#1D4886",
  confirmationText: "Your miles will land in your KrisFlyer account in 30 days.",
  currencyCodes: [
    "CNY",
    "GBP",
    "HKD",
    "IDR",
    "JPY",
    "KRW",
    "MYR",
    "NZD",
    "PHP",
    "SGD",
    "THB",
    "TWD",
    "USD",
    "VND",
  ],
  hasBurn: false,
  hasEarn: true,
  icon: "krisFlyer_2x_affst7",
  iconReversed: "krisFlyer_2x_affst7",
  joinUrl: "https://www.singaporeair.com/en_UK/ppsclub-krisflyer/registration-form/",
  landingPage: "kris-flyer",
  landingPageLogo: "KrisFlyer-Luxury-Escapes_1hagwg",
  numberMaxLength: 10,
  prefix: "kfp",
  programLogo: "krisFlyerLogo_2x_md64qq",
  programName: "KrisFlyer",
  regionCodes: [
    "CN",
    "GB",
    "HK",
    "ID",
    "JP",
    "KR",
    "MY",
    "NZ",
    "PH",
    "SG",
    "TH",
    "TW",
    "US",
    "VN",
  ],
  reverseLogo: "krisFlyerLogoReverse_2x_ga1tta",
  rewardConversion: 1,
  rewardCurrency: "USD",
  rewardEarn: 1,
  rewardName: "KrisFlyer Miles",
  rewardPer: "$1 USD",
  rewardProgramName: "KrisFlyer",
};

// Images Pending from AMANDA
export const Vistara: Partnership = {
  accountFields: [
    "account_id",
    "first_name",
    "last_name",
  ],
  accountFieldsLabels: {
    account_id: "Club Vistara ID",
    first_name: "Club Vistara First Name",
    last_name: "Club Vistara Last Name",
  },
  bonusPointCost: 20,
  bonusUnit: "point",
  brandName: "Vistara",
  code: "vistara",
  color: "#582c4f",
  confirmationText: "Your points will land in your Vistara account in 40 days.",
  currencyCodes: [
    "INR",
  ],
  hasBurn: false,
  hasEarn: true,
  icon: "vistara_2x_o4y0uv",
  iconReversed: "vistara_2x_o4y0uv",
  joinUrl: "https://www.airvistara.com/trip/partner-register/luxuryescapes",
  landingPage: "club-vistara",
  landingPageLogo: "Vistara-Luxury-Escapes_evlamb",
  numberMaxLength: 14,
  prefix: "cvp",
  programLogo: "vistaraLogo_2x_p6p4ab",
  programName: "Club Vistara",
  regionCodes: [
    "IN",
  ],
  reverseLogo: "VistaraLogoReverse_2x_f7a8un",
  rewardConversion: 0.05,
  rewardCurrency: "INR",
  rewardEarn: 5,
  rewardName: "CV Points",
  rewardPer: "₹100",
  rewardProgramName: "CV",
};
