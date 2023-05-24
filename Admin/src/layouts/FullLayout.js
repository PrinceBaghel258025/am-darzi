'use client'
import React from "react";
import {
  experimentalStyled,
  useMediaQuery,
  Container,
  Box,
  Button,
} from "@mui/material";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import { useSession, signIn } from "next-auth/react";

import { getServerSession } from "next-auth/next";
import SignIn from '../components/sign-in';
// import { getToken } from "next-auth/jwt";
import authOptions from '../../pages/api/auth/[...nextauth]'


const MainWrapper = experimentalStyled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));

const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: "64px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));


const FullLayout = ({ children, session: session2 }) => {

  // const router = useRouter();
  const { data: session, status } = useSession()
  console.log("sesssssssssssss", session)
  console.log("statusssssssssssssssss", status)
  // console.log("serversession", session2);

  const [isSidebarOpen, setSidebarOpen] = React.useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  if (status === 'authenticated') {
    // router.push('/sign-in')
    return (
      <>
        {
          // status === "loading" ? <>Loading...</> :
          // session===null ? <SignIn />
          // status === 'authenticated' && session ? 
          <MainWrapper>
            <Header
              sx={{
                paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
                backgroundColor: "#fbfbfb",
              }}
              toggleMobileSidebar={() => setMobileSidebarOpen(true)}
            />
            <>
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                isMobileSidebarOpen={isMobileSidebarOpen}
                onSidebarClose={() => setMobileSidebarOpen(false)}
              />
              <PageWrapper>
                <Container
                  maxWidth={false}
                  sx={{
                    paddingTop: "20px",
                    paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
                  }}
                >
                  <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
                  <Footer />
                </Container>
              </PageWrapper>
            </>
          </MainWrapper>
          // : <SignIn />
          // : <></>
        };
      </>

    );
  } else if (status === 'unauthenticated') {
    return <><SignIn /></>
  }
  else {
    return <>Loading...</>
  }
}

export default FullLayout;


// export async function getServerSideProps (context) {
//   const { req } = context;
//   // const sess = await getSession({req});
//   const sess = await getToken({req});
//   return {
//     props: {
//       sess: sess
//     }
//   }
// }

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  }
}