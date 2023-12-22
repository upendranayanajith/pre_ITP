import { Grid, Input, Typography } from "@mui/material";

const UserForms = (props) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#FFFFFF",
        marginBottom: "30px",
        display: "block"
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography component={"h1"} sx={{ color: "#000000" }}>
          User
        </Typography>

        <Grid item xs={12} sm={{display: 'flex'}}>
          <Typography
            component={"label"}
            htmlfor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              fontSize: "16px",
              width: "100px",
              display: "block"
            }}
          >
            ID
          </Typography>
          <Input
            type="number"
            id="id"
            name="id"
            sx={{ width: "400px" }}
            value={""}
            onChange={(e) => {}}
          />
        </Grid>


        <Grid item xs={12} sm={{display: 'flex'}}>
          <Typography
            component={"label"}
            htmlfor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              fontSize: "16px",
              width: "100px",
              display: "block"
            }}
          >
           Name
          </Typography>
          <Input
            type="text"
            id="name"
            name="name"
            sx={{ width: "400px" }}
            value={""}
            onChange={(e) => {}}
          />
        </Grid>



      </Grid>
<button 
sx={{
    margin:"auto",
    color: "#000000",
    backgroundColor: "#FFFFFF",
    border: "1px solid #000000",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    width: "100px",
    display: "block",
    "&:hover":{
opacity: "0.7",
backgroundColor:"#00c6e6",
    }
}}>
    Add
</button>


    </Grid>
  );
};

export default UserForms;
