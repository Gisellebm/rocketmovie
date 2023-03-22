import { FiPlus } from 'react-icons/fi';
import { Container, Content, Notes } from './styles';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Note } from '../../components/Note';

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <div>
                    <h1>Meus Filmes</h1>
                    <Link to="/new">
                        <Button icon={FiPlus} title="Adicionar Filme" />
                    </Link>
                </div>

                <Notes>
                    <Note data={{ 
                        title: 'Interestellar',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}
                        ]
                    }} />

                    <Note data={{ 
                        title: 'Interestellar',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}
                        ]
                    }} />

                    <Note data={{ 
                        title: 'Interestellar',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}
                        ]
                    }} />
                </Notes>
            </Content>

        </Container>
    )
}