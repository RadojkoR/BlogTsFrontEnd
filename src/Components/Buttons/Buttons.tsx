import { Link } from "react-router-dom";


interface ButtonsProps {
  toLink: string;
  title: string;
  classes: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function Buttons({toLink,title, classes, onClick}: ButtonsProps) {
  return (
    <Link to={toLink} className={classes} onClick={onClick}>{title}</Link>
  )
}

export default Buttons