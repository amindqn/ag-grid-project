export interface ColumnDef {
    id: number;
    field: string;
    headerName: string;
    columnType: number;
    align: string;
    sortable: boolean;
    isVisible: boolean;
    trueText: string;
    falseText: string;
    width: number;
    editor: object;
    deltaWidth: number;
    boxWidth: number;
    cellClass: string;
    orderId: number;
}
