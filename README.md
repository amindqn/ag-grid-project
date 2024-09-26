# GridComponent Project

This project demonstrates how to create a dynamic grid-based application using React, TypeScript, and ag-Grid, following SOLID principles and OOP. The project dynamically generates grid columns based on a JSON file and then create fake rows based on the columns and uses all the available properties from the JSON columns.

## Project Structure

- **src/services/DataService.ts**:
  - Responsible for fetching data from a `.txt` file and parsing it to JSON format.
  - Provides a method `fetchData()` to retrieve the data.

- **src/services/ColumnBuilder.ts**:
  - This class builds the column definitions for ag-Grid by reading properties from the JSON data.
  - The following properties are dynamically mapped from the JSON:
    - `id`: Unique ID for each column.
    - `field`: The field name from the data.
    - `headerName`: The title to be displayed in the header.
    - `sortable`: Whether the column is sortable.
    - `width`: The width of the column.
    - `align`: Text alignment in the column (default: `left`).
    - `isVisible`: Whether the column is visible.
    - `trueText`: The text to show when a boolean field is `true`.
    - `falseText`: The text to show when a boolean field is `false`.
    - `formatter`: A custom formatter for the column values.
    - `cellClass`: A CSS class to apply to the column cells.
    - `editor`: An editor object for columns that need custom input.
    - `deltaWidth`: Adjustment width for columns.
    - `boxWidth`: Box width for cells.

- **src/components/GridComponent.tsx**:
  - The main component that renders the ag-Grid.
  - It uses `DataService` to fetch the JSON data and `ColumnBuilder` to generate column definitions based on the data.

- **src/types/GridTypes.ts**:
  - Contains the `ColumnDef` interface, which defines the structure of the ag-Grid column definitions.

## Running the Project

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Place the `Datagrid_Josn.txt` file in the `public/data` folder.
4. Run the project using `npm start`.

## Extending the Project

- To extend the project, you can modify `DataService` to fetch data from an API.
- You can also add more properties to `ColumnBuilder` to support additional ag-Grid features.