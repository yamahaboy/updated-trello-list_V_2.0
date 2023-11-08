import { IconButton, Modal, Stack, Typography } from "@mui/material";
import Sheet from "@mui/joy/Sheet";
import CloseIcon from "@mui/icons-material/Close";
import {
  Container,
  DateContainer,
  InfoContainer,
  RowContainer,
  SheetStyles,
} from "./styles";
type ModalWindowOfCommentsType = {
  open: boolean;
  onClose: () => void;
  user: string;
  name: string;
  body: string;
};

const ModalWindowOfComments: React.FC<ModalWindowOfCommentsType> = (props) => {
  const { open, onClose, name, user, body } = props;

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  return (
    <Modal open={open}>
      <Stack>
        <Sheet color="neutral" variant="solid" sx={SheetStyles}>
          <Container>
            <InfoContainer>
              <RowContainer>
                <Typography sx={{ fontSize: "30px", color: "#000" }}>
                  {name}
                </Typography>
                <Typography sx={{ fontSize: "25px" }}>{user}</Typography>
              </RowContainer>

              <Typography>{body}</Typography>
            </InfoContainer>
            <DateContainer>
              <Typography sx={{ fontSize: "20px" }}>{formattedDate}</Typography>
              <IconButton onClick={onClose} sx={{ margin: "0", padding: "0" }}>
                <CloseIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </DateContainer>
          </Container>
        </Sheet>
      </Stack>
    </Modal>
  );
};

export default ModalWindowOfComments;
