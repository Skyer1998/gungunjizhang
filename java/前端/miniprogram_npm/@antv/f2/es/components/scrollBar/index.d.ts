declare const _default: new (props: import("./withScrollBar").ScrollBarProps) => {
    willMount(): any;
    render(): import("../..").JSX.Element;
    startRange: import("../zoom").ZoomRange;
    scale: import("@antv/scale").Scale;
    originScale: import("@antv/scale").Scale;
    minScale: number;
    didMount(): void;
    didUnmount(): void;
    onStart: () => void;
    onPan: (ev: any) => void;
    onPinch: (ev: any) => void;
    onEnd: () => void;
    _doXPan(ev: any): void;
    _doYPan(ev: any): void;
    _doPan(ratio: number): void;
    _doXPinch(ev: any): void;
    _doYPinch(ev: any): void;
    _doPinch(startRatio: number, endRatio: number, zoom: number): void;
    updateRange(range: import("../zoom").ZoomRange): void;
    updateFollow(scales: import("@antv/scale").Scale[], mainScale: import("@antv/scale").Scale, data: any[]): void;
    _getScale(): any;
    _getFollowScales(): any[];
    _bindEvents(): void;
    _clearEvents(): void;
    props: import("./withScrollBar").ScrollBarProps;
    state: import("../zoom").ZoomState;
    context: import("../../base/component").ComponentContext;
    refs: {
        [key: string]: import("../../base/component").default<any, any>;
    };
    updater: import("../../base/component").Updater<import("../zoom").ZoomState>;
    children: import("../..").JSX.Element;
    container: any;
    animate: boolean;
    willReceiveProps(_props: import("./withScrollBar").ScrollBarProps, context?: import("./withScrollBar").ScrollBarProps): void;
    willUpdate(): void;
    didUpdate(): void;
    setState(partialState: import("../zoom").ZoomState, callback?: () => void): void;
    forceUpdate(callback?: () => void): void;
    setAnimate(animate: boolean): void;
};
export default _default;
import withScrollBar from "./withScrollBar";
import ScrollBarView from "./scrollBarView";
export { withScrollBar, ScrollBarView };
