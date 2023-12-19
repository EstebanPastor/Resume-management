import { useState, useEffect } from "react";

import "./companies.scss";

import httpModule from "../../helpers/http";
import { ICompany } from "../../types/global.typing";

import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from "react-router-dom";
import CustomDataGrid from "../../components/ui/data-grid/CustomDataGrid";

const Companies = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const redirect = useNavigate();

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<ICompany[]>("/Company/Get")
      .then((response) => {
        setCompanies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content companies">
      <div className="heading">
        <h2>Companies</h2>
        <Button variant="outlined" onClick={() => redirect("/companies/add")}>
          <Add />
        </Button>
      </div>
         {
            loading ? <CircularProgress size={100}/> : companies.length === 0 ? <h1>No company</h1> : <CustomDataGrid data={companies}/>
         }
    </div>
  );
};

export default Companies;
