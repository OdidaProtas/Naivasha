import { useState } from "react";

export default function useSnackBar() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("An error occured");
  const [severity, setSeverity] = useState("error");

  const toggle = () => setOpen((prevState) => !prevState);

  return { open, toggle, msg, setMsg, severity, setSeverity };
}
