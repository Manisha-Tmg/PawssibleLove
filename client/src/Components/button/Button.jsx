import "../navbar/Navbar.css";
const Button = ({ label, onChange, value, className, onClick }) => {
  return (
    <>
      <div className="nav-actions">
        <button
          className={className}
          value={value}
          onChange={onChange}
          onClick={onClick}
        >
          {label}
        </button>
      </div>
    </>
  );
};

export default Button;
