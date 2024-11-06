import { Link } from "react-router-dom";


interface ButtonsProps {
    toLink:string;
    title: string;
    classes: string;
}

function Buttons({toLink,title, classes}: ButtonsProps) {
  return (
    <Link to={toLink} className={classes}>{title}</Link>
  )
}

export default Buttons