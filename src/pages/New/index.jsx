import { Container, Form } from "./styles";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Textarea } from "../../components/Textarea";
import { ButtonText } from '../../components/ButtonText';
import { NoteItem } from '../../components/NoteItem';


export function New() {
    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <ButtonText />
                        <h1>Novo filme</h1>
                    </header>

                    <div className="twoColumns">
                        <Input
                            type="text"
                            placeholder="Título" 
                        />

                        <Input
                            type="number"
                            placeholder="Sua nota (de 0 a 5)" 
                            min="0"
                            max="5"
                        />
                    </div>

                    <Textarea placeholder="Observações" />

                    <h3>Marcadores</h3>

                    <div className="tags">
                        <NoteItem value="Drama"/>
                        <NoteItem placeholder="Novo marcador" isNew />
                    </div>

                    <div className="btnTwoColumns">
                        <Button className="special" title="Excluir Filme" />
                        <Button title="Salvar Alterações" />
                    </div>
                </Form>

            </main>
        </Container>
    )
}