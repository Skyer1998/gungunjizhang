import { px } from '../../types';
import { ZoomProps } from '../zoom';
export interface ScrollBarProps extends ZoomProps {
    /**
     * 显示滚动条
     */
    visible?: boolean;
    /**
     * 滚动条显示位置
     */
    position?: 'bottom' | 'top' | 'left' | 'right';
    /**
     * 间距
     */
    margin?: px;
}
declare const _default: (View: any) => {
    new (props: ScrollBarProps): {
        willMount(): any;
        render(): import("../..").JSX.Element;
        startRange: import("../zoom").ZoomRange;
        scale: import("@antv/scale/lib/base").default;
        originScale: import("@antv/scale/lib/base").default;
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
        updateFollow(scales: import("@antv/scale/lib/base").default[], mainScale: import("@antv/scale/lib/base").default, data: any[]): void;
        _getScale(): any;
        _getFollowScales(): any[];
        _bindEvents(): void;
        _clearEvents(): void;
        props: ScrollBarProps;
        state: import("../zoom").ZoomState;
        context: import("../../base/component").ComponentContext;
        refs: {
            [key: string]: import("../../base/component").default<any, any>;
        };
        updater: import("../../base/component").Updater<import("../zoom").ZoomState>;
        children: import("../..").JSX.Element;
        container: any;
        animate: boolean;
        willReceiveProps(_props: ScrollBarProps, context?: ScrollBarProps): void;
        willUpdate(): void;
        didUpdate(): void;
        setState(partialState: import("../zoom").ZoomState, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        setAnimate(animate: boolean): void;
    };
};
export default _default;
