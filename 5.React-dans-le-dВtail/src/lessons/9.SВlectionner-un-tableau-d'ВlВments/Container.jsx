import { nanoid } from "nanoid";
import { useState,useRef } from "react";
import DynamicRefSelection from "./DynamicRefSelection";

export default function Container() {

  return (
    <div>
      <DynamicRefSelection/>
    </div>
  )
}
