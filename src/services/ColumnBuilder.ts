import { ColumnDef } from "../types/GridTypes";

export class ColumnBuilder {
    buildColumns(columnData: any[]): ColumnDef[] {
        return columnData.map((col: any) => ({
            id: col.columnID,
            field: col.field.trim(),
            headerName: col.title.trim(),
            columnType: col.ColumnType,
            align: col.align || "left",
            sortable: col.sortable,
            isVisible: col.IsVisible,
            trueText: col.TrueText || "",
            falseText: col.FalseText || "",
            width: col.width,
            editor: col.Editor || {},
            deltaWidth: col.deltaWidth || 0,
            boxWidth: col.boxWidth || col.width,
            cellClass: col.cellClass || "",
            orderId: col.OrderId,
        }));
    }
}
