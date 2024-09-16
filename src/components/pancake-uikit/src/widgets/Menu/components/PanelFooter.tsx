import React from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import SocialLinks from "./SocialLinks";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
  width: 100%;
  justify-content: center;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  return (
    <Container>
      <SocialEntry>
        {/* <CakePrice cakePriceUsd={cakePriceUsd} /> */}
        <SocialLinks />
      </SocialEntry>
      {/* <SettingsEntry>
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
      </SettingsEntry> */}
    </Container>
  );
};

export default PanelFooter;
