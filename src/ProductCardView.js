export default class ProductCardView {
  constructor(data) {
    this.data = data
    this.element = null
    //Нужно для хранения коллбэка клика для последующего его корректного удаления
    this.clickCallback = null;
  }

  render(container) {
    container.append(this.getElement())
  }

  getId() {
    return this.data.id
  }

  getHtml() {
    return `<h2>${this.data.title}</h2><p>${this.data.price}</p>`
  }

  getElement() {
    if(this.element) return this.element

    this.element = document.createElement('DIV');
    this.element.classList.add('card')
    this.element.insertAdjacentHTML('afterbegin', this.getHtml())

    return this.element
  }

  update(data) {
    this.data = data;
    this.element.textContent = ''
    this.element.insertAjacentHtml('afterbegin', this.getHtml())
  }

  // Функция добавления коллбэка на клик
  addClickListener(callback){
    if(this.element){
      if(this.clickCallback) this.element.removeClickListener('click',this.clickCallback)
      this.element.addEventListener('click',callback)
      this.clickCallback = callback
    }
  }

  //Функция удаления коллбэка
  removeClickListener(){
    if(this.element){
      if(this.clickCallback) {
        this.element.removeClickListener('click', this.clickCallback)
        this.clickCallback = null;
      }
    }
  }
}
