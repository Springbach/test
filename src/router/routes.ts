import Main from "../pages/main";
import Profile from "../pages/profile";
import News from "../pages/news";
import Login from "../pages/login";

interface Routes {
  links: Array<{ name: string; to: string, icon?: any, private: boolean, showLink: boolean, component: any }>
}

const routes: Routes = {
  links: [
    { name: "Главная", to: "/", component: Main, private: false, showLink: true},
    { name: "Новости", to: "/news", component: News, icon:"", private: false, showLink: true },
    { name: "Мой профиль", to: "/profile", component: Profile, icon:"", private: true, showLink: true },
    { name: "Вход", to: "/login", component: Login, icon:"", private: false, showLink: false }
  ]
}

export {routes};
