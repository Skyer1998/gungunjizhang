import Component from '../../base/component';
import { ChartChildProps } from '../../chart';
import { Scale } from '@antv/scale';
export declare type ZoomRange = [number, number];
export declare type ScaleValues = number[] | string[];
export interface ZoomProps extends ChartChildProps {
    /**
     * 缩放和平移模式
     */
    mode?: 'x' | 'y' | null;
    /**
     * 显示的范围
     */
    range?: ZoomRange;
    /**
     * 平移
     */
    pan?: boolean;
    /**
     * 缩放
     */
    pinch?: boolean;
    /**
     * 自动同步 x/y 的坐标值
     */
    autoFit?: boolean;
}
export interface ZoomState {
    range: ZoomRange;
}
declare class Zoom<P extends ZoomProps = ZoomProps, S extends ZoomState = ZoomState> extends Component<P, S> {
    startRange: ZoomRange;
    scale: Scale;
    originScale: Scale;
    minScale: number;
    constructor(props: P);
    didMount(): void;
    willMount(): void;
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
    updateRange(range: ZoomRange): void;
    updateFollow(scales: Scale[], mainScale: Scale, data: any[]): void;
    _getScale(): any;
    _getFollowScales(): any[];
    _bindEvents(): void;
    _clearEvents(): void;
}
export default Zoom;
