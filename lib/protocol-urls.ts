export const protocolUrls: Record<string, string> = {
  // Lending Protocols
  "aave": "https://aave.com",
  "compound": "https://compound.finance",
  "clearpool": "https://clearpool.finance",
  "venus": "https://venus.io",
  "radiant": "https://radiant.capital",
  "morpho": "https://morpho.org",
  "euler": "https://www.euler.finance",
  "ipor": "https://ipor.io",
  "fluid": "https://fluid.loans",
  
  // DEXes
  "uniswap": "https://uniswap.org",
  "pancakeswap": "https://pancakeswap.finance",
  "sushiswap": "https://sushi.com",
  "curve": "https://curve.fi",
  "balancer": "https://balancer.fi",
  "trader-joe": "https://traderjoe.xyz",
  "raydium": "https://raydium.io",
  "orca": "https://www.orca.so",
  "apeswap": "https://apeswap.finance",
  "quickswap": "https://quickswap.exchange",
  "spookyswap": "https://spookyswap.finance",
  "spiritswap": "https://spiritswap.finance",
  
  // Yield Aggregators
  "beefy": "https://beefy.com",
  "yearn": "https://yearn.finance",
  "convex": "https://www.convexfinance.com",
  "concentrator": "https://concentrator.aladdin.club",
  
  // New Protocols
  "aerodrome": "https://aerodrome.finance",
  "steer": "https://steer.finance",
  "babydoge": "https://babydogeswap.com",
  "origami": "https://origami.finance",
  "liquid": "https://liquidswap.com",
  "velodrome": "https://velodrome.finance",
  "kyberswap": "https://kyberswap.com",
  "gmx": "https://gmx.io",
  "gains": "https://gains.trade",
  "pendle": "https://www.pendle.finance"
}

export function getProtocolUrl(protocol: string): string {
  // Normalize protocol name by converting to lowercase and removing common suffixes
  const normalizedProtocol = protocol.toLowerCase()
    .replace(/-lending$/, '')
    .replace(/-amm$/, '')
    .replace(/-v[0-9]+$/, '')
    .replace(/-protocol$/, '')
    .replace(/-finance$/, '')
    .replace('-', '')
    .trim()

  return protocolUrls[normalizedProtocol] || protocolUrls[normalizedProtocol.replace(/swap$/, '')] || ''
} 