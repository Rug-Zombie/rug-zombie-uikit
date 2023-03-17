import React, { PropsWithChildren } from "react";
interface Props {
    toCopy: string;
}
declare const CopyToClipboard: React.FC<PropsWithChildren<Props>>;
export default CopyToClipboard;
