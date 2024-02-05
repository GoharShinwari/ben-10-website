import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const Docs: React.FC = () => {
  const handleCopyClick = (endpoint: string) => {
    navigator.clipboard.writeText(endpoint);
  };

  const exampleRandomOutput = {
    appearance: "...",
    description: "...",
    homeplanet: "...",
    id: "...",
    name: "...",
    powers: "...",
    species: "...",
    weakness: "...",
  };

  const exampleSpecificOutput = {
    appearance: "A humanoid alien with three faces representing different personalities and floating in a cosmic background.",
    description: "Alien X is an extremely powerful and complex alien with reality-warping abilities, omniscience, and omnipotence. He comes from the Forge of Creation, the birthplace of the Celestialsapiens.",
    homeplanet: "The Forge of Creation",
    id: 0,
    name: "Alien X",
    powers: "Reality Warping, Omniscience, Omnipotence",
    species: "Celestialsapien",
    weakness: "Requires a unanimous decision from all three personalities to take any action. Disagreements can lead to inaction.",
  };

  const EndpointContainer: React.FC<{ title: string, description: string, endpoint: string, exampleOutput: any }> = ({ title, description, endpoint, exampleOutput }) => (
    <Box
      className="endpoint-container"
      textAlign="center"
      padding={4}
      borderRadius="8px"
      marginBottom="20px"
      backgroundColor="#2D3331"
      color="white"
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <Button
        onClick={() => handleCopyClick(endpoint)}
        fontSize="sm"
        fontFamily="inherit"
        backgroundColor="#1B2021"
        cursor="pointer"
        marginBottom="10px"
      >
        {endpoint}
      </Button>
      <Box className="example-container">
        <h3>Example Output:</h3>
        <Box
          className="code-block"
          backgroundColor="#1B2021"
          padding={3}
          borderRadius="8px"
          overflowX="auto"
        >
          <pre>
            {JSON.stringify(exampleOutput, null, 2)}
          </pre>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor="#1B2021"
      color="white"
    >
      <Box fontSize="3vh" fontFamily="Source Code Pro" textAlign="center" mb={4} style={{ textDecoration: 'underline', color: 'white' }}>
        <h1>API Documentation</h1>
      </Box>

      <EndpointContainer
        title="Retrieve a random Alien"
        description="Retrieve information about a random alien by making a GET request to:"
        endpoint="https://ben-10-api.onrender.com/aliens"
        exampleOutput={exampleRandomOutput}
      />

      <EndpointContainer
        title="Retrieve a specific Alien"
        description="Retrieve information about a specific alien using Name or ID"
        endpoint="https://ben-10-api.onrender.com/aliens/Alien X"
        exampleOutput={exampleSpecificOutput}
      />
    </Flex>
  );
};

export default Docs;
