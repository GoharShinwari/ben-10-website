import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { FaBook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./TopBar.css";

function TopBar() {
  return (
    <Box className="top-bar" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Link to="/" className="nav-link">
        <Heading as="h2" fontSize="100px" mx={10}>
          Ben 10 API
          </Heading>
          </Link>
        <Flex alignItems="center">
          <Link to="/docs" className="nav-link">
            <FaBook size={20} />
            <Spacer mx={10} />
            Docs
          </Link>
          <a href="https://github.com/GoharShinwari/ben-10-website" className="nav-link">
            <FaGithub size={20} />
            <Spacer mx={10} />
            GitHub
          </a>
        </Flex>
      </Flex>
    </Box>
  );
}

export default TopBar;
