import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

const RadioGroupDemo = () => (
  <form>
    <br />
    <p>This is Standrad Radix UI, not sure why it cant render Tailwin CSS</p>
    <br />
    <RadioGroup.Root
      defaultValue="default"
      aria-label="View density"
      className="flex flex-col space-y-2"
    >
      <div className="flex items-center space-x-2">
        <RadioGroup.Item value="default" id="r1" className="radio-item">
          <RadioGroup.Indicator className="radio-indicator" />
        </RadioGroup.Item>
        <label className="text-gray-700" htmlFor="r1">
          Default
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroup.Item value="comfortable" id="r2" className="radio-item">
          <RadioGroup.Indicator className="radio-indicator" />
        </RadioGroup.Item>
        <label className="text-gray-700" htmlFor="r2">
          Comfortable
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroup.Item value="compact" id="r3" className="radio-item">
          <RadioGroup.Indicator className="radio-indicator" />
        </RadioGroup.Item>
        <label className="text-gray-700" htmlFor="r3">
          Compact
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

export default RadioGroupDemo;
