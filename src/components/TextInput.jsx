import { InputBase, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TextInput = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <Paper
      component={"form"}
      onSubmit={onSubmit}
      sx={{
        gap: "12px",
        padding: "8px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AddIcon />
      <InputBase
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        sx={{ fontSize: "large" }}
      />
    </Paper>
  );
};

export default TextInput;
