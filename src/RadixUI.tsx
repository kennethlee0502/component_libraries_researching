import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const RadixUi = () => {
  return (
    <div className="relative custom-dropdown-root">
      <br />
      <p>
        This is a Tailwind CSS Radix UI example. I have made attempts to style
        it with Tailwind CSS, but unfortunately, I couldn't achieve the desired
        results.
      </p>
      <br />
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger className="border border-black px-4 py-2 cursor-pointer custom-dropdown-trigger">
          Trigger
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Content className="absolute bg-black shadow-md">
          <DropdownMenuPrimitive.Item className="px-4 py-2 cursor-pointer">
            Item
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default RadixUi;
