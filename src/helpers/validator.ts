interface Email {
    type: 'email';
    value: string;
}

interface Password {
    type: 'password';
    value: string;
}

type Param = Email | Password;

function Validate(p: Param) {
    switch (p.type) {
        case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.value);
        case 'password':
            //special rules for password
            return true;
        default:
            return false;
    }
}

export { Validate };
