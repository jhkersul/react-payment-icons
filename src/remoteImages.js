const AMAZON_URL = 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods';

// export const FLAGS_SVGS_URLS = {
//   amex: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/amex.svg',
//   aura: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/aura.svg',
//   boleto: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/boleto.svg',
//   cirrus: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/cirrus.svg',
//   credit_card: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/credit-card.svg',
//   diners: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/diners.svg',
//   direct_debit: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/direct_debit.svg',
//   discover: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/discover.svg',
//   ebay: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/ebay.svg',
//   elo: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/elo.svg',
//   eway: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/eway.svg',
//   jcb: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/jcb.svg',
//   maestro: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/maestro.svg',
//   mastercard: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/mastercard.svg',
//   sage: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/sage.svg',
//   shopify: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/shopify.svg',
//   skrill: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/skrill.svg',
//   skrill_moneybookers: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/skrill_moneybookers.svg',
//   solo: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/solo.svg',
//   visa: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/visa.svg',
//   visa_electron: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/visa_electron.svg',
//   western: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/western.svg',
// };

export function getFlagSvgUrl(key, transparent = false) {
  const transparentStr = transparent ? '_transparent' : '';
  const FLAGS_SVGS_URLS = {
    adyen: `${AMAZON_URL}/adyen${transparentStr}.svg`,
    amex: `${AMAZON_URL}/amex${transparentStr}.svg`,
    aura: `${AMAZON_URL}/aura${transparentStr}.svg`,
    bin: `${AMAZON_URL}/bin${transparentStr}.svg`,
    boleto: `${AMAZON_URL}/boleto${transparentStr}.svg`,
    cirrus: `${AMAZON_URL}/cirrus${transparentStr}.svg`,
    credit_card: `${AMAZON_URL}/credit-card${transparentStr}.svg`,
    diners: `${AMAZON_URL}/diners${transparentStr}.svg`,
    direct_debit: `${AMAZON_URL}/direct_debit${transparentStr}.svg`,
    discover: `${AMAZON_URL}/discover${transparentStr}.svg`,
    ebay: `${AMAZON_URL}/ebay${transparentStr}.svg`,
    elo: `${AMAZON_URL}/elo${transparentStr}.svg`,
    eway: `${AMAZON_URL}/eway${transparentStr}.svg`,
    hipercard: `${AMAZON_URL}/hipercard${transparentStr}.svg`,
    jcb: `${AMAZON_URL}/jcb${transparentStr}.svg`,
    maestro: `${AMAZON_URL}/maestro${transparentStr}.svg`,
    mastercard: `${AMAZON_URL}/mastercard${transparentStr}.svg`,
    sage: `${AMAZON_URL}/sage${transparentStr}.svg`,
    shopify: `${AMAZON_URL}/shopify${transparentStr}.svg`,
    skrill: `${AMAZON_URL}/skrill${transparentStr}.svg`,
    skrill_moneybookers: `${AMAZON_URL}/skrill_moneybookers${transparentStr}.svg`,
    sodexo: `${AMAZON_URL}/sodexo${transparentStr}.svg`,
    solo: `${AMAZON_URL}/solo${transparentStr}.svg`,
    ticket: `${AMAZON_URL}/ticket${transparentStr}.svg`,
    visa: `${AMAZON_URL}/visa${transparentStr}.svg`,
    visa_electron: `${AMAZON_URL}/visa_electron${transparentStr}.svg`,
    western: `${AMAZON_URL}/western${transparentStr}.svg`,
    wirecard: `${AMAZON_URL}/wirecard${transparentStr}.svg`,
  };
  return FLAGS_SVGS_URLS[key];
}

export function getBankSvgUrls(key, transparent = false) {
  const transparentStr = transparent ? '_transparent' : '';
  const BANKS_SVGS_URLS = {
    boleto: `${AMAZON_URL}/boleto${transparentStr}.svg`,
    bb: `${AMAZON_URL}/bb${transparentStr}.svg`,
    bradesco: `${AMAZON_URL}/bradesco${transparentStr}.svg`,
    caixa: `${AMAZON_URL}/caixa${transparentStr}.svg`,
    hsbc: `${AMAZON_URL}/hsbc${transparentStr}.svg`,
    itau: `${AMAZON_URL}/itau${transparentStr}.svg`,
    santander: `${AMAZON_URL}/santander${transparentStr}.svg`,
  };

  return BANKS_SVGS_URLS[key];
}

export function getFacilitatorSvgUrl(key, transparent = false) {
  const transparentStr = transparent ? '_transparent' : '';
  const FACILITATORS_SVGS_URLS = {
    amazon: `${AMAZON_URL}/amazon${transparentStr}.svg`,
    adiq: `${AMAZON_URL}/adiq${transparentStr}.svg`,
    applepay: `${AMAZON_URL}/applepay${transparentStr}.svg`,
    bitcoin: `${AMAZON_URL}/bitcoin${transparentStr}.svg`,
    ebanx: `${AMAZON_URL}/ebanx${transparentStr}.svg`,
    firstdata: `${AMAZON_URL}/firstdata${transparentStr}.svg`,
    wallet: `${AMAZON_URL}/wallet${transparentStr}.svg`,
    paypal: `${AMAZON_URL}/paypal${transparentStr}.svg`,
    cielo: `${AMAZON_URL}/cielo${transparentStr}.svg`,
    global: `${AMAZON_URL}/global${transparentStr}.svg`,
    googlepay: `${AMAZON_URL}/googlepay${transparentStr}.svg`,
    iugu: `${AMAZON_URL}/iugu${transparentStr}.svg`,
    mercadopago: `${AMAZON_URL}/mercadopago${transparentStr}.svg`,
    pagarme: `${AMAZON_URL}/pagarme${transparentStr}.svg`,
    pagseguro: `${AMAZON_URL}/pagseguro${transparentStr}.svg`,
    paghiper: `${AMAZON_URL}/paghiper${transparentStr}.png`,
    rede: `${AMAZON_URL}/rede${transparentStr}.svg`,
    stelo: `${AMAZON_URL}/stelo${transparentStr}.svg`,
    stone: `${AMAZON_URL}/stone${transparentStr}.svg`,
    elavon: `${AMAZON_URL}/elavon${transparentStr}.svg`,
    getnet: `${AMAZON_URL}/getnet${transparentStr}.png`,
    worldpay: `${AMAZON_URL}/worldpay${transparentStr}.svg`,
    yapay: `${AMAZON_URL}/yapay${transparentStr}.svg`,
  };

  return FACILITATORS_SVGS_URLS[key];
}

export function getUnknownSvg(key, transparent = false) {
  const transparentStr = transparent ? '_transparent' : '';

  const UNKNOWN_SVGS_URLS = {
    generic: `${AMAZON_URL}/generic${transparentStr}.svg`,
  };

  return UNKNOWN_SVGS_URLS[key];
}
