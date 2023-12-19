import "./candidates-grid.scss";

import { ICandidate } from "../../../types/global.typing";

import { PictureAsPdf } from "@mui/icons-material";

import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models";

import { Box } from "@mui/material";

import { BASE_URL } from "../../../constants/url";

const column: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "firstName",
    headerName: "First Name",
    width: 120,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 120,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "coverLetter",
    headerName: "C V",
    width: 120,
  },
  {
    field: "resumeUrl",
    headerName: "Download",
    width: 120,
    renderCell: (params) => (
      <a
        href={`${BASE_URL}/Candidate/download/${params.row.resumeUrl}`}
        download
      >
        <PictureAsPdf />
      </a>
    ),
  },
];

interface ICandidatesGridProps {
  data: ICandidate[];
}

const CandidatesGrid = ({ data }: ICandidatesGridProps) => {
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

export default CandidatesGrid;
