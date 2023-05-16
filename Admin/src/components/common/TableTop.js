import React from "react";
import { Stack, Box, Button, Typography, Autocomplete, TextField } from "@mui/material";
import NextLink from 'next/link';
import { useRouter } from "next/router";

const TableTop = ({title, isLoading, data}) => {

    const router = useRouter();
    const pathname = router.pathname;
    const lowerTitle = title.toLowerCase();
    const manageLink = `/${pathname}/manage-${lowerTitle}`
  return (
    <>
      <Box align="right">
        <NextLink href={manageLink}>
          <Button variant="outlined" px={6} py={4} size={"large"}>
            Manage {title}
          </Button>
        </NextLink>
      </Box>
      <Stack
        mt={2}
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Typography fontSize={18} fontWeight={600}>
          {title}
        </Typography>
        <Stack sx={{ width: "20%" }}>
          <Autocomplete
            size="small"
            id="free-solo-demo"
            freeSolo
            options={isLoading ? [] : data.map((option) => option.name)}
            renderInput={(params) => (
              <TextField {...params} label={`Search ${title} ...`} />
            )}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default TableTop;
