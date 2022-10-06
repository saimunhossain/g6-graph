import { NodeConfig } from "@antv/g6";
export interface LargeGraphEdge {
 id?: string;
 source: string;
 target: string;
 label?: string;
 value?: number;
}
export interface LargeGraphNode {
    id: string;
    label?: string
}
export default interface LargeGraphData {
    nodes: LargeGraphNode[];
    edges: LargeGraphEdge[];
}