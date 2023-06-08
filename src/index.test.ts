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
  "returns true if supported in region code",
  isPartnership("qantas").supportedIn("AU")
)

refute(
  "returns false if not supported in region code",
  isPartnership("qantas").supportedIn("IS")
)

assert(
  "returns true if earnable in currency code",
  isPartnership("qantas").earnableIn("AUD")
)

refute(
  "returns false if earnable in currency code",
  isPartnership("qantas").earnableIn("ZWL")
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
  getPartnerships().length === 4
)
