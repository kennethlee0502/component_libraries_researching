import { Tab } from "@headlessui/react";

function MyTabs() {
  return (
    <Tab.Group>
      <br />
      <p className="text-gray-700">
        This is Headless UI, I try my best, cant style Headless UI with Tailwind
        CSS as well
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
  );
}

export default MyTabs;
