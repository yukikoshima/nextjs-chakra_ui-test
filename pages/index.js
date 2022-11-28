import { Box, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { chakra } from '@chakra-ui/react';

export default function Home() {
  const Quoted = ({ children }) => (
    <Box _before={{ content: `"「"` }} _after={{ content: `"」"` }}>
      {children}
    </Box>
  );

  const ShadowBox = (props) => <Box rounded="base" shadow="md" {...props} />;
  // const ShadowBox : FC<BoxProps> = (props) => <Box rounded="base" shadow="md" {...props} />
  // const CBox = (props) => <Box as={props} />;
  const NumberingHoverLink = ({ number, ...linkProps }) => {
    return (
      <Link
        _hover={{ bg: 'teal.200' }}
        bg={number % 2 ? 'gray.100' : 'white'}
        p={2}
        {...linkProps}
      />
    );
  };

  const Header = chakra('header');

  return (
    <>
      <Header>chakra</Header>
      <Box as="header">Boxだけどasでheaderに変更</Box>
      <Box>
        <Text>テキスト</Text>
        <Text _hover={{ fontWeight: 'bold' }}>Hover Me</Text>
        <Quoted>かなちゃん</Quoted>
      </Box>
      <Box bg={['red.200', 'yellow.200', 'green.200', 'blue.200']}>Hello</Box>
      {/* 480px以上はgreen */}
      <Box bg={{ base: 'red.200', sm: 'green.200' }}>Hello</Box>
      {/* <NextLink href="https://google.com" passHref>
        <Button as="a">as=a button</Button>
      </NextLink> */}
      <ShadowBox bg={{ base: 'red.200', sm: 'green.200' }}>hello</ShadowBox>
    </>
  );
}
