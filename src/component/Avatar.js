//import Avatar from './component/Avatar';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
const Avatars = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 0, height: 0 }}
      />
    </Stack>
  );
};
export default Avatars;
