export const Textarea = ({ handleChange, name = "", value = "" }) => {
  return <textarea name={name} value={value} onChange={handleChange} />;
};
