"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { ChainInfo } from "@/lib/api"
import { ArrowRight, Star, StarOff } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { ChainLogo } from "@/components/chain-logo"
import { getProtocolUrl } from "@/lib/protocol-urls"

interface MobileDataCardProps {
  platform: string
  description: string
  apy24h: string
  apy30d: string
  apyLifetime: string
  baseApy: string
  rewardApy: string
  tvl: string
  days: number
  chain: string
  chainData: ChainInfo
  inWatchlist?: boolean
  onWatchlistToggle?: () => void
  symbol: string
}

export function MobileDataCard({
  platform,
  description,
  apy24h,
  apy30d,
  apyLifetime,
  baseApy,
  rewardApy,
  tvl,
  days,
  chain,
  chainData,
  inWatchlist = false,
  onWatchlistToggle,
  symbol,
}: MobileDataCardProps) {
  return (
    <Card className="mb-2">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChainLogo chain={chain} data={chainData} size={20} />
              <div>
                <div className="font-medium">{platform}</div>
                <div className="text-sm text-muted-foreground">{symbol}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={onWatchlistToggle}
              >
                {inWatchlist ? (
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                ) : (
                  <StarOff className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
              <a
                href={getProtocolUrl(platform.toLowerCase())}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <div className="text-muted-foreground">APY (24h)</div>
              <div className="font-medium">{apy24h}</div>
            </div>
            <div>
              <div className="text-muted-foreground">TVL</div>
              <div className="font-medium">{tvl}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Base APY</div>
              <div className="font-medium">{baseApy}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Reward APY</div>
              <div className="font-medium">{rewardApy}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
