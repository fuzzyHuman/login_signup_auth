import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

export default function Pop({ buttonText, popoverTitle, popoverContent }) {
  return (
    <Popover placement="right">
    <PopoverTrigger>
        <Button color="primary" variant="ghost" style={{ width: '100%', textAlign: 'left' }}>{buttonText}</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-small font-bold">{popoverTitle}</div>
        <div className="text-tiny">{popoverContent}</div>
      </div>
    </PopoverContent>
  </Popover>
  
  );
}
