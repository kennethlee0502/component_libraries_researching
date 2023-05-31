import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import tw from "twin.macro";

function ChakraUI() {
  return (
    <div>
      <br />
      <p className="text-blue-700">This is Standrad Chakra-UI👇</p>
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
      <p className="text-blue-700">
        This is a Chakra UI setup with Tailwind CSS. It requires a tool called
        twin.macro, which is the easiest to install without the need for
        modifying tailwind.config.js.👇
      </p>
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
      <br />
      <p className="text-blue-700">
        ⭐ Opinion⭐ : I appreciate Chakra UI for its modularity and
        accessibility. It presents me with a suite of components straight out of
        the box, all carrying their unique styles. I find Chakra UI's strong
        emphasis on accessibility and customizability particularly noteworthy.
        Moreover, it grants me the liberty to use style props to style
        components, which gel quite well with Tailwind's utility classes.
        However, when I combine Tailwind with Chakra UI, I often find myself
        having to override some of Chakra's styles to bring them in line with
        Tailwind's design system. I really like the broad array of common UI
        elements, such as buttons, forms, modals, and popovers, Chakra UI
        offers.
      </p>
      <hr />
    </div>
  );
}

export default ChakraUI;
