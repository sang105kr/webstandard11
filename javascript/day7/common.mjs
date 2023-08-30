export const makeDialog = (title, btn1, btn2) => {
  const $dialog = document.createElement('template');
  $dialog.innerHTML = `<dialog id="dialogConfirm" style="border-radius:10%">
          <p class="title">제목</p>
          <menu>
            <button class="btn btn1">버튼1</button>
            <button class="btn btn2">버튼2</button>
          </menu>
        </dialog>`;

  //제목 수정
  $dialog.content.querySelector('.title').textContent = title;
  $dialog.content.querySelector('.btn1').textContent = btn1;
  $dialog.content.querySelector('.btn2').textContent = btn2;
  return $dialog;
};
