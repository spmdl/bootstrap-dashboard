ClassicEditor
  .create( document.querySelector('#editor'), {
    toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList',  'imageUpload', 'link', 'code', '|', 'outdent','indent' ],
    placeholder: 'Reply an answer…',
    heading: [
      {
        model: 'paragraph',
        title: 'Paragraph',
        class: 'ck-heading_paragraph'
      },
      {
        model: 'heading1',
        view: 'h2',
        title: 'Heading 1',
        class: 'ck-heading_heading1'
      },
      {
        model: 'heading2',
        view: 'h3',
        title: 'Heading 2',
        class: 'ck-heading_heading2_fancy',
        converterPriority: 'high'
      }
    ],
  })
  .then( editor => {
    console.log( editor );
  } )
  .catch( error => {
    console.error( error );
  });

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