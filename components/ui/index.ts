import dynamic from "next/dynamic";

// UI Components Barrel Exports
export { default as BackButton } from "./BackButton";
export { default as Button } from "./Button";
export { default as FontAwesomeIcon } from "./FontAwesomeIcon";
export { default as IconButton } from "./IconButton";
export { default as Input } from "./Input";
export { default as NavLink } from "./NavLink";
export { default as Select } from "./Select";
export { default as Spinner } from "./Spinner";
export { default as TextArea } from "./TextArea";

// Dinamički import za Modal (teška komponenta)
export const Modal = dynamic(() => import("./Modal"));
