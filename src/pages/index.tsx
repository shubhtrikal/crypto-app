import ResponsiveDrawer from "../components/Drawer";
import { Typography } from '@mui/material'

const Home = () => {
  const drawerWidth = 240;
  return (
    <>
      <ResponsiveDrawer />
      <Typography variant="h3">
        Hello World !
      </Typography>
    </>
  )
}

export default Home;