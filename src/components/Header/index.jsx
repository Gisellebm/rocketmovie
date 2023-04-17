import { FiSearch } from 'react-icons/fi';
import { Container, Content, Profile } from './styles';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <Content>
                <h1>RocketMovies</h1>
                
                <Input 
                    type="search" 
                    placeholder="Pesquisar pelo título"
                    icon={FiSearch} 
                />
                
                <Profile to="/profile">               
                    <div>
                        <strong>{user.name}</strong>
                        <button onClick={signOut} to="/">Sair</button>
                    </div>

                    <img
                        src={avatarUrl}
                        alt={user.name}
                    />
                </Profile>
            </Content>
        </Container>
    )
}