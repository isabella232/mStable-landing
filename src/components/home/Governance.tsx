import React, { FC } from 'react'
import styled from 'styled-components'

import { Section } from '../layout/Section'
import { AppCTA, CTA } from '../CTA'
import { MainAndAside } from '../layout/Grid'
import { FullBleed } from '../layout/FullBleed'
import { Colors } from '../../theme'

const Links = styled.div`
  display: flex;
  margin-top: 16px;

  > * {
    margin-right: 16px;
  }

  a:hover {
    color: ${Colors.gold};
  }
`

const StyledFullBleed = styled(FullBleed)`
  background-color: white;
  color: black;
`

const GetInformed = styled.div`
  margin-top: 32px;
`

export const Governance: FC = () => {
  return (
    <StyledFullBleed>
      <Section title="An open & decentralised ecosystem">
        <MainAndAside>
          <div>
            <p>
              mStable is governed by MTA holders who have staked their tokens to
              vote on proposals. mStable's governance goes through a process
              where consensus is reached in progressively concrete stages.
            </p>
            <p>
              Proposals and ideas are surfaced on the Discord or public forum,
              and are finalised by on-chain signalling by MTA holders.
            </p>
          </div>
          <AppCTA href="https://governance.mstable.org">Governance App</AppCTA>
        </MainAndAside>
        <GetInformed>
          <h3>Join us and get informed</h3>
          <Links>
            <CTA arrow href="https://forum.mstable.org">
              Forum
            </CTA>
            <CTA arrow href="https://discord.gg/pgCVG7e">
              Discord
            </CTA>
            <CTA arrow href="https://t.me/mstableofficial">
              Telegram
            </CTA>
          </Links>
        </GetInformed>
      </Section>
    </StyledFullBleed>
  )
}
