import { useState, useEffect } from "react";

import "./candidates.scss";

import httpModule from "../../helpers/http";
import {  ICandidate } from "../../types/global.typing";

import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";


import { useNavigate } from "react-router-dom";

import CandidatesGrid from "../../components/ui/candidates-grid/CandidatesGrid";

const Candidates = () => {
  const [candidates, setCandidates] = useState<ICandidate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const redirect = useNavigate();

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<ICandidate[]>("/Candidate/Get")
      .then((response) => {
        setCandidates(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content candidates">
      <div className="heading">
        <h2>Candidates</h2>
        <Button variant="outlined" onClick={() => redirect("/candidates/add")}>
          <Add />
        </Button>
      </div>
         {
            loading ? <CircularProgress size={100}/> : candidates.length === 0 ? <h1>No candidates available</h1> : <CandidatesGrid data={candidates}/>
         }
    </div>
  );
};

export default Candidates;
