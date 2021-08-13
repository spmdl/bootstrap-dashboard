// 文章編輯器
ClassicEditor
  .create( document.querySelector( '#editor' ), {
    // 這裡可以設定 plugin
    placeholder: 'Reply an answer…',
  })
  .catch( error => {
      console.error( error );
  } );

$(function() {
  $('.js_ckeditor_content').hide();

  // 開啟編輯
  $('.js-editor-open').on('click', function () {
    $('.js_reply_content').slideUp();
    $('.js_ckeditor_content').slideDown();
    $('.js_operation_btns').toggleClass('d-none');
  });
  // 關閉編輯
  $('.js-editor-close').on('click', function () {
    $('.js_reply_content').slideDown();
    $('.js_ckeditor_content').slideUp();
    $('.js_operation_btns').toggleClass('d-none');
  });
});