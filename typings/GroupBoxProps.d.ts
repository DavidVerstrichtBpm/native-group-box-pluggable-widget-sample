/**
 * This file was generated from GroupBox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { DynamicValue, NativeIcon } from "mendix";

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export type CollapsibleEnum = "no" | "yesStartExpanded" | "yesStartCollapsed";

export interface GroupBoxProps<Style> extends CommonProps<Style> {
    content?: any;
    collapsible: CollapsibleEnum;
    headerCaption?: DynamicValue<string>;
    expandIcon?: DynamicValue<NativeIcon>;
    expandColor?: string;
    expandTextColor?: string;
    collapseIcon?: DynamicValue<NativeIcon>;
    collapseColor?: string;
    collapseTextColor?: string;
}
