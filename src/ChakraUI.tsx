import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import tw from "twin.macro";

function ChakraUI() {
  return (
    <div>
      <p>This is Standrad Chakra-UI</p>
      <br />
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <br />
      <p>This is Tailwind CSS Chakra-UI, it needs a tool called twin.macro</p>
      <br />
      <Tabs sx={tw`bg-gray-800`}>
        <TabList>
          <Tab
            sx={tw`py-2 px-4 border-b-2 hover:border-green-500 text-pink-500 hover:text-pink-600`}
          >
            One
          </Tab>
          <Tab
            sx={tw`py-2 px-4 border-b-2 hover:border-green-500 text-pink-500 hover:text-pink-600`}
          >
            Two
          </Tab>
          <Tab
            sx={tw`py-2 px-4 border-b-2 hover:border-green-500 text-pink-500 hover:text-pink-600`}
          >
            Three
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box as="p" sx={tw`p-4 text-pink-500`}>
              one!
            </Box>
          </TabPanel>
          <TabPanel>
            <Box as="p" sx={tw`p-4 text-pink-500`}>
              two!
            </Box>
          </TabPanel>
          <TabPanel>
            <Box as="p" sx={tw`p-4 text-pink-500`}>
              three!
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default ChakraUI;
