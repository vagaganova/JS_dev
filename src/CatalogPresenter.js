import ProductCardView from "./ProductCardView";

export default class CatalogPresenter {
  constructor(catalogModel, cartModel) {
    this.catalogModel = catalogModel;
    this.cartModel = cartModel;
    this.container = document.querySelector('.showcase')
    this.cards = [];

    this.catalogModel.subscribe('onSet', (catalog) => {
      this.cards = catalog.map((product) => new ProductCardView(product))
      this.cards.forEach((card) => {
        card.render(this.container);
        card.addClickListener(this.onClickCatalogElement.bind(this,card))
      })
    })
  }

  init() {
    this.catalogModel.init()
    this.cartModel.init()
  }

  //Функция для обработки клика на карточку продукта добавляющая в корзину
  onClickCatalogElement(card,$event){
    this.cartModel.add(card.data)
  }
}
