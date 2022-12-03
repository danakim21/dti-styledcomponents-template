import Head from 'next/head';
import {
  Container,
  Main,
  Description,
  CodeTag,
} from '../components/sharedstyles';
import Cards from '../components/cards';
import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import { count } from 'console';

const ColorChangingButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 2rem 0;
  line-height: 1.15;
  font-size: ${(props: { count: number }) => props.count + 4}em;
  text-align: center;
  text-decoration: none;
`;

const Text = styled.div`
  font-size: ${(props: { count: number }) => 5 - props.count}em;
  color: ${({ theme }) => theme.colors.text};
`;

const MainBG = styled(Main)`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100vw;
`;

export default function Home() {
  const [visMode, setVisMode] = React.useState('light');
  const [clickCount, setClickCount] = React.useState(0);

  const toggleVisMode = () => {
    setVisMode(visMode === 'light' ? 'dark' : 'light');
  };

  const lightTheme = {
    colors: {
      primary: '#0070f3',
      secondary: '#fafafa',
      text: 'red',
    },
  };

  const darkTheme = {
    colors: {
      primary: '#fafafa',
      secondary: '#000',
      text: 'white',
    },
  };

  return (
    <Container>
      <ThemeProvider theme={visMode === 'light' ? lightTheme : darkTheme}>
        <Head>
          <title>Styled Components CSS-in-JS Example</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <MainBG>
          <Title count={clickCount}>Hello World!</Title>
          <Text count={clickCount}>Test</Text>
          <ColorChangingButton
            onClick={() => {
              toggleVisMode();
              setClickCount(clickCount + 1);
            }}
          >
            Click Me!
          </ColorChangingButton>
        </MainBG>
      </ThemeProvider>
    </Container>
  );
}
