function Init() {

    const editor = SUNEDITOR.create(
      document.getElementById('editorHTML'),
      {
        fullPage: true,
        buttonList: [
          ['undo', 'redo'],
          ['font', 'fontSize', 'formatBlock'],
          ['paragraphStyle', 'blockquote'],
          ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
          ['fontColor', 'hiliteColor', 'textStyle'],
          ['removeFormat'],
          ['outdent', 'indent'],
          ['align', 'horizontalRule', 'list', 'lineHeight'],
          ['table', 'link', 'image', 'video', 'audio'],
          ['fullScreen', 'showBlocks', 'codeView'],
          ['print']
        ],
        lang: SUNEDITOR_LANG['ru']
      }
    )

   editor.onChange = function(contents, core) {onChange.click()};

   return editor
}