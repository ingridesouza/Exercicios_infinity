# [PY-A01] Faça um programa em python que determine em duas variáveis (senha e email) e que contenha uma senha e um email cadastrados antecipadamente, em seguida solicite ao usuário uma senha e um email e utilize o laço de repetição juntamente com a estrutura de condição para verificar se o email e a senha digitado pelo usuário é igual ao email e senha cadastrados antecipadamente. E enquanto a senha e o email que o usuário digitou não for igual ao email e senha cadastrados ele continue em um loop.

expectedEmail = "ingridesouza040@gmail.com"
expectedPassword = "senhasenhasenha"

while True:
    userEmail = input("Digite o seu email: ")

    if userEmail == expectedEmail:
        print("Email Válido")
        
        userPassword = input("Digite a sua senha: ")
        
        if userPassword == expectedPassword:
            print("Usuário Logado")
            break
        else:
            print("Senha Incorreta")
    else:
        print("Email Incorreto")
