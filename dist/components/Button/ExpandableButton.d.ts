import React, { PropsWithChildren } from "react";
interface Props {
    onClick?: () => void;
    expanded?: boolean;
}
export declare const ExpandableButton: React.FC<PropsWithChildren<Props>>;
export declare const ExpandableLabel: React.FC<PropsWithChildren<Props>>;
export {};
