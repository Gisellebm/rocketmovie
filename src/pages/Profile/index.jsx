import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Form, Avatar } from "./styles";
import { api } from '../../services/api';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);


    async function handleUpdate( ) {
        const user = {
            name,
            email,
            old_password: oldPassword,
            password: newPassword
        }

        await updateProfile({ user, avatarFile });
    }

    function handleChangeAvatar(e) {
        const file = e.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }
    
    return (
        <Container>
            <header>
                <ButtonText icon={FiArrowLeft} text="Voltar" to="/" />    
            </header>

            <Form>
                <Avatar>
                    <img
                        src={avatar}
                        alt='Foto do Usuário' 
                    />

                    <label htmlFor='avatar'>
                        <FiCamera />

                        <input 
                            id='avatar'
                            type="file"
                            onChange={handleChangeAvatar}
                        />

                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser} 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail} 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock} 
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock} 
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate} />

            </Form>
        </Container>
    )
}