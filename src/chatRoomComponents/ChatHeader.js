import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// icons
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ChatHeader = () => {
  return (
    <Box>
      <AppBar position="static" elevation={0}>
        <Toolbar
          sx={{
            backgroundColor: "#f2f2f2",
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
            height: "10vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Avatar
              alt="profile pic"
              src="assets/images/dp.jpg"
              sx={{
                cursor: "pointer ",
                width: "50px",
                height: "50px",
              }}
            />
            <Box ml="30px">
              <Typography variant="h6" fontWeight="bold">
                Group Anonymous
              </Typography>
              <Typography>
                Shreyans, Riya, Rudransh, Narendra, Dhriti
              </Typography>
            </Box>
          </Box>

          <Box>
            <IconButton>
              <CallIcon className="headerbtn" fontSize="large" />
            </IconButton>
            <IconButton>
              <VideoCallIcon className="headerbtn" fontSize="large" />
            </IconButton>
            <IconButton>
              <MoreVertIcon className="headerbtn" fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ChatHeader;
