import React, { useEffect } from "react";
import styled from "styled-components";
import { getUsers } from "../services/User.service";

const UsersTable = ({ users, updateUsers }) => {
  useEffect(() => {
    getUsers(updateUsers);
  }, [updateUsers]);

  return (
    <Box>
      <Table>
        <Caption>משתמשים</Caption>
        <thead>
          <tr>
            <TH>שם משתמש</TH>
            <TH>אימייל</TH>
            <TH>פלאפון</TH>
            <TH>אתר </TH>
          </tr>
        </thead>
        <tbody>
          {users.map(item => {
            return (
              <tr key={item.id}>
                <TD> {item.userName} </TD>
                <TD> {item.email} </TD>
                <TD> {item.phone} </TD>
                <TD>
                  <Link href={item.website}>Website</Link>
                </TD>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Box>
  );
};

export default UsersTable;

const Box = styled.div`
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
`;

const Caption = styled.caption`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 5px;
  text-align: center;
  color: #f96;
  text-decoration: underline;
`;

const Table = styled.table`
  direction: rtl;
  width: auto;
  margin: 40px auto;
  background-color: white;
  color: orange;
  font-weight: bold;
`;

const TH = styled.th`
  margin: 0.5px 20px;
  text-align: center;
  padding: 15px 20px;
  color: #ff7575;
  width: auto;
  text-decoration: underline;
  font-size: 2rem;
  border: 1px solid #ddd;
`;

const TD = styled.td`
  margin: 0.5px 20px;
  text-align: left;
  padding: 15px 20px;
  width: auto;
  border: 1px solid #ddd;
`;

const Link = styled.a`
  color: orange;
  font-weight: bold;
`;
