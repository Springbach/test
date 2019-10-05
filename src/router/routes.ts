interface Routes {
  links: Array<{ name: string; to: string, icon?: any, private: true | false }>
}


const routes: Routes = {
  links: [
    { name: "Главная", to: "/", private: false},
    { name: "Новости", to: "/news", icon:"", private: false },
    { name: "Мой профиль", to: "/profile", icon:"", private: true }    
  ]
}

export {routes};
