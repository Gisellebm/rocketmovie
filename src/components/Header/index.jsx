import { FiSearch } from 'react-icons/fi';
import { Container, Content, Profile } from './styles';
import { Input } from '../../components/Input';

export function Header() {
    return (
        <Container>
            <Content>
                <h1>RocketMovies</h1>
                
                <Input 
                    type="search" 
                    placeholder="Pesquisar pelo título"
                    icon={FiSearch} 
                />
                
                <Profile>               
                    <div>
                        <strong>Giselle Brasil</strong>
                        <button>Sair</button>
                    </div>

                    <img
                        src='https://github.com/Gisellebm.png'
                        alt='Foto do usuário'
                    />
                </Profile>
            </Content>
        </Container>
    )
}