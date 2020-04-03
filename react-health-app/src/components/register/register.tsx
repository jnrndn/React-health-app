import "date-fns";
import React, { useState, useEffect } from "react";
import { TextField, Button, Chip, Paper } from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { registerUser } from "./../../api/patient.service";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import "./register.css";

export interface IRegisterUser {
  date: Date | null;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  illness: ChipData[];
}

interface ChipData {
  key: number;
  label: string;
}

function RegisterForm() {
  // const { date, id, firstName, lastName, email, illness } = props;

  const [userId, setUserId] = useState("");
  const [birthDate, setBirthDate] = useState<Date | null>(new Date(Date.now()));
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userIllness, setUserIllness] = useState<ChipData[]>([]);
  const [isSaveButtonEnabled, enableSaveButton] = useState(false);

  const handleIdChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const id = event.target.value;
    setUserId(id);
  };

  const handleBirthDateChange = (date: any) => {
    setBirthDate(date);
  };

  const handleUserFirstNameChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const firstName = event.target.value;
    setUserFirstName(firstName);
  };

  const handleUserLastNameChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const lastName = event.target.value;
    setUserLastName(lastName);
  };

  const handleUserEmailChange = (event: React.FormEvent<any>) => {
    const email = (event.target as HTMLTextAreaElement | HTMLInputElement)
      .value;
    setUserEmail(email);
  };

  const handleIllnessChange = (event: any) => {
    let illness: ChipData[] = [];
    const key = userIllness.length + 1;
    const label = event.target.value;
    if (label) {
      illness = [...userIllness, { key: key, label: label }];
      setUserIllness(illness);
      event.target.value = "";
    }
  };

  const handleDeleteChip = (data: ChipData) => {
    setUserIllness((chips) => chips.filter((chip) => chip.key !== data.key));
  };

  const handleSubmit = () => {
    const user: IRegisterUser = {
      date: birthDate,
      id: userId,
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      illness: userIllness,
    };
    registerUser(user);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Add New Patitent</h1>
      </div>
      <ValidatorForm
        className="form"
        useref="form"
        onSubmit={() => handleSubmit()}
        onError={(errors) => console.log(errors)}
      >
        <div className="text-input">
          <TextField
            className="input"
            id="userId"
            required
            label="ID"
            variant="outlined"
            value={userId}
            onChange={(event) => handleIdChange(event)}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              variant="inline"
              required
              inputVariant="outlined"
              label="Birth Date"
              className="input"
              format="MM/dd/yyyy"
              value={birthDate}
              onChange={(event) => handleBirthDateChange(event)}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className="text-input">
          <TextField
            className="input"
            id="firsName"
            required
            label="First Name"
            variant="outlined"
            value={userFirstName}
            onChange={(event) => handleUserFirstNameChange(event)}
          />
          <TextField
            className="input"
            id="lastName"
            required
            label="Last Name"
            variant="outlined"
            value={userLastName}
            onChange={(event) => handleUserLastNameChange(event)}
          />
        </div>
        <div className="text-input">
          <TextValidator
            className="input"
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            fullWidth
            value={userEmail}
            onChange={(event) => handleUserEmailChange(event)}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
        </div>
        <div className="text-input">
          <TextField
            className="input"
            id="ilness"
            label="Illness"
            variant="outlined"
            onKeyUp={(event) =>
              event.keyCode === 13 ? handleIllnessChange(event) : null
            }
          />
        </div>
        <div className="text-input">
          {userIllness.length !== 0 && (
            <Paper className="paper-root">
              {userIllness.map((data) => {
                return (
                  <Chip
                    className="chip"
                    key={data.key}
                    label={data.label}
                    onDelete={() => handleDeleteChip(data)}
                  />
                );
              })}
            </Paper>
          )}
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </div>
      </ValidatorForm>
    </div>
  );
}

export default RegisterForm;
