"use strict";

ClassicEditor.create(document.querySelector('#editor'), {
  toolbar: ['heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'imageUpload', 'link', 'code', '|', 'outdent', 'indent'],
  placeholder: 'Reply an answer…',
  heading: [{
    model: 'paragraph',
    title: 'Paragraph',
    "class": 'ck-heading_paragraph'
  }, {
    model: 'heading1',
    view: 'h2',
    title: 'Heading 1',
    "class": 'ck-heading_heading1'
  }, {
    model: 'heading2',
    view: 'h3',
    title: 'Heading 2',
    "class": 'ck-heading_heading2_fancy',
    converterPriority: 'high'
  }]
}).then(function (editor) {
  console.log(editor);
})["catch"](function (error) {
  console.error(error);
});

(function () {
  var card = document.querySelector(".card");
  var openBtn = document.querySelector(".js-Reply");
  var cancelBtn = document.querySelector(".js-cancel");
  var replyGroupOuter = document.querySelector(".replyGroup-outer");
  var operationBtn = document.querySelector(".js-operation-btns");
  openBtn.addEventListener("click", function (e) {
    operationBtn.classList.add('d-none');
    card.classList.remove('rounded');
    card.classList.add('border-bottom-0', 'rounded-top');
    replyGroupOuter.classList.add('active');
    console.log('add active');
  });
  cancelBtn.addEventListener("click", function (e) {
    card.classList.remove('border-bottom-0', 'rounded-top');
    card.classList.add('rounded');
    replyGroupOuter.classList.remove('active');
    operationBtn.classList.remove('d-none');
    console.log('remove active');
  });
})();
//# sourceMappingURL=all.js.map
