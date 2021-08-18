ClassicEditor
.create( document.querySelector( '#editor' ), {
  placeholder: 'Reply an answer…',
  // 設定 Heading 內的樣式，可新增多個
  heading: {
    options: [
      { 
        model: 'paragraph', 
        title: 'Body Text', 
        class: 'ck-heading_paragraph' 
      },
    ]
  },
  indentBlock: {
      offset: 2,
      unit: 'rem'
  },
  language: 'zh',
} )
.then( editor => {
    console.log( 'Editor was initialized', editor );
} )
.catch( error => {
    console.error( error.stack );
} );

(function () {
  let card = document.querySelector(".card");
  let openBtn = document.querySelector(".js-editor-open");
  let cancelBtn = document.querySelector(".js-editor-cancel");
  let operationBtn = document.querySelector(".js-operation-btns");

  openBtn.addEventListener("click", function (e) {
    operationBtn.classList.add('d-none');
    card.classList.remove('rounded');
    card.classList.add('rounded-top');
    console.log('add active');
  });
  cancelBtn.addEventListener("click", function (e) {
    card.classList.remove('rounded-top');
    card.classList.add('rounded');
    operationBtn.classList.remove('d-none');
    console.log('remove active');
  });
}());