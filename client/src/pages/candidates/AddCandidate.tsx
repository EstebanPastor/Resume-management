import { useState, useEffect } from "react";

import "./candidates.scss";

import {
  ICandidateDto,
  ICompany,
  ICreateJobDto,
  IJob,
} from "../../types/global.typing";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem/MenuItem";

import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http";

const AddCandidate = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [pdfFile, setPdfFile] = useState<File | null>();
  const [candidate, setCandidate] = useState<ICandidateDto>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coverLetter: "",
    jobId: "",
  });

  useEffect(() => {
    httpModule
      .get<IJob[]>("/Job/Get")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const redirect = useNavigate();

  const handleClickSaveBtn = () => {
    if (candidate.firstName === "" || candidate.lastName === "" || candidate.email === "" || candidate.phone === "" || candidate.coverLetter === "" || candidate.jobId === "" || !pdfFile) {
      alert("Please fill all fields");
      return;
    }
    const newCandidateFormData = new FormData();
    newCandidateFormData.append("firstName", candidate.firstName)
    newCandidateFormData.append("lastName", candidate.lastName)
    newCandidateFormData.append("email", candidate.email)
    newCandidateFormData.append("phone", candidate.phone)
    newCandidateFormData.append("jobId", candidate.jobId)
    newCandidateFormData.append("coverLetter", candidate.coverLetter)
    newCandidateFormData.append("pdfFile", pdfFile)
    httpModule
      .post("/Candidate/Create", candidate)
      .then((response) => redirect("/jobs"))
      .catch((error) => console.log(error));
  };

  const handleClickBackBtn = () => {
    redirect("/candidates");
  };

  return (
    <div className="content">
      <div className="add-candidates">
        <h2>Add new Candidate</h2>

        <FormControl fullWidth>
          <InputLabel>Job</InputLabel>
          <Select
            value={candidate.jobId}
            label="Job"
            onChange={(e) =>
              setCandidate({ ...candidate, jobId: e.target.value })
            }
          >
            {jobs.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          autoComplete="off"
          label="First name"
          variant="outlined"
          value={candidate.firstName}
          onChange={(e) =>
            setCandidate({ ...candidate, firstName: e.target.value })
          }
        />
        <TextField
          autoComplete="off"
          label="Last name"
          variant="outlined"
          value={candidate.lastName}
          onChange={(e) =>
            setCandidate({ ...candidate, lastName: e.target.value })
          }
        />
        <TextField
          autoComplete="off"
          label="Email"
          variant="outlined"
          value={candidate.email}
          onChange={(e) =>
            setCandidate({ ...candidate, email: e.target.value })
          }
        />
        <TextField
          autoComplete="off"
          label="Phone"
          variant="outlined"
          value={candidate.phone}
          onChange={(e) =>
            setCandidate({ ...candidate, phone: e.target.value })
          }
        />
        <TextField
          autoComplete="off"
          label="Cover letter"
          variant="outlined"
          value={candidate.coverLetter}
          onChange={(e) =>
            setCandidate({ ...candidate, coverLetter: e.target.value })
          }
          multiline
        />
        <input
          type="file"
          onChange={(event) =>
            setPdfFile(event.target.files ? event.target.files[0] : null)
          }
        />

        <button className="btns">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickSaveBtn}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickBackBtn}
          >
            Back
          </Button>
        </button>
      </div>
    </div>
  );
};

export default AddCandidate;
