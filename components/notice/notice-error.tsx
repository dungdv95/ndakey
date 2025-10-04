import { useEffect } from "react";

import { toast } from "sonner";

export default function ErrorNotice({ ...props }) {
  const { error } = props;

  useEffect(() => {
    toast.error(`${error?.message}`);
  }, [error]);

  return null;
}
