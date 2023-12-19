import "./jobs-grid.scss";

import { IJob } from "../../../types/global.typing";

import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models";

import { Box } from "@mui/material";
import moment from "moment";

const column: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 500,
  },
  {
    field: "level",
    headerName: "Level",
    width: 150,
  },
  {
    field: "companyName",
    headerName: "Company Name",
    width: 150,
  },
  {
    field: "dateTime",
    headerName: "Creation Time",
    width: 150,
    renderCell: (params) => moment(params.row.dateTime).fromNow(),
  },
];

interface IJobsGridProps {
  data: IJob[];
}

const JobsGrid = ({ data }: IJobsGridProps) => {
  return (
    <Box sx={{ width: "100%", height: 450 }} className="jobs-grid">
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
  );
};

export default JobsGrid;
