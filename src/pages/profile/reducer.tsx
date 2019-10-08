export interface State {
  profile: UserInfo | null;
}

interface UserInfo {
  city: string;
  languages: Array<string>;
  social: Array<{label: string, link: string}>;
}

interface FEED_USERPROFILE {
  type: "FEED_USERPROFILE";
  profile: UserInfo | null;
}

export type Actions = FEED_USERPROFILE;

export const initialState: State = {
  profile: null,
};

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'FEED_USERPROFILE':
        return {...state, profile: action.profile};
    default:
        return  state;
  }
};
