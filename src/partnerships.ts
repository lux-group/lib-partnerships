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

/** @deprecated */
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
    "HKD",
    "IDR",
    "JPY",
    "KRW",
    "MYR",
    "PHP",
    "SGD",
    "THB",
    "VND",
  ],
  hasBurn: false,
  hasEarn: true,
  icon: "krisFlyer_2x_affst7",
  iconReversed: "krisFlyer_2x_affst7",
  joinUrl: "https://www.singaporeair.com/en_UK/ppsclub-krisflyer/registration-form/",
  landingPage: "krisflyer",
  landingPageLogo: "KrisFlyer-Luxury-Escapes_1hagwg",
  numberMaxLength: 10,
  prefix: "kfp",
  programLogo: "krisFlyerLogo_2x_md64qq",
  programName: "KrisFlyer",
  regionCodes: [
    "CN",
    "HK",
    "ID",
    "JP",
    "KR",
    "MY",
    "PH",
    "SG",
    "TH",
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

export const Velocity: Partnership = {
  accountFields: [
    "account_id",
    "first_name",
    "last_name",
  ],
  accountFieldsLabels: {
    account_id: "",
    first_name: "",
    last_name: "",
  },
  bonusPointCost: 0,
  bonusUnit: "",
  brandName: "Velocity",
  code: "velocity",
  color: "",
  confirmationText: "",
  currencyCodes: [
    "AUD",
  ],
  hasBurn: true,
  hasEarn: true,
  icon: "",
  iconReversed: "",
  joinUrl: "",
  landingPage: "",
  landingPageLogo: "",
  numberMaxLength: 14,
  prefix: "vff",
  programLogo: "",
  programName: "Velocity frequent flyer",
  regionCodes: [
    "AU",
  ],
  reverseLogo: "",
  rewardConversion: 1,
  rewardCurrency: "AUD",
  rewardEarn: 1,
  rewardName: "Velocity Points",
  rewardPer: "$1",
  rewardProgramName: "Velocity",
};
