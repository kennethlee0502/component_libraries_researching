import React from "react";
import * as Label from "@radix-ui/react-label";

const RadixUi = () => (
  <div>
    <br />
    <p className="text-pink-700"> This is unstyled Radix-UI👇</p>
    <div>
      <Label.Root className="LabelRoot" htmlFor="firstName">
        First name
      </Label.Root>
      <input
        className="Input"
        type="text"
        id="firstName"
        defaultValue="Pedro Duarte"
      />
    </div>
    <br />

    <div className="flex flex-col">
      <p className="text-pink-700">
        This Radix-UI styled with Tailwind. Radix-UI comes unstyled by default,
        so there's no need to override any styles using twin.macro. However,
        please note that it's necessary to run 'npm install' for every new
        Radix-UI component that we incorporate into the project👇
      </p>
      <br />
      <label className="font-bold text-lg mb-2" htmlFor="firstName">
        First name
      </label>
      <input
        className="border-2 border-gray-200 p-2 rounded"
        type="text"
        id="firstName"
        defaultValue="Pedro Duarte"
      />
    </div>
    <br />
    <p className="text-pink-700">
      ⭐ Opinion⭐ : On the other hand, Radix UI focuses on delivering low-level
      UI primitives. While it may not have as many pre-built components as
      Chakra UI, it gifts me the flexibility to construct more custom UI
      elements. I see Radix UI as a highly accessible and extendable tool,
      though it might require a bit more effort upfront to style and assemble my
      components. The fact that Radix UI provides fully accessible UI
      primitives, which come without any built-in styles, hands me complete
      control over the look and feel of my projects. This makes Radix UI an
      excellent choice for me when I want to use Tailwind CSS for all my
      styling, as I don't need to override any pre-existing styles. The
      primitives of Radix UI are built to be extended, so they fit nicely into
      my approach of constructing components using Tailwind's utility classes.
    </p>
    <hr />
  </div>
);

export default RadixUi;
