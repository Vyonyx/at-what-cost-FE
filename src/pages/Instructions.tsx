import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import anzLogo from "../assets/anz-logo.png";

function Instructions() {
  return (
    <Container sx={{ margin: "4rem 0" }}>
      <Typography mb={6} variant="h3" color="inherit" align="center">
        At What Cost
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography mb={2} variant="h5" color="inherit" align="center">
            Find out where your money is going each month and take control of
            your finances.
          </Typography>
          <Divider />
          <Typography my={2} variant="h5" color="inherit" align="center">
            Instructions
          </Typography>
          <List>
            <ListItem>
              <ListItemText>
                1. Signup / Login to be directed to the dashboard where you can
                upload a .CSV file of your bank statement (list of transactions)
                which you can download from your (online) bank.
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                2. Add filters to the on screen transactions list to start
                categorising your spending. These filters help divide your
                spending into categories, displayed for analysis within the cost
                breakdown section. We provide a list of generic categories for
                you to choose from, as well as the freedom to enter a custom
                category to fine tune your analysis.
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                3. Categorising an unfiltered transaction will apply that filter
                to all related transactions. We recommend you add a filter to
                all reoccurring transactions to form an accurate analysis. We
                save all your filters as you add and update them so that you can
                hit the ground running when you upload a new .CSV file the next
                month. With a few uses, you will be able to analyse your monthly
                spending habits in less than 2 minutes!
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
              }}
            >
              <Typography variant="h6" mb="0.5rem" align="center" width="100%">
                Supported Banks:
              </Typography>
              <img src={anzLogo} height={40} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              backgroundColor: "white",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2211&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              minHeight: "16rem",
            }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ margin: "4rem 0" }} />

      <Typography variant="h3" align="left">
        FAQ:
      </Typography>
      <Typography mt="2rem" variant="h5" color="inherit" align="left">
        How safe is it upload my bank statement to this web app?
      </Typography>
      <Typography mt="0.5rem" variant="body1" color="inherit" align="left">
        A bank statement in .CSV format does not contain your bank balance,
        contact or account information. It is simply a list of your transactions
        without any other context, making it safe to use here. We also do not
        save your bank statement or the resulting analysis to our database, so
        you can rest assured.
      </Typography>
    </Container>
  );
}
export default Instructions;
