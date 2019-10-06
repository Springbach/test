export interface IState {
  auth: boolean;
  userId: string;
  wait: boolean;
  error: 0|1|2|3;
  attemps: number;
}

interface LOGOUT {
  type: "LOGOUT";
}

interface LOGIN {
  type: "LOGIN_ATTEMP";
  email: string;
  password: string;
}

interface SRSUCCESS {
  type: "SERVER_REQUEST_SUCCESS";
  userId: string;
  auth: boolean;
}

interface SRFAIL {
  type: "SERVER_REQUEST_FAIL";
  error: 0|1|2|3;
}

export type Actions = LOGIN | LOGOUT | SRSUCCESS | SRFAIL;

export const initialState: IState = {
  auth: false,
  userId: "",
  wait: false,
  error: 0,
  attemps: 0,
};

export const reducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case 'LOGOUT':
      return { ...state, auth: false, userId: "" };
    case 'LOGIN_ATTEMP':
      return { ...state, email: action.email, password: action.password, attemps: ++state.attemps };
    case 'SERVER_REQUEST_SUCCESS':
       return {...state, userId: action.userId, auth: true};
    case 'SERVER_REQUEST_FAIL':
       return {...state, error: action.error}
  }
};
