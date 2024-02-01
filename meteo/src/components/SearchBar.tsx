// components/SearchBar.tsx

import { Input, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <Flex
      align="center"
      justify="center"
      bg="white" // Fond blanc
      py="4" // Espace en haut et en bas
      px="8" // Espace à gauche et à droite
    >
      <Input
        type="text"
        placeholder="Search cities..."
        height="60px" // Ajustez la hauteur selon vos besoins
        width="400px" // Ajustez la largeur selon vos besoins
        mr="2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button height="60px" onClick={handleSearch} colorScheme="blue">
        Search
      </Button>
    </Flex>
  );
};

export default SearchBar;
