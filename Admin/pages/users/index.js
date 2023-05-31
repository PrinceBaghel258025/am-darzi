import { useQuery } from "@tanstack/react-query";
import React from "react";
import userServices from "../../src/services/user";
import { Typography, Button } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

import BaseCard from "../../src/components/baseCard/BaseCard";
import TableTop from "../../src/components/common/TableTop";

const Users = () => {
  const queries = useQueryClient();
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await userServices.getUsers(),
  });
  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return (
      <>
        <Typography>Something went wrong</Typography>
        <Button
          onClick={() => {
            queries.invalidateQueries(["users"]);
          }}
        >
          Try Again
        </Button>
      </>
    );
  }
  console.log(users);
  return (
    <BaseCard title="Users">
         <TableTop data={users} isLoading={isLoading} title={"Users"} />
      <div>Users</div>
    </BaseCard>
  );
};

export default Users;
