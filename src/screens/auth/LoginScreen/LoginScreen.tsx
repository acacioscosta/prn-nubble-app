import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export const LoginScreen = () => {
  return (
    <Screen>
      <Text mb="s8" preset="headingLarge">
        Olá
      </Text>

      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="Email"
        placeholder="Digite seu e-mail"
        errorMessage="Mensagem de erro"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text color="primary" bold preset="paragraphSmall">
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mt="s48" />

      <Button title="Criar uma conta" preset="outline" mt="s12" />
    </Screen>
  );
};
