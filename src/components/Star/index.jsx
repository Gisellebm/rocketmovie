import { Container } from "./styles";
import { FiStar } from 'react-icons/fi';

export function Star() {
    return (
        <Container>
            <li className="full"><FiStar /></li>
            <li className="full"><FiStar /></li>
            <li className="full"><FiStar /></li>
            <li className="full"><FiStar /></li>
            <li><FiStar /></li>
        </Container>
    )
}