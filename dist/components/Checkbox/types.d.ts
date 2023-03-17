export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
};
export type Scales = typeof scales[keyof typeof scales];
export interface CheckboxProps {
    scale?: Scales;
}
