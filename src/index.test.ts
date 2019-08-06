import { isPartnership, getPartnerships, getPartnershipsByRegionCode, getPartnershipByCode } from './'

function assert(desc: string, value?: any): void {
  if (!value) {
    throw new Error(`fail: ${desc}`)
  }

  console.log(`pass: ${desc}`)
}

function refute(desc: string, value?: any): void {
  if (value) {
    throw new Error(`fail: ${desc}`)
  }

  console.log(`pass: ${desc}`)
}

assert(
  "gets region code for partnership",
  isPartnership("qantas").supportedIn("AU")
)

refute(
  "does not get partnership for invalid region code",
  isPartnership("qantas").supportedIn("IS")
)

assert(
  "gets partnerships by region region",
  getPartnershipsByRegionCode("AU")
)

assert(
  "gets partnerships by code",
  getPartnershipByCode("qantas")
)

assert(
  "gets partnerships",
  getPartnerships().length === 2
)
