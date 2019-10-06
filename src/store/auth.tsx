export interface State {
  auth: boolean;
  userId: string;
}

interface LOGOUT {
  type: "LOGOUT";
}

interface LOGIN {
  type: "LOGIN";
  userId: string;
}

export type Actions = LOGIN | LOGOUT;

export const initialState: State = {
  auth: false,
  userId: "",
};

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'LOGOUT':
      return { ...state, auth: false, userId: "" };
    case 'LOGIN':
       console.log('LOGIN ACTION');
       return {...state, userId: action.userId, auth: true};
  }
};
