export default () => ({
  is_mobile: false, // movil o desktop(<=600px)
  is_table: false, // movil o desktop(<=960px)
  is_table_only: false, // movil o desktop(600px =>) (<=960px)
  is_table_xl: false, // movil o desktop(<=1050px)
  width: {
    screen: 0, // almacena el ancho de la pantalla
    max_form: '600px', // ancho maximo para formularios
    max_grid: '900px' // ancho maximo para grillas(solo se usa en grillas creadas desde cero)
  }
})