export const menuNavList = [
  {
    name: "Gestion del Sistema",icon: "SystemManagement",
    subMenu: [
      { name: "Roles y Funciones", route: "Roles y Funciones" },
      { name: "Formulario Registro de Usarios", route: "Formulario Registro de Usarios" },
    ],
    subMenuVisible: false //propiedad para controlar la visibilidad del submenú
  },

  {
    name: "Gestion del Usuario",icon: "",
    subMenu: [
      { name: "Crear usuario (individual)", route: "Crear usuario (individual)"},
      { name: "Crear y actualizar usuarios (masivo)", route: "Crear y actualizar usuarios (masivo)" },
      { name: "Consultar y gestionar usuarios", route: "Consultar y gestionar usuarios" },
    ],
    subMenuVisible: false
  },

  {
    name: "Gestion de programas",icon: "",
    subMenu: [
      { name: "Informacion general", route: "Informacion general"},
      { name: "Board Pricipal (Banner)", route: "Board Pricipal (Banner)" },
      { name: "Widgets (Zona mas beneficios para ti)", route: "Widgets (Zona mas beneficios para ti)"},
      { name: "Noticias", route: "Noticias"},
    ],
    subMenuVisible: false
  },

  {
    name: "Gestion de misiones",icon: "",
    subMenu: [
      { name: "Crear mision", route:"Crear mision"},
      { name: "Misiones activas", route: "Misiones activas" },
      { name: "Misiones cerradas", route: "Misiones cerradas"},
      { name: "Calificar misiones", route: "Calificar misiones"},
    ],
    subMenuVisible: false
  },

  {
    name: "Gestion de estilos y presentacion",icon: "",
    subMenu: [
      { name: "Diseños de sistemas", route:"Diseños de sistemas"},
      { name: "Configurar pie de pagina", route: "Configurar pie de pagina" },
    ],
    subMenuVisible: false
  },


];
