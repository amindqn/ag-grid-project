import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColumnDef } from "../types/GridTypes";
import { DataService } from "../services/DataService";
import { ColumnBuilder } from "../services/ColumnBuilder";

interface GridComponentState {
    columnDefs: ColumnDef[];
    rowData: any[];
}

class GridComponent extends Component<{}, GridComponentState> {
    private dataService: DataService;
    private columnBuilder: ColumnBuilder;

    constructor(props: {}) {
        super(props);
        this.dataService = new DataService("/data/Datagrid_Josn.txt");
        this.columnBuilder = new ColumnBuilder();

        this.state = {
            columnDefs: [],
            rowData: [],
        };
    }

    async componentDidMount() {
        const jsonData = await this.dataService.fetchData();
        const columnDefs = this.columnBuilder.buildColumns(jsonData.Entity.columns);

        this.setState({
            columnDefs: columnDefs,
            rowData: this.createRowData(columnDefs),
        });
    }

    private createRowData(columnDefs: ColumnDef[]): any[] {
        const rows = [];
        const numberOfRows = 20;

        for (let i = 0; i < numberOfRows; i++) {
            const row: any = {};
            columnDefs.forEach((col) => {
                row[col.field] = this.generateFakeData(col, i);
            });
            rows.push(row);
        }

        return rows;
    }

    private generateFakeData(col: ColumnDef, index: number): any {
        switch (col.columnType) {
            case 4:
                return Math.floor(Math.random() * 1000);
            case 9:
                return `Fake ${col.field} ${index + 1}`;
            case 19:
                return index % 2 === 0 ? col.trueText : col.falseText;
            case 16:
                return new Date().toISOString();
            default:
                return `Fake ${col.field} ${index + 1}`;
        }
    }

    render() {
        return (
            <div style={{ height: 600, width: 1000 }}>
                <div
                    className="ag-theme-quartz-dark"
                    style={{ height: 500, width: 1000 }}
                >
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        pagination={true}
                        paginationAutoPageSize={true}
                    />
                </div>
            </div>
        );
    }
}

export default GridComponent;
