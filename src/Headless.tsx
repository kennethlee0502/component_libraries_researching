import { Tab } from "@headlessui/react";

function MyTabs() {
  return (
    <div>
      <Tab.Group>
        <br />
        <p className="text-green-700">This is Standrad Headless UI👇</p>
        <br />
        <Tab.List className="flex space-x-4">
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <p>Content 1</p>
          </Tab.Panel>
          <Tab.Panel>
            <p>Content 2</p>
          </Tab.Panel>
          <Tab.Panel>
            <p>Content 3</p>
          </Tab.Panel>
        </Tab.Panels>
        <br />
      </Tab.Group>
      <Tab.Group>
        <br />
        <p className="text-green-700">
          This is styled Headless UI, which requires modifications to the
          tailwind.config.js file. There is no necessity to install twin.macro
          in this case 👇
        </p>

        <br />
        <Tab.List className="flex space-x-4">
          <Tab className="px-4 py-2 bg-blue-400 text-white rounded-md cursor-pointer">
            Tab 1
          </Tab>
          <Tab className="px-4 py-2 bg-green-400 text-white rounded-md cursor-pointer">
            Tab 2
          </Tab>
          <Tab className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer">
            Tab 3
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <p className="text-gray-700">Content 1</p>
          </Tab.Panel>
          <Tab.Panel>
            <p className="text-gray-700">Content 2</p>
          </Tab.Panel>
          <Tab.Panel>
            <p className="text-gray-700">Content 3</p>
          </Tab.Panel>
        </Tab.Panels>
        <br />
      </Tab.Group>
      <p className="text-green-700 ">
        ⭐ Opinion⭐ : Similarly to Radix UI, Headless UI also offers unstyled,
        accessible UI components. Yet, these components are "headless", implying
        that they provide functionality without mandating any particular
        aesthetic. This allows me to pair them with Tailwind CSS and style them
        according to my own design system. Given that Headless UI is built by
        the same team that crafts Tailwind CSS, they are naturally designed to
        work well together. While the component list might not be as extensive
        as that of Chakra UI, it does cover many common UI patterns. As with
        Radix, using Headless UI initially might involve more work because I
        need to define all styles, but it brings a high degree of flexibility to
        the table.
      </p>
      <br />
      <p className="font-black">
        🔥my choice🔥: 1. Radix-UI, 2. Headless-UI, 3. Chakra-UI
      </p>
    </div>
  );
}

export default MyTabs;
