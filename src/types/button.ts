export default interface Button{
  content: string,
  style: string,
  type: string,
  textStyle:{
    common: string,

    mainText: {
      static: string,
      hovered: string,
      unhovered: string
    },

    secondText: {
      static: string,
      hovered: string,
      unhovered: string
    }
  }
}