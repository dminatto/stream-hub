"use client";

import React from "react";
import styled from "styled-components";

const mobileBreakpoint = "768px";

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #888;
  padding: 1.5rem 2.5rem;
  border-top: 1px solid #222;
  font-size: 0.9rem;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 1.5rem 1rem;
    font-size: 0.85rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

const LegalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Copyright = styled.span`
  white-space: nowrap;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${mobileBreakpoint}) {
    gap: 1rem;
  }
`;

const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const DevelopedBy = styled.div`
  color: #888;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: #aaa;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

const BetaTag = styled.span`
  background-color: #d9534f;
  color: #fff;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  text-transform: uppercase;
  margin-left: 0.3rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <LegalInfo>
          <Copyright>© Flow {currentYear}</Copyright>
          <LinksContainer>
            <FooterLink href="/politica-de-privacidade">
              Política de Privacidade
            </FooterLink>
            <FooterLink href="/termos-de-uso">Termos de Uso</FooterLink>
          </LinksContainer>
        </LegalInfo>

        <DevelopedBy>
          Desenvolvido por{" "}
          <a
            href="https://netshow.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netshow.me
          </a>
          <BetaTag>Beta</BetaTag>
        </DevelopedBy>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
