export interface Partnership {
  accountFields: string[];
  brandName: string;
  code: string;
  color: string;
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
  rewardCurrency: string;
  rewardName: string;
  rewardPer: string;
}

export const Qantas: Partnership = {
  accountFields: [
    "qff",
    "qff_last_name",
  ],
  brandName: "Qantas",
  code: "qantas",
  color: "#E5242A",
  currencyCodes: [
    "AU",
  ],
  hasBurn: true,
  hasEarn: true,
  icon: "Qantas_2x_f6vhzx",
  iconReversed: "qantas_logo_reversed",
  joinUrl: "https://www.qantaspoints.com/join-now?code=LUXURYESCAPES",
  landingPage: "qantas-frequent-flyer",
  numberMaxLength: 14,
  prefix: "qff",
  programLogo: "QffLogo_2x_i99mv5",
  programName: "Qantas frequent flyer",
  regionCodes: [
    "AU",
  ],
  reverseLogo: "QffLogoReverse_2x_sxllsy",
  rewardCurrency: "AUD",
  rewardName: "Qantas Points",
  rewardPer: "$1",
};

export const KrisFlyer: Partnership = {
  accountFields: [
    "kfp",
    "kfp_first_name",
    "kfp_last_name",
  ],
  brandName: "Singapore Airlines",
  code: "krisFlyer",
  color: "#1D4886",
  currencyCodes: [
    "CNY",
    "HKD",
    "IDR",
    "JPY",
    "KRW",
    "MYR",
    "PHP",
    "SGD",
    "TWD",
    "THB",
    "GBP",
    "USD",
    "VND",
  ],
  hasBurn: false,
  hasEarn: true,
  icon: "krisFlyer_2x_izuqwc",
  iconReversed: "krisFlyer_reverse_2x_tabtb2",
  joinUrl: "https://www.singaporeair.com/KrisFlyer",
  landingPage: "kris-flyer",
  numberMaxLength: 10,
  prefix: "kfp",
  programLogo: "krisFlyerLogo_2x_md61qq",
  programName: "Kris flyer",
  regionCodes: [
    "CN",
    "HK",
    "IN",
    "JP",
    "KR",
    "MY",
    "PH",
    "SG",
    "TW",
    "TH",
    "GB",
    "US",
    "VN",
  ],
  reverseLogo: "krisFlyerLogoReverse_2x_gaivta",
  rewardCurrency: "USD",
  rewardName: "KrisFlyer Miles",
  rewardPer: "$1 USD",
};
