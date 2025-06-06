const Alert = ({ content, type }) => {
  return <div className={`alert alert-${type}`}>{content}</div>;
};

export default Alert;
