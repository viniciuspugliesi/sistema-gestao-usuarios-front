// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    applicationName: 'SGU (Sistema de Gestão de Usuários)',
    localStorage: {
        user: '99f3fcb5a9842547bebe19425yU5Cj06H01e1',
        token: '632DlYce4b587rT8u9H0jKgf3fcb5a98jKgd3',
    },
    encryption: {
        secretKey: '7632f25390adjLyU5Cj06DlYrT8uH0jKg3d3a0e562b4fcb87d232a',
    },
    firebase: {
        apiKey: 'AIzaSyC5u0FL-FAXEWaoro0YKhKeHiuN7KomhD0',
        authDomain: 'sistema-gestao-usuarios.firebaseapp.com',
        databaseURL: 'https://sistema-gestao-usuarios.firebaseio.com',
        projectId: 'sistema-gestao-usuarios',
        storageBucket: '',
        messagingSenderId: '1060180906960',
        appId: '1:1060180906960:web:0ac0ad001f4e4a5f'
    }
};
