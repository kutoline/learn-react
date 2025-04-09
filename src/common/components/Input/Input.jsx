export const Input = ({ handleChange, name = "", value = "" }) => {
    return (
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
      />
    );
}