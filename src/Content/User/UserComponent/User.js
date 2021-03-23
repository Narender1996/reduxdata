import React, { useState } from "react";
import { Table, Button } from "semantic-ui-react";
import EditModule from "./EditModule";
import {useHistory} from "react-router-dom"

function User(props) {
  const history = useHistory()
  const { getData, deleteformData, changeUserData } = props;
  const [open, setOpen] = useState(false);
  const [previousData, setPreviousData] = useState([]);

  const openModal = (data) => {
    setOpen(true);
    setPreviousData([{ ...data }]);
  };

  return (
    <>
      <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Index</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Password</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {getData.map((data, index) => (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{data.firstname}</Table.Cell>
              <Table.Cell>{data.lastname}</Table.Cell>
              <Table.Cell>{data.email}</Table.Cell>
              <Table.Cell>{data.password}</Table.Cell>
              <Button color="grey" onClick={() => openModal(data)}>
                Edit
              </Button>

              <Button color="black" onClick={() => deleteformData(index)}>
                Delete
              </Button>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {open && (
        <EditModule
          oPen={open}
          data={previousData}
          submitData={changeUserData}
          close={() => setOpen(false)}
        />
      )}
      <Button color="black" onClick={()=>history.push("/signup")}> Logout</Button>
    </>
  );
}

export default User;
