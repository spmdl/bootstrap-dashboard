"use strict";

ClassicEditor.create(document.querySelector('#editor'), {
  placeholder: 'Reply an answer…',
  // 設定 Heading 內的樣式，可新增多個
  heading: {
    options: [{
      model: 'paragraph',
      title: 'Body Text',
      "class": 'ck-heading_paragraph'
    }]
  },
  indentBlock: {
    offset: 2,
    unit: 'rem'
  },
  language: 'zh'
}).then(function (editor) {
  console.log('Editor was initialized', editor);
})["catch"](function (error) {
  console.error(error.stack);
});

(function () {
  var card = document.querySelector(".card");
  var openBtn = document.querySelector(".js-editor-open");
  var cancelBtn = document.querySelector(".js-editor-cancel");
  var operationBtn = document.querySelector(".js-operation-btns");
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
})();
//# sourceMappingURL=all.js.map
