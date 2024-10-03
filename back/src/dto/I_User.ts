import I_Credential from "./I_Credential";


interface I_User {


    name: string;
    email: string;
    password: string;
    birthdate: Date;
    nDni: number;
    role: string;


}

export default I_User;


/*

    User

        id: ID numérico que identifica al usuario.

        name: nombre completo del usuario.

        email: dirección de email del usuario.

        birthdate: fecha de nacimiento.

        nDni: número de DNI o identificación.

        credentialsId: ID de las credenciales, referencia al par de credenciales que posee el usuario.

*/