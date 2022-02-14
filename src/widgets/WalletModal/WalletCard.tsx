import React from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey } from "./config";
import { Login, Config } from "./types";
import LinkExternal from "../../components/Link/LinkExternal";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const Button = styled.button`
  height: 60px;
  width: 100%;
  margin-bottom: 10px;
  border: 2px solid #AE32AA;
  border-radius: 10px;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

const ButtonText = styled.text`
  text-align: center;
  font: normal normal normal 16px/25px Poppins;
  color: #6B7682;
`

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <Button
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      style={{ justifyContent: "space-between" }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <ButtonText>
        {title}
      </ButtonText>
      <Icon width="32px" />
    </Button>
  );
};

export default WalletCard;
